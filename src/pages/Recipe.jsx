import {
  useParams,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import { getMealById } from "../api";
import { useEffect, useState } from "react";
import { Preloader } from "../components/Preloader";

const Recipe = (props) => {
  const { id } = useParams();
  const [recepie, setRecepie] = useState({});
  const { goBack } = useHistory();

  useEffect(() => {
    getMealById(id).then((data) => {
      setRecepie(data.meals[0]);
    });
  }, [id]);

  return (
    <>
      {!recepie.idMeal ? (
        <Preloader />
      ) : (
        <div className="recepie">
          <img src={recepie.strMealThumb} alt={recepie.strMeal} />
          <h1>{recepie.strMeal}</h1>
          <h6>Category: {recepie.strCategory}</h6>
          {recepie.strArea ? <h6>Area: {recepie.strArea}</h6> : null}
          <p>{recepie.strInstructions}</p>

          <table className="centered">
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(recepie).map((key) => {
                if (key.includes("Ingredient") && recepie[key]) {
                  return (
                    <tr key={key}>
                      <td>{recepie[key]}</td>
                      <td>{recepie[`strMeasure${key.slice(13)}`]}</td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>

          {recepie.strYoutube ? (
            <div className="row">
              <h5 className="video-title">Video Recipe</h5>
              <iframe
                title={id}
                src={`https://www.youtube.com/embed/${recepie.strYoutube.slice(
                  -11
                )}`}
              />
            </div>
          ) : null}
        </div>
      )}
      <button className="btn" onClick={goBack}>
        Back
      </button>
    </>
  );
};

export { Recipe };
