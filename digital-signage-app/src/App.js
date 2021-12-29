import { Routes, Route } from "react-router-dom";
import "./App.css";
import { WelcomePage } from "./components/WelcomePage";
import { Slideshow } from "./components/Slideshow/Slider";
import { TestComponent } from "./components/TestComponent";
import { OverviewPage } from "./components/OverviewPage";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Slider slides={SliderData} />} /> */}
        <Route path="test" element={<TestComponent />} />
        <Route path="/" element={<Slideshow />} />
        <Route path="overview" element={<OverviewPage />} />
      </Routes>
    </div>
  );
}

export default App;
