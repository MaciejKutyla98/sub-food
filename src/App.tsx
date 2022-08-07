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

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Recipes />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/ingredients" element={<Ingredients />} />
                <Route path="/constraints" element={<Constraints />} />
            </Routes>
        <Footer></Footer>
        </BrowserRouter>
    </div>
  );
}

export default App;
