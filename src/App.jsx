import { Provider } from "react-redux";
import "./App.scss";
import store from "./store";
import Counter from "./views/Counter";

function App() {
  return (
    <Provider store={store}>
      <div className="main-container">
        <h1 className="title">JS Boilerplate</h1>
        <div className="App">
          <Counter />
        </div>
      </div>
    </Provider>
  );
}

export default App;
