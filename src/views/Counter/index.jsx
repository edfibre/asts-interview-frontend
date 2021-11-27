import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addToCounter, resetCounter } from "../../actions/counterActions";
import Addbutton from "../../components/AddButton";
import "./counter.scss";

const Counter = () => {
  const dispatch = useDispatch();
  const currentValue = useSelector((state) => state.counter.value);

  const onAdd = (value) => {
    dispatch(addToCounter(value));
  };

  const reset = () => {
    dispatch(resetCounter());
  };

  return (
    <div className="container">
      Current Value: {currentValue}
      <div className="button-container">
        <Addbutton value={5} onClick={onAdd} />
        <Addbutton value={10} onClick={onAdd} />
        <Addbutton value={15} onClick={onAdd} />
        <Addbutton value={20} onClick={onAdd} />
      </div>
      <button onClick={reset}>Reset Counter</button>
    </div>
  );
};

export default Counter;
