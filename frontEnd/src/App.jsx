import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h2>!</h2>}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}
