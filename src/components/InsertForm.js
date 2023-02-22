import React, { useState } from "react";

const InsertForm = ({ onInsert }) => {
  const [inputValue, setInputValue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (typeof onInsert == "function") onInsert(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button type="submit">등록</button>
    </form>
  );
};

export default InsertForm;
