import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ControlPresupuesto = ({ budget, gastos }) => {
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

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <CircularProgressbar value={porcentaje} styles={buildStyles({
        pathColor: '#3b82f6',
        trailColor: '#F5F5F5',
        textColor: '#3b82f6',
      })}
      text={`${porcentaje}% Gastado`}
      />
      <div className="contenido-presupuesto">
        <p>
          <span>Budget: </span> {formatearCantidad(budget)}
        </p>
        <p>
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
