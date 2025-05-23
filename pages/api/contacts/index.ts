import type { NextApiRequest, NextApiResponse } from "next";
import { firebaseApp, firebaseFirestore } from "../../../config/firebaseConfig";
import {
  query,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import renderEmailTemplateToHTML, { ContactEmailTemplate } from "../../../modules/templates/contactEmail";

type Data = {
  "First Name": string;
  "Last Name": string;
  "Email Address": string;
  Message: string;
  createdAt: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const queryAllContacts = query(collection(firebaseFirestore, "contact-list"));

  const getAllContacts = async () => {
    const querySnapshot = await getDocs(queryAllContacts).catch((err) => {
      throw new Error(err);
    });
    return querySnapshot.docs.map((doc) => {
      let docToJSONString = JSON.stringify(doc.data());
      return JSON.parse(docToJSONString);
    });
  };

  const addContact = async (contact: Data) => {
    return await addDoc(collection(firebaseFirestore, "contact-list"), contact)
      .then(async (doc) => {
        const contactMessageHtml = renderEmailTemplateToHTML(ContactEmailTemplate, contact);
        await addDoc(collection(firebaseFirestore, "mail"), {
          to: process.env.EMAIL_ADDRESS,
          message: {
            subject: `New Contact Request From ${contact["First Name"]} ${contact["Last Name"]}`,
            text: contact.Message,
            html: contactMessageHtml,
          },
        });
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  switch (method) {
    case "GET":
      return new Promise((resolve, reject) => {
        getAllContacts().then((data) => res.status(200).json(data));
        resolve(null);
      });
    case "POST":
      return new Promise((resolve, reject) => {
        let resData = null;
        addContact(req.body)
          .then((data) => {
            console.log("Incoming Data", req.body);
            resolve(res.status(200).json(data));
          })
          .catch((err) => reject(err));
      });
    default:
      return new Promise((resolve, reject) => {
        res.setHeader("Allow", ["GET", "POST"]);
        res.status(405).end(`Method ${method} Not Allowed`);
        resolve(res);
      });
  }
}
