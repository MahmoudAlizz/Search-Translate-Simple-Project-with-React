import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const Translate = () => {
  const options = [
    {
      label: "English",
      value: "en",
    },
    {
      label: "Arabic",
      value: "ar",
    },
    {
      label: "Franch",
      value: "fr",
    },
  ];
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <div className="row justify-content-center">
      <div className="col-8">
        <form className="mt-3" onSubmit={(e)=>{
                e.preventDefault();
                setText(document.getElementById("t1").value)
        }} action="" autoComplete="off">
          <div className="form-group">
            <label htmlFor="t1" className="font-weight-bold">
              Enter Text
            </label>
            <input
              type="text"
              className="form-control"
              id="t1"
              onChange={(e)=>{
                setText(e.target.value)
              }}
            />
          </div>
        </form>
        <Dropdown
          options={options}
          selected={language}
          setSelected={setLanguage}
          label="Select Language"
        />
        <Convert text={text} language={language} />
      </div>
    </div>
  );
};
export default Translate;
