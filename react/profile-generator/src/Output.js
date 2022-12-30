import React from "react";

export default function Output({ photo, name, title, fact }) {
  return (
    <div className="output">
      <div className="column">
        <img src={photo ?? ""} alt="profile photo" />
      </div>

      <div className="column">
        <h1 style={{ marginBottom: "-15px", marginTop: "2px" }}>
          {name ?? "error"}
        </h1>
        <p>
          <b>
            <i>{title ?? "error"}</i>
          </b>
        </p>
        <p>
          <b>Fun Fact:</b>
          <br /> {fact ?? "error"}
        </p>
      </div>
    </div>
  );
}
