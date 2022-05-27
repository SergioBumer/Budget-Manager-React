import { useState, useEffect } from "react";
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
  const [gastoEditar, setGastoEditar] = useState({});

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setNewExpenseModal(true);
      setTimeout(() => {
        setAnimateModal(true);
      }, 250);
    }
  }, [gastoEditar]);

  const handleNewExpense = () => {
    setNewExpenseModal(true);
    setGastoEditar({});
    setTimeout(() => {
      setAnimateModal(true);
    }, 250);
  };

  const guardarGasto = (gasto) => {
    if (gasto.id) {
      const gastosActualizados = gastos.map((gastoState) =>
        gasto.id === gastoState.id ? gasto : gastoState
      );
      setGastos(gastosActualizados);
    } else {
      gasto.id = generarID();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);
    }

    setAnimateModal(false);
    setTimeout(() => {
      setNewExpenseModal(false);
    }, 500);
  };

  const eliminarGasto = (id) => {
    setGastos(gastos.filter((gastoState) => gastoState.id !== id));
  };

  return (
    <>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValid={isValid}
        setIsValid={setIsValid}
        gastos={gastos}
      />
      {isValid && (
        <>
          <main>
            <ListadoGastos
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
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
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}
        />
      )}
    </>
  );
}

export default App;
