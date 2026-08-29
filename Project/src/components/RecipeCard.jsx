import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {

  return (
    <div className="card h-100 shadow border-0 rounded-4 overflow-hidden p-3">

      {/* Recipe ki image */}
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="card-img-top"
      />

      {/* Recipe ka naam */}
      <h2 className="card-title px-3 pt-3">{recipe.strMeal}</h2>


      {/* 
        Match percentage calculateMatch() se aa raha hai*/}
      <p className="badge text-bg-success ms-3 mb-3">
        🎯 {recipe.matchPercentage}% Match
      </p>
      {/* Recipe mein jo ingredients user ke paas nahi hain */}
        {recipe.missingIngredients.length > 0 && (
        <div className="alert alert-danger mx-3">

            <p className="fw-bold mb-2">❌ Missing:</p>

            <ul className="mb-0">
            {recipe.missingIngredients.slice(0, 5).map(    //slice se maximum 5 missing ingredients dikaaheya
                (ingredient, index) => (
                <li key={index}>
                    {ingredient}
                </li>
                )
            )}
            </ul>

        </div>
        )}

      {/* Link user ko recipe details page par le jayega*/}
      <Link to={`/recipe/${recipe.idMeal}`} className="d-block mx-3 mt-auto">
        <button className="btn btn-warning w-100">
          View Recipe
        </button>
      </Link>

    </div>
  );
}

export default RecipeCard;
