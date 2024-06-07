import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SigninPage from "./Pages/SigninPage";
import WebLayout from "./Layout/WebLayout";
import AuthorPgae from "./Pages/AuthorPgae";
import { quotes } from "./assets/Data/Quotes";
import { useEffect } from "react";
import { saveAll } from "./Services/api";


function App() {

  useEffect(() => {
    try {
      saveAll(quotes).then(() => {}); 
    }
    catch (err) {
      console.log(err);
    }
  }, [quotes])
  
  return (
    <>
      <Routes>
        <Route path="/" element={<WebLayout />} >
          <Route path="/" element={<HomePage />} />
          <Route path="/author" element={<AuthorPgae />} />
        </Route>
        <Route path="/signin" element={<SigninPage />} />
      </Routes>
    </>
  );
}

export default App;
