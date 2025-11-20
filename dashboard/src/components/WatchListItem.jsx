import { useState } from "react";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import WatchListActions from "./WatchListActions";

function WatchListItem({ stock }) {
  const [itemHover, setItemHover] = useState(false);
  const handleMouseEnter = (evt) => {
    setItemHover(true);
  };

  const handleMouseLeave = (evt) => {};

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="item-info">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {itemHover && <WatchListActions id={stock.name} />}
    </li>
  );
}

export default WatchListItem;
