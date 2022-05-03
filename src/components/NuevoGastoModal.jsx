import IconoCerrar from "../img/cerrar.svg";
const NuevoGastoModal = ({
  setNewExpenseModal,
  animateModal,
  setAnimateModal,
}) => {
  const ocultarModal = () => {
    setAnimateModal(false);
    setTimeout(() => {
      setNewExpenseModal(false);
    }, 500);
  };
  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={IconoCerrar} alt="IconoCerrar" onClick={ocultarModal} />
      </div>

      <form className={`formulario ${animateModal ? "animar" : ""}`}>
        <legend>New Expense</legend>
      </form>
    </div>
  );
};

export default NuevoGastoModal;
