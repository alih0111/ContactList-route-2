import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/ContactList";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import ContactDetail from "./components/ContactDetail/ContactDetail";
import EditContact from "./components/EditContact/EditContact";

export default function App() {
  return (
    <main className="App">
      <h1> Contact Manager</h1>
      <Switch>
        <Route path="/user/:id" component={ContactDetail} />
        <Route path="/edit/:id" component={EditContact} />
        <Route path="/add" component={AddContact} />
        <Route path="/" exact component={ContactList} />
      </Switch>
    </main>
  );
}