import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeDetails from "./pages/RecipeDetails";
import Home from "./pages/Home";


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>

      <Route path="/recipe/:id" element={<RecipeDetails />}
      />
    </Routes>
  </BrowserRouter>
  );
}

export default App;