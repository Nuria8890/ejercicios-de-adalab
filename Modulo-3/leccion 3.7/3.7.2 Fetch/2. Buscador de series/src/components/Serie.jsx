import PropTypes from "prop-types";
function Serie({ serieFound }) {
  return (
    <li>
      <h3>{serieFound.name}</h3>
      <p>{serieFound.genres[0]}</p>
      <img src={serieFound.image.medium} alt={serieFound.name} />
      <p>{serieFound.url}</p>
      <p>{serieFound.sumary}</p>
    </li>
  );
}

export default Serie;
Serie.propTypes = {
  serieFound: PropTypes.object.isRequired,
};
