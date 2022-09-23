import React, { useEffect, useState } from "react";
import getOneContact from "../../services/getOneContact";
// import "./addContact.css";

export default function EditContact({ history, match }) {
  const [contact, setContact] = useState({ name: "", email: "" });

  useEffect(() => {
    const localFetch = async () => {
      try {
        const { data } = await getOneContact(match.params.id);
        setContact(data);
      } catch (error) {}
    };
    localFetch();
  }, []);

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    if (!contact.name || !contact.email) {
      alert("all fildes are mandatory");
      return;
    }
    e.preventDefault();
    // editContactHandler(contact,match.params.id);

    //put
    try {
      await updateContact(match.params.id, contact);
      history.push("/");
    } catch (error) {}
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
      <button type="submit">Edit contact</button>
    </form>
  );
}
