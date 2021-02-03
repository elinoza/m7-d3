
import Home from  "./components/Home"

import NavBar from  "./components/NavBar"

import Favourites from  "./components/Favourites"
//import './styles/index';
import { Route, Link } from "react-router-dom";

function App() {
  return (
    <>
    <NavBar/>
    <Route path="/" exact component={Home} />
    <Route path="/favourites" exact component={Favourites} />
    </>
  );
}

export default App;
