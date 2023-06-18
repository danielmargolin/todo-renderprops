const TodoItem = ({ text, isCompleted, onDeleteClick, onToggle }) => {
  return (
    <li className="todo-item">
      <input type="checkbox" checked={isCompleted} onChange={onToggle} />
      <span>{text}</span>
      <div className="delete-todo" onClick={onDeleteClick}>
        Delete
      </div>
    </li>
  );
};

export default TodoItem;
