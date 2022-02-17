import React from "react";
// mendeklarasikan reactdom agar bisa di buka di url tertentu
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import ProductList from "./components/ProductList";
// mendeklarasikan addproduct
import AddProduct from "./components/AddProduct";
// mendeklarasikan editproduk
import EditProduct from "./components/EditProduct";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <Switch>
            <Route exact path="/">
            {/* merender produklist */}
              <ProductList />
            </Route>
            <Route path="/add">
              {/* merender addproduk */}
              <AddProduct />
            </Route>
            <Route path="/edit/:id">
              {/* merender addproduk */}
              <EditProduct />
            </Route>
            </Switch>
          </div>
        </div>        
        </div>
    </Router>
  );
}

export default App;

