import { useState } from "react";
import Header from "./components/Header";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";
import NuevoGastoModal from "./components/NuevoGastoModal";

function App() {
  const [budget, setBudget] = useState(0);
  const [isValid, setIsValid] = useState(false);

  const [newExpenseModal, setNewExpenseModal] = useState(false);

  const handleNewExpense = () => {
    setNewExpenseModal(true);
  };

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
          <img src={IconoNuevoGasto} alt="Nuevo Gasto" onClick={handleNewExpense} />
        </div>
      )}

      {newExpenseModal && <NuevoGastoModal setNewExpenseModal={setNewExpenseModal}/>}
    </>
  );
}

export default App;
