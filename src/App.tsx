import { useState } from "react";
import "./App.css";
import { ProductList } from "./screens/ProductList";
import { Provider } from "./utils/Provider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider>
      <ProductList />
    </Provider>
  );
}

export default App;
