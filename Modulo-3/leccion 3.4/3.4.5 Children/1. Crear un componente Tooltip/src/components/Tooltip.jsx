import "../styles/layout/Tooltip.scss";

function Tooltip(prop) {
  return (
    <>
      <div className="tooltip">
        <p className="tooltip__question">?</p>
        <div className="tooltip__content">{prop.children}</div>
      </div>
    </>
  );
}
export default Tooltip;
