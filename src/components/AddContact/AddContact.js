import React, { useState } from "react";
import addContact from "../../services/addContactService";
import "./addContact.css";

export default function AddContact({ history }) {
  const [contact, setContact] = useState({ name: "", email: "" });

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    if (!contact.name || !contact.email) {
      alert("all fildes are mandatory");
      return;
    }
    e.preventDefault();
    try {
      await addContact(contact);
      history.push("/");
    } catch (error) {}
    // addContactHandler(contact);
    // setContact({ name: "", email: "" });
  };

  return (
    <form onSubmit={submitForm}>
      <div className="formControl">
        <label>name</label>
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={changeHandler}
        />
      </div>
      <div className="formControl">
        <label>email</label>
        <input
          type="email"
          name="email"
          value={contact.email}
          onChange={changeHandler}
        />
      </div>
      <button type="submit">Add contact</button>
    </form>
  );
}
