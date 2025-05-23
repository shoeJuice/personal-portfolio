import { theme } from "@chakra-ui/react";
import ReactDOMServer from "react-dom/server";

type ContactEmailProps = {
  "First Name": string;
  "Last Name": string;
  "Email Address": string;
  Message: string;
  createdAt: string;
};

const tableStyle: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse", // Essential for consistent borders
  marginTop: "20px", // Basic top margin
  marginBottom: "20px", // Basic bottom margin
};

const thTdStyle: React.CSSProperties = {
  border: "1px solid #ddd",
  padding: "8px", 
  textAlign: "center", 
  verticalAlign: "top", 
};

const thStyle: React.CSSProperties = {
  backgroundColor: "#f2f2f2", 
  fontWeight: "bold", 
  color: "#333", 
};

const messageStyle: React.CSSProperties = {
  backgroundColor: theme.colors.purple[200],
  borderRadius: "6px",
  padding: "6px",
  width: "100%",
  marginTop: "10px",
};

const ContactEmailTemplate: React.FC<ContactEmailProps> = (props) => {
  return (
    <div>
      <h1>Contact Info</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={thTdStyle}>{props["First Name"]}</td>
            <td style={thTdStyle}>{props["Last Name"]}</td>
            <td style={thTdStyle}>{props["Email Address"]}</td>
          </tr>
        </tbody>
      </table>
      <div
        style={messageStyle}
      >
        <h2>Message:</h2>
        <p>{props.Message}</p>
      </div>
    </div>
  );
};

export { ContactEmailTemplate };

export default function renderEmailTemplateToHTML<
  P extends React.ComponentType<any>
>(Component: P, props: React.ComponentProps<P>): string {
  return ReactDOMServer.renderToStaticMarkup(<Component {...props} />);
}
