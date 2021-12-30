import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Slideshow } from "./components/Slideshow/Slider";
import { TestComponent } from "./components/TestComponent";
import { WelcomePage } from "./components/WelcomePage/WelcomePage";
import { OverviewPage } from "./components/OverviewPage/OverviewPage";
import { DetailPage } from "./components/DetailPage/DetailPage";
import { CustomerReview } from "./components/ReviewPage/CustomerReview";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Slider slides={SliderData} />} /> */}
        <Route path="welcome" element={<WelcomePage />} />
        <Route path="test" element={<TestComponent />} />
        <Route path="/" element={<Slideshow />} />
        <Route path="overview" element={<OverviewPage />} />
        <Route path="detail" element={<DetailPage />} />
        <Route path="review" element={<CustomerReview />} />
      </Routes>
    </div>
  );
}

export default App;
