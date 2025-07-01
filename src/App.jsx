import { useState } from "react"; //react hook to manage state
import PLANTS from "./data"; //imports the plant array of data

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
        return prevCart.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        //if NOT in the cart yet AKA if no match then
        //new array is created using ...prevCart and add new object. the plant object plus the quanity of 1
        //tldr adds the plant to the cart with a quanitity of 1
        // ...prevCart is used when you want to copy all the items from the prevCart array into a new array
        // ... is a spread operator. take all the parts of this thing/array/object and spread them out into the place i am writing
        // so if prevCart = [1, 2, 3] then newCart = [...prevCart, 4] would make [1, 2, 3, 4]
      } else {
        return [...prevCart, { ...plant, quantity: 1 }];
      }
    });
  }

  return <></>;
}
