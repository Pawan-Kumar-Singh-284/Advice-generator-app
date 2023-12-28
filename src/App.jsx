import { useState } from "react";
import "./App.css";
import Container from "./Components/Container";

function App() {
  const [advice, setAdvice] = useState("");

  const handleClick = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.slip);
        setAdvice(data.slip);
      });
  };

  return (
    <>
      <Container handleClick={handleClick} advices={advice}></Container>
    </>
  );
}

export default App;
