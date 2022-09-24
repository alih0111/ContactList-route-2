import { Link } from "react-router-dom";
import './contactDetail.css'

export default function ContactDetail({ location }) {
  const { contact } = location.state;
  return (
    <div className="formc">
      <p>name: {contact.name}</p>
      <p>email: {contact.email}</p>
      <Link to='/'>Go To Contact List</Link>
    </div>
  );
}
