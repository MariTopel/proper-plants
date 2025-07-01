import CartItem from "./CartItem";

export default function Cart({ cart, incrementItem, decrementItem }) {
  return (
    <div className="cart">
      <h2>🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            incrementItem={incrementItem}
            decrementItem={decrementItem}
          />
        ))
      )}
    </div>
  );
}
