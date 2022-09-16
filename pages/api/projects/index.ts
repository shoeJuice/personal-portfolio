// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { firebaseFirestore } from "../../../config/firebaseConfig";
import { query, collection, getDocs, orderBy } from "firebase/firestore";

type Data = {
  demo: string;
  description: string;
  image: string;
  repo: string;
  title: string;
  technologies: string[];
  languages: string[];
};

/**
 * Get all projects from the database.
 */
export default function getAllProjects(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  const queryAllProjects = query(collection(firebaseFirestore, "projects"), orderBy("priority", "asc"));
  const getAllProjects = async () => {
    const querySnapshot = await getDocs(queryAllProjects).catch((err) => {
      throw new Error(err);
    });
    return querySnapshot.docs.map((doc) => {
      let docToJSONString = JSON.stringify(doc.data());
      return JSON.parse(docToJSONString);
    });
  };
  return new Promise((resolve, reject) => {
    getAllProjects().then((data) => {
      res.status(200).json(data);
      resolve(null);
    });
  });
}
