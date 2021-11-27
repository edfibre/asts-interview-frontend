const AddButton = ({ value, onClick }) => {
  return (
    <div>
      <button onClick={() => onClick(value)}>Add +{value}</button>
    </div>
  );
};

export default AddButton;
