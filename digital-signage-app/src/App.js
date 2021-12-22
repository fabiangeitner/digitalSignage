import { Routes, Route } from "react-router-dom";
import { Slideshow } from "./components/Slideshow/Slider";
import { TestComponent } from "./components/TestComponent";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Slider slides={SliderData} />} /> */}
        <Route path="test" element={<TestComponent />} />
        <Route path="/" element={<Slideshow />} />
      </Routes>
    </div>
  );
}

export default App;
