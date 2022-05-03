import { useState } from "react";
import Header from "./components/Header";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {
  const [budget, setBudget] = useState(0);
  const [isValid, setIsValid] = useState(false);

  return (
    <>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValid={isValid}
        setIsValid={setIsValid}
      />
      {isValid && (
        <div className="nuevo-gasto">
          <img src={IconoNuevoGasto} alt="Nuevo Gasto" />
        </div>
      )}
    </>
  );
}

export default App;
