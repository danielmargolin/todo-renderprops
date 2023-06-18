export const onDeleteClick = (items, setItems, id) => {
  const newItem = items.filter((item) => item.id !== id);
  setItems(newItem);
};
