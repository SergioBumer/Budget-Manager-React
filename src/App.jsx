import { useState, useEffect } from "react";
import Header from "./components/Header";
import ListadoGastos from "./components/ListadoGastos";
import NuevoGastoModal from "./components/NuevoGastoModal";
import Filtros from "./components/Filtros";
import { generarID } from "./helpers/index";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {
  const [budget, setBudget] = useState(
    Number(localStorage.getItem("budget")) ?? 0
  );
  const [isValid, setIsValid] = useState(false);

  const [newExpenseModal, setNewExpenseModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [gastos, setGastos] = useState(
    localStorage.getItem("expenses")
      ? JSON.parse(localStorage.getItem("expenses"))
      : []
  );
  const [gastoEditar, setGastoEditar] = useState({});

  const [filtro, setFiltro] = useState("");
  const [gastosFiltrados, setGastosFiltrados] = useState(gastos);

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setNewExpenseModal(true);
      setTimeout(() => {
        setAnimateModal(true);
      }, 250);
    }
  }, [gastoEditar]);

  useEffect(() => {
    localStorage.setItem("budget", budget ?? 0);
  }, [budget]);

  useEffect(() => {
    const gastosString = JSON.stringify(gastos);
    localStorage.setItem("expenses", gastosString ?? []);
    setFiltro("all");
    setGastosFiltrados(gastos);
  }, [gastos]);

  useEffect(() => {
    if (filtro) {
      const gastosFiltrados = gastos.filter(
        (gasto) => gasto.categoria === filtro
      );
      setGastosFiltrados(filtro === "all" ? gastos : gastosFiltrados);
    }
  }, [gastos, filtro]);

  useEffect(() => {
    const budgetLS = Number(localStorage.getItem("budget", budget ?? 0));
    if (budgetLS > 0) {
      setIsValid(true);
    }
  }, []);

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
        setGastos={setGastos}
      />
      {isValid && (
        <>
          <main>
            <Filtros filtro={filtro} setFiltro={setFiltro} />
            <ListadoGastos
              gastos={gastosFiltrados}
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
