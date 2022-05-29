import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ControlPresupuesto = ({ budget, setBudget, gastos, setGastos, setIsValid }) => {
  const [disponible, setDisponible] = useState(budget);
  const [gastado, setGastado] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => gasto.cantidad + total,
      0
    );
    const disponible = budget - totalGastado;
    const totalPorcentaje = (disponible / budget) * 100;
    setTimeout(() => {
      setPorcentaje(totalPorcentaje);
    }, 500);
    setGastado(totalGastado);
    setDisponible(budget - totalGastado);
  }, [gastos]);

  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const handleResetApp = () => {
    const confirmacion = confirm('¿Deseas resetear la app?');
    if (confirmacion) {
      setGastos([]);
      setBudget(0);
      setIsValid(false);
    }
  };
  console.log(disponible);
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <CircularProgressbar
        value={porcentaje}
        styles={buildStyles({
          pathColor: "#3b82f6",
          trailColor: "#F5F5F5",
          textColor: `${porcentaje > 0 ? "#3b82f6" : "red"} `,
        })}
        text={
          porcentaje > 0 ? `${porcentaje.toFixed(2)}% Disponible` : "Quebrado"
        }
      />
      <div className="contenido-presupuesto">
        <button className="reset-app" type="button" onClick={handleResetApp}>
          Resetear App
        </button>
        <p>
          <span>Budget: </span> {formatearCantidad(budget)}
        </p>
        <p className={`${disponible < 0 ? "negativo" : ""}`}>
          <span>Available: </span> {formatearCantidad(disponible)}
        </p>
        <p>
          <span>Spent: </span> {formatearCantidad(gastado)}
        </p>
      </div>
    </div>
  );
};
export default ControlPresupuesto;
