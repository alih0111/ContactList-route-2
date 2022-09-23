import { Link } from "react-router-dom";

export default function ContactDetail({ location }) {
  const { contact } = location.state;
  return (
    <div>
      <p>name: {contact.name}</p>
      <p>email: {contact.email}</p>
      <Link to='/'>Go To Contact List</Link>
    </div>
  );
}
