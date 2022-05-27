import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";

const Header = ({ budget, setBudget, isValid, setIsValid, gastos }) => {
  return (
    <header>
      <h1>Expenses Planner</h1>
      {isValid ? (
        <ControlPresupuesto budget={budget} gastos={gastos} />
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
