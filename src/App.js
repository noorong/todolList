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

  const completeHandler = (index) => {
    setTodoList((current) => {
      const newList = [...current];
      newList[index].isCompleted = true;
      return newList;
    });
  };
  const removeHandler = (index) => {
    setTodoList((current) => {
      const newList = [...current];
      newList.splice([index], 1);
      return newList;
    });
  };

  return (
    <div className="App">
      <InsertForm onInsert={InsertHandler} />
      <ListView
        todoList={todoList}
        onComplete={completeHandler}
        onRemove={removeHandler}
      />
    </div>
  );
}

export default App;
