import userImage from "../../../assets/images/user-img.png";
import { Link } from "react-router-dom";

export default function Contact({ contact, onDelete }) {
  const { id, name, email } = contact;
  return (
    <div key={id} className="item">
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={userImage} alt="user" />
        <Link to={{ pathname: `user/${id}`, state: { contact: contact } }}>
          <div>
            <p>name:{name}</p>
            <p>name:{email}</p>
          </div>
        </Link>
      </div>
      <div>
        <Link to={`/edit/${id}`}>
          <button className="editBtn">Edit</button>
        </Link>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </div>
  );
}
