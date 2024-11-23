import PropTypes from "prop-types";
import Serie from "./Serie";

function ListSeries({ onSeriesFound }) {
  console.log("seriesFound", onSeriesFound);
  const serieFound = onSeriesFound.map((serieData) => {
    return <Serie serieFound={serieData} key={serieData.id} />;
  });

  return <ul>{serieFound}</ul>;
}

export default ListSeries;

ListSeries.propTypes = {
  onSeriesFound: PropTypes.array.isRequired,
};
