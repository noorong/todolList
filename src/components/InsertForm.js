import React, { useCallback, useState } from "react";

const InsertForm = ({ onInsert }) => {
  const [inputValue, setInputValue] = useState("");

  const submitHandler = useCallback(
    (e) => {
      e.preventDefault();
      if (typeof onInsert == "function") onInsert(inputValue);
      setInputValue("");
    },
    [onInsert, inputValue]
  );

  return (
    <form
      onSubmit={submitHandler}
      style={{
        backgroundColor: "#ffffff",
        borderRadius: 16,
        marginBottom: 16,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        type="submit"
        style={{
          border: "none",
          borderRadius: 16,
          backgroundColor: "#3ab6bc",
          cursor: "pointer",
          padding: "8px 16px",
          color: "#ffffff",
        }}
      >
        등록
      </button>
    </form>
  );
};

export default InsertForm;
