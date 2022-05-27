import IconoCerrar from "../img/cerrar.svg";
import { useState, useEffect } from "react";
import Mensaje from "./Mensaje";
const NuevoGastoModal = ({
  setNewExpenseModal,
  animateModal,
  setAnimateModal,
  guardarGasto,
  gastoEditar,
  setGastoEditar,
}) => {
  const [mensaje, setMensaje] = useState("");
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(1);
  const [categoria, setCategoria] = useState("");
  const [fecha, setFecha] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setNombre(gastoEditar.nombre);
      setCantidad(gastoEditar.cantidad);
      setCategoria(gastoEditar.categoria);
      setFecha(gastoEditar.fecha);
      setId(gastoEditar.id);
    }
  }, []);

  const ocultarModal = () => {
    setAnimateModal(false);
    setGastoEditar({});
    setTimeout(() => {
      setNewExpenseModal(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, cantidad, categoria].includes("")) {
      setMensaje("El valor no es valido");
      setTimeout(() => {
        setMensaje("");
      }, 1500);
      return;
    }

    guardarGasto({ nombre, cantidad, categoria, id, fecha });
    setNombre("");
    setCantidad(1);
    setCategoria("");
    setId("");
    ocultarModal();
  };
  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={IconoCerrar} alt="IconoCerrar" onClick={ocultarModal} />
      </div>

      <form
        onSubmit={handleSubmit}
        className={`formulario ${animateModal ? "animar" : ""}`}
      >
        <legend>
          {Object.keys(gastoEditar).length > 0 ? "Edit" : "New"} Expense
        </legend>

        {mensaje && <Mensaje mensaje={mensaje} tipo={"error"} />}

        <div className="campo">
          <label htmlFor="nombre">Expense Name</label>
          <input
            id="nombre"
            type="text"
            placeholder="Type the Expense Name"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor="cantidad">Quantity</label>
          <input
            id="cantidad"
            type="text"
            placeholder="Type the Quantity"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </div>

        <div className="campo">
          <label htmlFor="categoria">Category</label>
          <select
            name=""
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">-- Select one --</option>
            <option value="savings">Savings</option>
            <option value="food">Food</option>
            <option value="home">Home Expenses</option>
            <option value="other">Other Expenses</option>
            <option value="entertainment">Entertainment</option>
            <option value="health">Health</option>
            <option value="subs">Subscriptions</option>
          </select>
        </div>
        <input
          type="submit"
          value={
            Object.keys(gastoEditar).length > 0 ? "Edit Expense" : "New Expense"
          }
        />
      </form>
    </div>
  );
};

export default NuevoGastoModal;
