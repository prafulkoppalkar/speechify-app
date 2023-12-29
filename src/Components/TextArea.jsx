import { useState } from "react";
import { requestBody } from "../CustomHooks/constants";
import { useRequestContext } from "../ContextProvider";

const TextArea = () => {
  const { requestData, setRequestData } = useRequestContext()
  const [inputText, setInputText] = useState("");
  const handleTextChange = (e) => {
    setInputText(e.target.value);
    setRequestData({
      ...requestData,
      input: {
        ssml: e.target.value ? e.target.value : requestBody.input.ssml,
      },
    });
  };
  return (
    <div className="text__container">
      <textarea
        className="text__area"
        value={inputText}
        onChange={handleTextChange}
        placeholder="Enter text here..."
      />
    </div>
  );
};

export default TextArea;
