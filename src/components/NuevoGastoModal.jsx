import IconoCerrar from '../img/cerrar.svg'
const NuevoGastoModal = ({setNewExpenseModal}) => {
    const ocultarModal = () => {
        setNewExpenseModal(false);
    };
  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img src={IconoCerrar} alt="IconoCerrar" onClick={ocultarModal}/>
        </div>
    </div>
  )
}

export default NuevoGastoModal