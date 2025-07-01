// This is a display component for one plant in the cart.
// Props:
// - item: { id, name, image, quantity }
// - incrementItem: function to increase quantity
// - decrementItem: function to decrease quantity

export default function CartItem({ item, incrementItem, decrementItem }) {
  return (
    <div className="cart-item">
      <span>{item.image}</span> <span>{item.name}</span>{" "}
      <span>Qty: {item.quantity}</span>{" "}
      <button onClick={() => decrementItem(item.id)}>-</button>
      <button onClick={() => incrementItem(item.id)}>+</button>
    </div>
  );
}
