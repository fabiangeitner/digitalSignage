import { Routes, Route } from "react-router-dom";
import "./App.css";
import { WelcomePage } from "./components/WelcomePage";
import { Slideshow } from "./components/Slideshow/Slider";
import { TestComponent } from "./components/TestComponent";
import {WelcomePage} from "./components/WelcomePage/WelcomePage"

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Slider slides={SliderData} />} /> */}
        <Route path="welcome" element={<WelcomePage />} />
        <Route path="test" element={<TestComponent />} />
        <Route path="/" element={<Slideshow />} />
        <Route path="welcome" element={<WelcomePage />} />
      </Routes>
    </div>
  );
}

export default App;
