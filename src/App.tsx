import React from 'react';
import Header from "./components/AppBar/AppBar";
import Footer from "./components/Footer/Footer";
import './App.scss';
import Constraints from "./components/Constraints/Constraints";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Recipes from "./components/Recipes/Recipes";
import Ingredients from "./components/Ingredients/Ingredients";
import {DishDetails} from "./components/DishDetails/DishDetails";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header></Header>
            <div className='content'>
                <Routes>
                    <Route path="/" element={<Recipes />} />
                    <Route path="/recipes" element={<Recipes />} />
                    <Route path="/ingredients" element={<Ingredients />} />
                    <Route path="/constraints" element={<Constraints />} />
                    <Route path="/recipes/spaghetti" element={<DishDetails />} />
                </Routes>
            </div>
        <Footer></Footer>
        </BrowserRouter>
    </div>
  );
}

export default App;
