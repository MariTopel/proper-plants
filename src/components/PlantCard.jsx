export default function PlantCard({ plant, addToCart }) {
  return (
    <div className="plant-card">
      <p className="plant-image">{plant.image}</p>
      <h3>{plant.name}</h3>
      <button onClick={() => addToCart(plant)}>Add to Cart</button>
    </div>
  );
}
