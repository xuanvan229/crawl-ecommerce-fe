import "./App.css";
import { ProductList } from "./screens/ProductList";
import { Provider } from "./utils/Provider";

function App() {
  return (
    <Provider>
      <ProductList />
    </Provider>
  );
}

export default App;
