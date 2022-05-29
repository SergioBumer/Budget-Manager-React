import { useState, useEffect } from "react";

const Filtros = ({filtro, setFiltro}) => {
  return (
    <div className="filtros sombra contenedor">
      <form
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      >
        <div className="campo">
          <label>Filtrar gastos</label>
          <select>
            <option value="all">-- Select one --</option>
            <option value="savings">Savings</option>
            <option value="food">Food</option>
            <option value="home">Home Expenses</option>
            <option value="other">Other Expenses</option>
            <option value="entertainment">Entertainment</option>
            <option value="health">Health</option>
            <option value="subs">Subscriptions</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filtros;
