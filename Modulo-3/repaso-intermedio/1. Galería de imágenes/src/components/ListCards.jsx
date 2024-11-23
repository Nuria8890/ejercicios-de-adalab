import "../styles/layout/ListCards.scss";
import Card from "./Card";
import PropTypes from "prop-types";

function ListCards({ listToPaint }) {
  const cardToPaint = listToPaint.map((flower) => {
    return <Card flowerToPaint={flower} key={flower.id} />;
  });

  return <ul className="flower-list">{cardToPaint}</ul>;
}

export default ListCards;

ListCards.propTypes = {
  listToPaint: PropTypes.array.isRequired,
};
