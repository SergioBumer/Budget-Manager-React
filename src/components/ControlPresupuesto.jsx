const ControlPresupuesto = ({ budget}) => {

const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
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
                <span>Available: </span> {formatearCantidad(0)}
            </p>
            <p>
                <span>Spent: </span> {formatearCantidad(0)}
            </p>
        </div>
    </div>
  )}
export default ControlPresupuesto