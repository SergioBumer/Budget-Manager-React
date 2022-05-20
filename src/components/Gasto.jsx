const Gasto = ({gasto}) => {
const {nombre, cantidad, categoria, id} = gasto;
    console.log("Hola");
  return (
    <div className="gasto sombra">
        <div className="contenido-gasto">
            <div className="descripcion-gasto">
                <p className="categoria">
                    {categoria}
                </p>
                <p className="nombre-gasto">{nombre}</p>
            </div>
        </div>
    </div>
  );
};

export default Gasto;
