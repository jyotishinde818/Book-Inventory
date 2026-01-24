import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
import BookDetails from "./pages/BookDetails";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/edit/:id" element={<EditBook />} />
        <Route path="/view/:id" element={<BookDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
