import { useState } from "react";
import Header from "./components/Header";
import ListadoGastos from "./components/ListadoGastos";
import NuevoGastoModal from "./components/NuevoGastoModal";
import { generarID } from "./helpers/index";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {
  const [budget, setBudget] = useState(0);
  const [isValid, setIsValid] = useState(false);

  const [newExpenseModal, setNewExpenseModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [gastos, setGastos] = useState([]);

  const handleNewExpense = () => {
    setNewExpenseModal(true);

    setTimeout(() => {
      setAnimateModal(true);
    }, 250);
  };

  const guardarGasto = (gasto) => {
    console.log(generarID());
    gasto.id = generarID();
    gasto.fecha = Date.now();
    setGastos([...gastos, gasto]);
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
        <>
          <main>
            <ListadoGastos gastos={gastos} />
          </main>
          <div className="nuevo-gasto">
            <img
              src={IconoNuevoGasto}
              alt="Nuevo Gasto"
              onClick={handleNewExpense}
            />
          </div>
        </>
      )}

      {newExpenseModal && (
        <NuevoGastoModal
          setNewExpenseModal={setNewExpenseModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
          guardarGasto={guardarGasto}
        />
      )}
    </>
  );
}

export default App;
