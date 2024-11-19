import { useState } from "react";
import "../styles/App.scss";

function App() {
  const inputs = [
    { ingredient: "macarrones", checked: false },
    { ingredient: "patatas", checked: false },
    { ingredient: "nueces", checked: false },
    { ingredient: "huevos", checked: false },
    { ingredient: "cebolla", checked: false },
    { ingredient: "cerveza", checked: false },
  ];

  const [clicked, setClicked] = useState("");

  const handleChecked = (event) => {
    console.log("click", event.target.checked);
    // if(event.target.checked) {
    //   "Eres una persona concebollista"
    // } else {
    //   "Eres un robot sin paladar".
    // }
  };

  const renderInputs = () => {
    const ingredients = inputs.map((ingredient, i) => {
      return (
        <label key={i}>
          <input
            onClick={handleChecked}
            id={i}
            type="checkbox"
            name="tortilla"
          />
          {ingredient.ingredient}
        </label>
      );
    });
    return ingredients;
  };

  return (
    <>
      <header className="header" id="header">
        <h1 className="header__title">
          Selecciona los ingredientes de la tortilla de patatas
        </h1>
      </header>
      <form action="" className="form">
        {renderInputs()}
      </form>
    </>
  );
}

export default App;
