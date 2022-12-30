import React from "react";

export default function Form({
  photo,
  setPhoto,
  name,
  setName,
  title,
  setTitle,
  fact,
  setFact,
  showOutput,
  setShowOutput
}) {
  return (
    <div className="input">
      <form
        onSubmit={(e) => {
          e.preventDefault(); // stop submit from reloading the page
          setShowOutput(true);
        }}
      >
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

        <label htmlFor="form-fun-fact" style={{ verticalAlign: "top" }}>
          Fun Fact:{" "}
        </label>
        {/* <br /> */}
        <textarea
          id="form-fun-fact"
          name="w3review"
          value={fact}
          onChange={(e) => {
            setFact(e.target.value);
            setShowOutput(false);
          }}
        ></textarea>
        <br />

        <input type="submit" value="Generate!" />
      </form>
    </div>
  );
}
