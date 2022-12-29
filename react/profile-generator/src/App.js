import "./App.css";
import { useReducer, useState } from "react";
import { wait } from "@testing-library/user-event/dist/utils";

export function App() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fact, setFact] = useState("");

  function handleSubmit(event) {
    // do something on submit of form
    event.preventDefault(); // stop submit from reloading the page
    setOutput( "output was clicked!" );
  }

  const [output, setOutput] = useState("");

  return (
    <div>
      <h1>Profile Generator</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="form-name">Name: </label>
        <input id="form-name" type="text" value={name} onChange={setName} />
        <br/>
        
        <label htmlFor="form-title">Title: </label>
        <input id="form-title" type="text" value={title} onChange={setTitle} />
        <br/>
        
        <label htmlFor="form-email">Email: </label>
        <input id="form-email" type="email" value={email} onChange={setEmail} />
        <br/>
        
        <label htmlFor="form-phone">Phone: </label>
        <input id="form-phone" type="tel" value={phone} onChange={setPhone} />
        <br/>
        
        <label htmlFor="form-fun-fact">Fun Fact: </label>
        <input id="form-fun-fact" type="text" value={fact} onChange={setFact} />
        <br/>
        
        <input type="submit" value="Generate!" />
      </form>

      <h1>{output}</h1>
    </div>
  );
}

export default App;
