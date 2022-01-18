import { Routes, Route, Router } from "react-router-dom";
import "./App.css";
import { Slideshow } from "./components/Slideshow/Slider";
import { Start } from "../src/components/Start";
import { WelcomePage } from "./components/WelcomePage/WelcomePage";
import { OverviewPage } from "./components/OverviewPage/OverviewPage";
import { DetailPage } from "./components/DetailPage/DetailPage";
import { CustomerReview } from "./components/ReviewPage/CustomerReview";
import { Cart } from "./components/Cart/Cart";
import { InfoCheckout } from "./components/Infopages/InfoCheckout";
import { InfoFavorit } from "./components/Infopages/InfoFavorit";
import { InfoProfile } from "./components/Infopages/InfoProfile";
import { BookSearch } from "./components/Search/BookSearch";
import { BookSearchResult } from "./components/Search/BookSearchResult";
import { Handy } from "./components/Connection/Handy";
import { Signage } from "./components/Connection/Signage";
import { SearchMobile } from "./components/Smartphone/SearchMobile";
import { LoginPage } from "./components/LoginPage/LoginPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Start />} />

        <Route path="handy" element={<Handy />} />
        <Route path="signage" element={<Signage />} />

        {/* Smartphone */}
        {/* LOGIN - SEITEN */}
        <Route path="searchMobile" element={<SearchMobile />} />

        {/* Digital Signage */}
        <Route path="slideshow" element={<Slideshow />} />
        <Route path="welcome" element={<WelcomePage />} />
        <Route path="overview" element={<OverviewPage />} />
        <Route path="detail" element={<DetailPage />} />
        <Route path="review" element={<CustomerReview />} />
        <Route path="cart" element={<Cart />} />
        <Route path="search" element={<BookSearch />} />
        <Route path="search_result" element={<BookSearchResult />} />
        <Route path="login" element={<LoginPage />} />
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
