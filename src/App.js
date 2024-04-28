import { Fragment, useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
import { cartBtnActions } from "./components/reduxreducer";

function App() {
 
  const selectBtnModalstatus = useSelector(state => state.cartButton.cartBtnModal)
 
  useEffect(() => {
    console.log(selectBtnModalstatus)
  }, [selectBtnModalstatus])

  return (
    <Fragment>
      <Layout>
      { selectBtnModalstatus && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
