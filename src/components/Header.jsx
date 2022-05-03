import NuevoPresupuesto from "./NuevoPresupuesto"

const Header = ({budget, setBudget}) => {
  return (
    <header>
        <h1>Expenses Planner</h1>
        <NuevoPresupuesto budget={budget} setBudget={setBudget}  />
    </header>
  )
}

export default Header