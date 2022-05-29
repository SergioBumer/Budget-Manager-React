import { useState } from "react";
import Mensaje from "./mensaje";
const NuevoPresupuesto = ({ budget, setBudget, setIsValid}) => {
  let currentBudget = 0;
  let isValid = false;
  const [mensaje, setMensaje] = useState("");
  const handleBudget = (e) => {
    e.preventDefault();
    const initialBudget = Number(e.target.value);
    if (!initialBudget || initialBudget <= 0) {
      setMensaje("No es un presupuesto válido.");
      isValid = false;
      return;
    }
    currentBudget = initialBudget;
    isValid = true;
    setMensaje("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBudget(currentBudget);
    setIsValid(isValid);
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario" onSubmit={handleSubmit}>
        <div className="campo">
          <label className="">Determine Budget</label>
          <input
            className="nuevo-presupuesto"
            type="number"
            placeholder="Add your Budget"
            onChange={handleBudget}
          />
          <input type="submit" value="ADD" />
        </div>
        {mensaje ? <Mensaje mensaje={mensaje} tipo="error" /> : ""}
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
