import { useState, useEffect } from "react";
import axios from "axios";

const Positions = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/positions")
      .then((res) => setPositions(res.data))
      .catch((e) => console.log(e));
  });

  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((product, idx) => {
              const currValue = product.price * product.qty;
              const isProfit = currValue - product.avg * product.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = product.isLoss ? "loss" : "profit";
              return (
                <tr key={idx}>
                  <td>{product.product}</td>
                  <td>{product.name}</td>
                  <td>{product.qty}</td>
                  <td>{product.avg.toFixed(2)}</td>
                  <td>{product.price.toFixed(2)}</td>
                  <td className={profClass}>
                    {(currValue - product.avg * product.qty).toFixed(2)}
                  </td>
                  <td className={dayClass}>{product.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
