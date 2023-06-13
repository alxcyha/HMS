import { node } from "prop-types";

export default function Card({ children }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        width: "90%",
        marginTop: 5,
        padding: 5,
        border: '1px solid #000',
      }}
    >
      {children}
    </div>
  );
}

Card.propTypes = {
  children: node,
};
