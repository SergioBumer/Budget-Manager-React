import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";

const Header = ({
  budget,
  setBudget,
  isValid,
  setIsValid,
  gastos,
  setGastos,
}) => {
  return (
    <header>
      <h1>Expenses Planner</h1>
      {isValid ? (
        <ControlPresupuesto budget={budget} setBudget={setBudget} gastos={gastos} setGastos={setGastos} setIsValid={setIsValid} />
      ) : (
        <NuevoPresupuesto
          budget={budget}
          setBudget={setBudget}
          setIsValid={setIsValid}
        />
      )}
    </header>
  );
};

export default Header;
