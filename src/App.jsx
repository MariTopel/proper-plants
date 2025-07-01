import { useState } from "react"; //react hook to manage state
import PLANTS from "./data"; //imports the plant array of data
import PlantList from "./components/PlantList";
import Cart from "./components/Cart";

export default function App() {
  const [cart, setCart] = useState([]); //tracks cart contents

  //adds plant object to cart.
  function addToCart(plant) {
    //React has a setCart premade function to update the state
    //prevCart is the most recent value of the cart state and it is automatically passed to the setCart function by React
    // “Hey React, when it’s time to update the cart, take the current version of the cart (you can call it prevCart), and use it to return a new version.”
    setCart((prevCart) => {
      //checks if plant is already in the cart
      //.find() loops through the prevCart and looks for a cart item where the id matches the incoming plant.id
      //if it finds one, existingItem will be that object
      //if not, existingItem will be undefined
      const existingItem = prevCart.find((item) => item.id === plant.id);

      //if the plant is already in the cart then .map is used to return a new array
      //{ ...item} creates a copy of the object and increates its quantity by 1
      //for other plants return as is
      //this returns new array and does not change origional array
      if (existingItem) {
        // if the plant is already in the cart then .map is used to return a new array
        // { ...item} creates a copy of the object and increases its quantity by 1
        // this returns a new array and does not change original array
        return prevCart.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // if NOT in the cart yet:
        // adds the plant to the cart with a quantity of 1
        return [...prevCart, { ...plant, quantity: 1 }];
      }
    });
  }

  // these are the incrementItem and decrementItem functions that are used in the cart.jsx file
  function incrementItem(id) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decrementItem(id) {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  //when React renders the App component, show the JSX inside these parenthese
  //this is like a wrapper for the whole app layout
  //renders PlantList.
  //plants={PLANTS} passes the array of plant objects
  //addToCard={addToCart} passes your function for handling "Add to Cart"
  return (
    <div className="app">
      <h1>Proper Plants 🌿</h1>
      <PlantList plants={PLANTS} addToCart={addToCart} />
      <Cart
        cart={cart}
        incrementItem={incrementItem}
        decrementItem={decrementItem}
      />
    </div>
  );
}
