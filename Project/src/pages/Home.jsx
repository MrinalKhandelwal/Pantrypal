import { useState } from 'react'
import RecipeCard from '../components/RecipeCard';
export default function Home() {
  const [ingredient, setIngredient] = useState(""); //ingredient input lene krne ke liye
  const [ingredients, setIngredients] = useState([]); //ingredient input store krne ke liye
  const [recipes, setRecipes] = useState([]); //stores the recipe fetched from the api
  const [loading, setLoading] = useState(false); //batayega agar api request run kar rhi h toh
  const [error, setError] = useState(""); //agar wrong ingredient enter ho toh error message show krne ke liye
  const addIngredient = () => {
    if (ingredient.trim() === "") { //agar khaali input h toh accept na kare
      return;
    }
    setIngredients([...ingredients, ingredient.trim()]); //trim se faaltu spaces hat jaati h
    setIngredient("");
  };
  const removeIngredient = (index) => {
    setIngredients(
      ingredients.filter((_, i) => i !== index) // _,i matlab item ka koi use nhi hai isliye blank h aur index i me h jisse compare kar rhe h
    );
  };
  // Recipe ke ingredients ko user ke ingredients ke saath compare karega
  const calculateMatch = (recipe) => {
    // User ke ingredients ko lowercase mein convert kar rahe hain
    // taaki "Chicken" aur "chicken" ko same maana jaaye
    const userIngredients = ingredients.map((item) =>
      item.toLowerCase().trim()
    );
    // Recipe ke saare ingredients nikalne ke liye empty array
    const recipeIngredients = [];
    // TheMealDB maximum 20 ingredients provide karta hai
    for (let i = 1; i <= 20; i++) {
      // Dynamic property name:
      // i = 1 → strIngredient1
      // i = 2 → strIngredient2
      // etc.
      const ingredient = recipe[`strIngredient${i}`];
      // Empty ingredient ko ignore karenge
      if (ingredient && ingredient.trim() !== "") {
        recipeIngredients.push(
          ingredient.toLowerCase().trim()
        );
      }
    }
    // User ke kitne ingredients recipe mein available hain
    const matchedIngredients = userIngredients.filter(
      (userIngredient) =>
        recipeIngredients.some(
          (recipeIngredient) =>
            recipeIngredient.includes(userIngredient) ||
            userIngredient.includes(recipeIngredient)
        )
    );
    // Recipe mein jo ingredients hain,
    // lekin user ke paas nahi hain, unko missing ingredients bolenge
    const missingIngredients = recipeIngredients.filter(
      (recipeIngredient) =>
        !userIngredients.some(
          (userIngredient) =>
            recipeIngredient.includes(userIngredient) ||
            userIngredient.includes(recipeIngredient)
        )
    );
    // Match percentage calculate kar rahe hain
    const matchPercentage =
      Math.round(
        (matchedIngredients.length / userIngredients.length) * 100
      );
    // Recipe ke saath matching information return kar rahe hain
    return {
      ...recipe,
      matchPercentage,
      matchedIngredients,
      missingIngredients,
    };
  };
  const findRecipes = async () => {
    // Agar koi ingredient add nahi kiya hai
    // toh API call nahi karni
    if (ingredients.length === 0) {
      return;
    }
    // Purana error message hata denge
    setError("");
    // Purane recipes hata denge
    setRecipes([]);
    // Loading message show karo
    setLoading(true);
    try {
      const requests = ingredients.map((item) => {
        // User ke input ko clean karke API ko bhej rahe hain
        const cleanIngredient = item.trim().toLowerCase();
        return fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(cleanIngredient)}`
        );
      });
      // Saari API requests complete hone ka wait
      const responses = await Promise.all(requests);
      // Saare responses ko JSON mein convert karo
      const data = await Promise.all(
        responses.map((response) => response.json())
      );
      // Temporary logs to check what TheMealDB is returning
      console.log("Ingredients entered:", ingredients);
      console.log("API responses:", data);
      //saari recipes array me store krne ke liye
      const allRecipes = data.flatMap(
        (item) => item.meals || []
      );
      // Agar API se koi recipe nahi mili
      // iska matlab user ne wrong ingredient enter kiya hai
      if (allRecipes.length === 0) {
        // Error message show karenge
        setError(
          `❌ No recipes found for "${ingredients.join(", ")}". Please enter a valid ingredient.`
        );
        // Loading khatam
        setLoading(false);
        // Aage ka code run nahi karenge
        return;
      }
      //duplicate recipes remove krne ke liye
      const uniqueRecipes = Array.from(
        new Map(
          allRecipes.map((recipe) => [
            recipe.idMeal,
            recipe
          ])
        ).values()
      );
      //Maximum 10 recipes fetch krne ke liye
      const recipesToFetch = uniqueRecipes.slice(0, 10);
      // Full recipe details ko store karne ke liye empty array
      const fullRecipes = [];
      // Recipes ko ek-ek karke fetch karenge
      for (const recipe of recipesToFetch) {
        try {
          // Current recipe ki full details ke liye API request
          const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipe.idMeal}`
          );
          // Response ko JSON mein convert karo
          const data = await response.json();
          // Agar recipe mili hai toh usko fullRecipes mein add karo
          if (data.meals && data.meals.length > 0) {
            fullRecipes.push(data.meals[0]);
          }
        } catch (error) {
          // Agar ek recipe ki request fail ho jaaye
          // toh baaki recipes ko fetch karna continue rahe
          console.log(
            "Error fetching recipe:",
            recipe.idMeal,
            error
          );
        }
      }
      //Har recipe ka match percentage calculate krne ke liye
      const recipesWithMatch = fullRecipes.map((recipe) =>
        calculateMatch(recipe)
      );
      //Highest match ko upar rakhne ke liye
      recipesWithMatch.sort(
        (a, b) => b.matchPercentage - a.matchPercentage
      );
      // Final recipes React state mein save karo
      setRecipes(recipesWithMatch);
    } catch (error) {
      // Agar API request fail ho jaaye
      console.log("Error fetching recipes:", error);
      // User ko error message dikhayenge
      setError(
        "⚠️ Something went wrong while finding recipes. Please try again."
      );
    }
    // Loading khatam
    setLoading(false);
  };
  return (
    <div
      className="container-fluid py-5"
      style={{
        backgroundColor: "#1e1e1e",
        minHeight: "100vh",
        width: "100%"
      }}
    >
      <h1 className="display-4 fw-bold text-warning text-center fst-italic font-monospace">
        🍳 PantryPal
      </h1>
      <p className="lead fw-bold text-white font-monospace fst-italic text-center mb-4">
        Tell us what you have, We'll tell you what to cook.
      </p>
      <div
        className="input-group mb-4 mx-auto"
        style={{ maxWidth: "650px" }}
      >
        <input
          type="text"
          className="form-control fst-italic"
          placeholder="Enter an ingredient..."
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") { //enter press krne pe add ho jaaye 'add' pe click na krna pde
              addIngredient();
            }
          }}
        />
        <button
          className="btn btn-secondary"
          onClick={addIngredient}
        >
          + Add
        </button>
      </div>
      <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
        {ingredients.map((item, index) => (
          <div
            className="badge text-bg-light border p-2 fs-5"
            key={index}
          >
            {/*har item ko key de deta hai identification ke liye*/}
            <span className="text-success p-3 font-monospace rounded">
              🍴 {item}
            </span>
            <button
              className="btn btn-sm text-danger ms-2 p-0"
              onClick={() => removeIngredient(index)}
            >
              {/*bina () ke apne aap call ho jaata*/}
              X
            </button>
          </div>
        ))}
      </div>
      {loading && (
        <p className="text-center text-secondary my-4">
          🔍 Finding recipes...
        </p>
      )}
      {/*Error message - agar user ne wrong ingredient enter kiya ho toh show hoga*/}
      {error && (
        <div
          className="alert alert-danger text-center mx-auto mb-4"
          style={{ maxWidth: "650px" }}
        >
          {error}
        </div>
      )}
      {/*Conditional rendering - jab minimum ek item ho tabhi find recipe ka button dikaaye*/}
      {ingredients.length > 0 && (
        <button
          className="btn btn-success btn-lg px-4 d-block mx-auto mb-4 mt-4"
          onClick={findRecipes}
        >
          🔍 Find Recipes
        </button>
      )}
      <div className="row g-4">
        {recipes.map((recipe) => ( //Recipecard me se recipe ka prop receive krta h
          <div
            className="col-12 col-md-6 col-lg-4"
            key={recipe.idMeal}
          >
            <RecipeCard
              recipe={recipe} //prop jo hum component ko pass kr rhe h
            />
          </div>
        ))}
      </div>
    </div>
  )
}
