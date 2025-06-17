export default function CardForm() {
  return (
    <div className="p-4">
      <h2>Enter Card</h2>
      <input placeholder="Card Number" className="border p-2" />
      <input placeholder="Expiration" className="border p-2" />
      <input placeholder="CVV" className="border p-2" />
    </div>
  );
}
