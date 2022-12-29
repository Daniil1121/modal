import { useState, useEffect } from "react";
import "./App.css";
import Modal from "./Modal";

function App(): React.ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [completed, setCompleted] = useState<boolean>(false);

  const clickHandler = () => {
    if (completed) {
      alert("Действие выполнено");
    } else {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    if (completed) {
      alert("Действие выполнено");
    }
  }, [completed]);

  return (
    <div className="App">
      <button className="btn" onClick={clickHandler}>
        Выполнить действие!
      </button>
      {isOpen && <Modal setCompleted={setCompleted} setIsOpen={setIsOpen} />}
    </div>
  );
}

export default App;
