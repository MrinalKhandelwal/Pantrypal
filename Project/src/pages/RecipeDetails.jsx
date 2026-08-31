import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipeDetails() {

  // URL se recipe ki ID nikalne ke liye
  // Example: /recipe/52772 → id = "52772"
  const { id } = useParams();

  // recipe mein API se aane wali complete recipe store hogi
  // Starting mein koi recipe nahi hai, isliye null
  const [recipe, setRecipe] = useState(null);

  // Jab tak API se data nahi aata, loading true rahega
  const [loading, setLoading] = useState(true);


  // useEffect component render hone ke baad API call karne ke liye use hota hai
  useEffect(() => {

    // API se recipe details fetch karne wala function
    const fetchRecipe = async () => {

      try {

        // Recipe ki ID ko API URL mein bhej rahe hain
        // Example:
        // https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );

        // API response ko JavaScript object mein convert kar rahe hain
        const data = await response.json();

        // data.meals ek array hota hai
        // [0] se us array ki first recipe le rahe hain
        setRecipe(data.meals[0]);

      } catch (error) {

        // Agar API request fail ho jaaye toh console mein error dikhega
        console.log("Error fetching recipe:", error);
      }

      // API request complete hone ke baad loading band kar do
      setLoading(false);
    };

    // Function ko actually call kar rahe hain
    fetchRecipe();

  // [id] ka matlab:
  // Jab recipe ki ID change hogi tab useEffect dobara chalega
  }, [id]);


  // Jab API request chal rahi ho tab loading message show hoga
  if (loading) {
    return <p>🔍 Loading recipe...</p>;
  }


  // Agar recipe nahi mili toh error message show hoga
  if (!recipe) {
    return <p>😕 Recipe not found.</p>;
  }


  // TheMealDB ingredients ko alag-alag numbered properties mein store karta hai:
  //
  // strIngredient1
  // strIngredient2
  // strIngredient3
  // ...
  // strIngredient20
  //
  // Isliye hum ek empty array bana rahe hain
  // jisme ingredients ko clean format mein store karenge
  const ingredients = [];


  // 1 se 20 tak saare ingredient fields check karenge
  for (let i = 1; i <= 20; i++) {

    // Dynamic property name bana rahe hain
    //
    // i = 1 → recipe["strIngredient1"]
    // i = 2 → recipe["strIngredient2"]
    // i = 3 → recipe["strIngredient3"]
    //
    // Isse hume manually 20 lines likhne ki zarurat nahi padegi
    const ingredient = recipe[`strIngredient${i}`];


    // Measurement bhi same pattern mein stored hai:
    //
    // strMeasure1
    // strMeasure2
    // strMeasure3
    // ...
    const measure = recipe[`strMeasure${i}`];


    // Kuch recipes mein saare 20 ingredient fields filled nahi hote
    // Isliye sirf wahi ingredient add karenge jo actually exist karta hai
    if (ingredient && ingredient.trim() !== "") {

      // Ingredient aur uski quantity ko ek object ke form mein array mein add kar rahe hain
      //
      // Example:
      // {
      //   ingredient: "Chicken",
      //   measure: "500g"
      // }
      ingredients.push({
        ingredient: ingredient.trim(),
        measure: measure ? measure.trim() : "",
      });
    }
  }


  return (
    <div className="recipe-details">

      {/* Recipe ka naam API se aa raha hai */}
      <h1 className="text-secondary">{recipe.strMeal}</h1>


      {/* Recipe ki image API ke URL se aa rahi hai */}
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
      />


      {/* Ingredients section */}
      <h2 style={{color:"black"}}>🥕 Ingredients</h2>


      {/* 
        ingredients array ke har item ke liye
        ek <li> create kar rahe hain
      */}
      <ul>
        {ingredients.map((item, index) => (

          // index ko key ke roop mein use kar rahe hain
          // taaki React har list item ko identify kar sake
          <li key={index}>

            {/* 
              Example:
              item.measure = "500g"
              item.ingredient = "Chicken"

              Output:
              500g Chicken
            */}
            {item.measure} {item.ingredient}

          </li>
        ))}
      </ul>


      {/* Recipe instructions */}
      <h2 style={{color:"black"}}>📖 Instructions</h2>

      {/* API se complete cooking instructions */}
      <p>{recipe.strInstructions}</p>

    </div>
  );
}

export default RecipeDetails;
