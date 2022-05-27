import { useState, useEffect } from "react";

const ControlPresupuesto = ({ budget, gastos }) => {
  const [disponible, setDisponible] = useState(budget);
  const [gastado, setGastado] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => gasto.cantidad + total,
      0
    );
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
      <p>Gráfica aquí</p>
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
