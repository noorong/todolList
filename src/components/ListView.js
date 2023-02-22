import React from "react";

const ListView = ({ todoList }) => {
  return (
    <div>
      <ol>
        {todoList.map((item) => {
          return (
            <li>
              <span>{item}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default ListView;
