import GlobalStyle from "./globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signin } from "./signin/Signin";
import { Signup } from "./signup/Signup";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/recipes" element={<></>} />
          <Route path="/newRecipe" element={<></>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
