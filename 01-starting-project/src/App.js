import React, { useContext } from "react";
import Header from "./component/Layout/Header";
import Meals from "./component/Meals/Meals";
import Cart from "./component/Cart/Cart";
import CartContext from "./context/Cart-context";
function App() {
  const ctx = useContext(CartContext);
  return (
    <React.Fragment>
      {ctx.showModal && <Cart onClick={ctx.modalHandler} />}
      <Header title="ReactMeals" onClick={ctx.modalHandler} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
