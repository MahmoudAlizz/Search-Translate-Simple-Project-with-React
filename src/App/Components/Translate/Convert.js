import React, { useEffect, useState } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText,setDebouncedText] =useState(text);

  useEffect (()=>{
    const timeId =setTimeout(()=>{
        setDebouncedText(text);
    },1000);

    return ()=>{
        clearTimeout(timeId);
    }
  },[text]);

  useEffect(() => {
   const doTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: text,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText)
    };
    doTranslation();
  }, [debouncedText, language]);
  return (
    <form action="" className="font-weight-bold">
      <div className="form-group">
        <label className="font-wieght-bold" htmlFor="output">
          Output
        </label>
        <input
          id="output"
          readOnly
          type="text"
          value={translated}
          className="form-control"
        />
      </div>
    </form>
  );
};

export default Convert;
