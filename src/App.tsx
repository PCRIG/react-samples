import { Route, Routes } from "react-router-dom";
import Header from "./pages/component/header";
import UnknownPage from "./pages/unknownPage";
import FoodHubMenu from "./pages/foodHub/menu/foodHubMenu";
import FoodHubCart from "./pages/foodHub/cart/foodHubCart";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Header/>}>
        <Route index element={<FoodHubMenu/>}/>
        <Route path="menu" element={<FoodHubMenu/>}/>
        <Route path="cart" element={<FoodHubCart/>}/>
        <Route path='*' element={<UnknownPage/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App;
