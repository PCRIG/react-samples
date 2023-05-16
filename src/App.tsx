import { Route, Routes } from "react-router-dom";
import Header from "./pages/component/header";
import UnknownPage from "./pages/unknownPage";
import FoodHub from "./pages/foodHub/foodHub";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Header/>}>
        <Route index element={<FoodHub/>}/>
        <Route index path="foodHub" element={<FoodHub/>}/>
        <Route path='*' element={<UnknownPage/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App;
