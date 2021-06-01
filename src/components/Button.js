export default function Button({ type, action }) {
  return (
    <button
      className={`btn btn-${type === "secondary" ? "secondary" : "primary"}`}
    >
      {action}
    </button>
  );
}
