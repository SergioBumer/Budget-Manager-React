import { useState } from "react";
import Mensaje from "./mensaje";
const NuevoPresupuesto = ({ budget, setBudget }) => {
  const [mensaje, setMensaje] = useState("");
  const handleBudget = (e) => {
    e.preventDefault();
    const initialBudget = Number(e.target.value);
    if (!initialBudget || initialBudget <= 0) {
      setMensaje("No es un presupuesto válido.");
    } else {
      console.log(initialBudget);
      setBudget(initialBudget);
      setMensaje("");
    }
  };
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario">
        <div className="campo">
          <label className="">Determine Budget</label>
          <input
            className="nuevo-presupuesto"
            type="text"
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
