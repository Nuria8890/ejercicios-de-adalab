import "../styles/layout/Card.scss";
import PropTypes from "prop-types";

function Card({ flowerToPaint }) {
  console.log(flowerToPaint);
  return (
    <li className="flower-card">
      <h4>{flowerToPaint.nombre}</h4>
      <p>{flowerToPaint.descripcion}</p>
      <img src={flowerToPaint.foto} alt={flowerToPaint.nombre} />
      <p>
        Más información{" "}
        <a href={flowerToPaint.URL} target="_blank">
          aquí
        </a>
      </p>
    </li>
  );
}

export default Card;
Card.propTypes = {
  flowerToPaint: PropTypes.object.isRequired,
};
