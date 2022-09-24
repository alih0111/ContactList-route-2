import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import getContacts from "../../services/getContactsService";
import Contact from "./Contact/Contact";
import deleteContact from '../../services/deleteContactsService'
import "./ContactList.css";

export default function ContactList() {
  const [contacts, setContacts] = useState(null);
  const [allcontacts, setAllContacts] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchContacts = async () => {
      const { data } = await getContacts();
      setContacts(data);
      setAllContacts(data);
    };
    try {
      fetchContacts();
    } catch (error) {}
  }, []);

  const deleteContactHandler = async (id) => {
    try {
      await deleteContact(id);
      const filteredContacts = contacts.filter((c) => c.id !== id);
      setContacts(filteredContacts);
    } catch (error) {}
  };

  const searchHandler = (e) => {
    const search = e.target.value;
    setSearchTerm(search);
    // filter Contacts
    if (search !== "") {
      const filteredContacts = allcontacts.filter((c) => {
        return Object.values(c)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setContacts(filteredContacts);
    } else {
      setContacts(allcontacts);
    }
  };

  return (
    <section className="listWrapper">
      <div className="contactList">
        <div className="listHeader">
          <h2>Contacts</h2>
          <Link to="/add">
            <button>Add</button>
          </Link>
          <div>
            <input type="text" value={searchTerm} onChange={searchHandler} />
          </div>
        </div>
        {contacts ? (
          contacts.map((contact) => {
            return (
              <Contact contact={contact} onDelete={deleteContactHandler} />
            );
          })
        ) : (
          <p>Loading ...</p>
        )}
      </div>
    </section>
  );
}
