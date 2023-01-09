import GlobalStyle from "./globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signin } from "./signin/Signin";
import { Signup } from "./signup/Signup";
import { Home } from "./home/Home";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/newRecipe" element={<></>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
