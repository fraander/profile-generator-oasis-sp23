import "./App.css";
import { useState } from "react";

export function App() {
  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fact, setFact] = useState("");

  const [showOutput, setShowOutput] = useState(false);

  function handleSubmit(event) {
    // do something on submit of form
    event.preventDefault(); // stop submit from reloading the page

    setShowOutput(true);
  }

  function onInputMade(event) {
    event.preventDefault();
    setShowOutput(false);
  }

  // use a styles object instead of CSS
  const appBorder = {
    margin: "0px",
    cornerRadius: "0px",
  };

  return (
    <div className="app" style={{ appBorder }}>
      <h1>Profile Generator</h1>

      <div className="input">
        <form onSubmit={handleSubmit}>
          <label htmlFor="form-photo">Photo: </label>
          <input
            id="form-photo"
            type="file"
            // no `value` because value is a path, but we want to store a photo
            onChange={(event) => {
              setPhoto(URL.createObjectURL(event.target.files[0]));
              setShowOutput(false);
            }}
            required
          />
          <br />

          <label htmlFor="form-name">Name: </label>
          <input
            id="form-name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setShowOutput(false);
            }}
            required
          />
          <br />

          <label htmlFor="form-title">Title: </label>
          <input
            id="form-title"
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setShowOutput(false);
            }}
            required
          />
          <br />

          <label htmlFor="form-email">Email: </label>
          <input
            id="form-email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setShowOutput(false);
            }}
            required
          />
          <br />

          <label htmlFor="form-phone">Phone: </label>
          <input
            id="form-phone"
            type="tel"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              setShowOutput(false);
            }}
            required
          />
          <br />

          <label htmlFor="form-fun-fact">Fun Fact: </label>
          <input
            id="form-fun-fact"
            type="text"
            value={fact}
            onChange={(e) => {
              setFact(e.target.value);
              setShowOutput(false);
            }}
            required
          />
          <br />

          <input type="submit" value="Generate!" />
        </form>
      </div>

      {showOutput ? (
        <div className="output">
          <div className="column">
            <img src={photo ?? ""} alt="profile photo" />

            <h1>{name ?? "error"}</h1>
            <p>{title ?? "error"}</p>
          </div>

          <div className="column">
            <p>
              <b>Email:</b> {email ?? "error"}
            </p>
            <p>
              <b>Phone:</b> {phone ?? "error"}
            </p>
            <p>
              <b>Fun Fact:</b> {fact ?? "error"}
            </p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
