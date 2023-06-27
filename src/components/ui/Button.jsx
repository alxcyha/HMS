import { func, node, number, string } from "prop-types";
import "./styles/button.css";

export default function Button({ children, color, width = 100, onClick }) {
  return (
    <button
      className="buttons"
      style={{ backgroundColor: color, width: width, marginLeft: 10 }}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: node,
  color: string,
  width: number,
  onClick: func
};
