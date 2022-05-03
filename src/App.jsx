import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [budget, setBudget] = useState(0);
  const [isValid, setIsValid] = useState(false);

  return (
    <>
      <Header budget={budget} setBudget={setBudget} isValid={isValid} setIsValid={setIsValid} />
    </>
  );
}

export default App;
