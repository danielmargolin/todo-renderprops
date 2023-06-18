

const List = ({ items, onChange, Component }) => {
  const onDeleteClick = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    onChange(newItems);
  };

  return (
    <ul>
      {items.map((item) => (
        <Component
          {...item}
          onDeleteClick={() => onDeleteClick(item.id)}
        //   onToggle={() => onToggleProduct(item.id)}
        />
      ))}
    </ul>
  );
};

export default List;
