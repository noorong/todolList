import React from "react";

const ListView = ({ todoList }) => {
  return (
    <div>
      <ol>
        {todoList.map((item) => {
          return (
            <li key={item.key}>
              <span>{item.value}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default ListView;
