import GlobalStyle from "./globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signin } from "./signin/Signin";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/recipes" element={<></>} />
          <Route path="/newRecipe" element={<></>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
