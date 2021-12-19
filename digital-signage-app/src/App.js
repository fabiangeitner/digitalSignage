import { Routes, Route } from "react-router-dom";
import { TestComponent } from "./components/TestComponent";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Routes>
        <Route path="test" element={<TestComponent />} />
      </Routes>
    </div>
  );
}

export default App;
