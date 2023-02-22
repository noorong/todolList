import { useState } from "react";
import InsertForm from "./components/InsertForm";
import ListView from "./components/ListView";

function App() {
  const [todoList, setTodoList] = useState([]);
  const InsertHandler = (value) => {
    setTodoList((current) => {
      const newList = [...current];
      newList.push({
        value,
        key: new Date().getTime(),
        isCompleted: false,
      });
      return newList;
    });
  };
  return (
    <div className="App">
      <InsertForm onInsert={InsertHandler} />
      <ListView todoList={todoList} />
    </div>
  );
}

export default App;
