import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    fetch("/api/todo").then((response) => {
      response.json().then(function (data) {
        setTodoList(data);
      });
    });
  }, []);
  return (
    <div className='App'>
      <ul>
        {todoList.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
