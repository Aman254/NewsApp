import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import NewsGrid from "./components/NewsGrid";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <NewsGrid />
      <Footer />
    </div>
  );
};

export default App;
