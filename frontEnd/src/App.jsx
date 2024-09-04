import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h2>!</h2>}>
          <Route index element={<h2>!</h2>} />
        </Route>
      </Routes>
    </>
  );
}
