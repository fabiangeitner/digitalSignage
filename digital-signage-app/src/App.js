import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Slideshow } from "./components/Slideshow/Slider";
import { TestComponent } from "./components/TestComponent";
import { WelcomePage } from "./components/WelcomePage/WelcomePage";
import { OverviewPage } from "./components/OverviewPage/OverviewPage";
import { DetailPage } from "./components/DetailPage/DetailPage";
import { CustomerReview } from "./components/ReviewPage/CustomerReview";
import { InfoCheckout } from "./components/Infopages/InfoCheckout";
import { InfoFavorit } from "./components/Infopages/InfoFavorit";
import { InfoProfile } from "./components/Infopages/InfoProfile";

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
        <Route
          path="infoCheckout"
          element={
            <InfoCheckout text="Bitte führen Sie den Checkout Prozess auf ihrem Smarphone aus!" />
          }
        />
        <Route
          path="infoFavorit"
          element={
            <InfoFavorit text="Bitte loggen Sie sich auf ihrem Smarphone ein, um Favoriten in Ihrem Konto zu speichern" />
          }
        />
        <Route
          path="infoProfile"
          element={
            <InfoProfile text="Bitte loggen Sie sich auf ihrem Smarphone ein, um Ihr Profil zu betrachten!" />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
