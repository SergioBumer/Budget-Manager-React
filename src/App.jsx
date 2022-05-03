import { useState } from "react";
import Header from "./components/Header";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";
import NuevoGastoModal from "./components/NuevoGastoModal";

function App() {
  const [budget, setBudget] = useState(0);
  const [isValid, setIsValid] = useState(false);

  const [newExpenseModal, setNewExpenseModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const handleNewExpense = () => {
    setNewExpenseModal(true);

    setTimeout(() => {
      setAnimateModal(true);
    }, 250);
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

      {newExpenseModal && <NuevoGastoModal setNewExpenseModal={setNewExpenseModal} animateModal={animateModal} setAnimateModal={setAnimateModal} />}
    </>
  );
}

export default App;
