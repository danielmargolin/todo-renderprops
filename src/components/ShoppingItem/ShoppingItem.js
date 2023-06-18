const ShoppingItem = ({ isBought, text, onToggle, onDeleteClick }) => {
  return (
    <li className="todo-item">
      <input type="checkbox" checked={isBought} onChange={onToggle} />
      <span>{text}</span>
      <div className="delete-todo" onClick={onDeleteClick}>
        Remove
      </div>
    </li>
  );
};

export default ShoppingItem;
