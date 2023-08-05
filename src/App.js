import './App.css';
import NavBar from "./component/NavBar"
import Home from './component/Home';
import Detailpost from './component/Detailpost';
import { Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
function App() {
  let id = useSelector((store) => {
    if (store.SelectpostObj) {
      console.log(store.SelectpostObj.id)
      return store.SelectpostObj.id
    }
  })
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path={`/item/:${id}`} element={<Detailpost />} />
      </Routes>


    </div>
  );
}

export default App;
