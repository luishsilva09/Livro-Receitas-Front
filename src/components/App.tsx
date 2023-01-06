import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/recipes" element={<></>} />
        <Route path="/newRecipe" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
