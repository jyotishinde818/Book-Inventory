import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBookById } from "../services/api";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    getBookById(id).then(res => setBook(res.data));
  }, [id]);

  return (
    <div className="container mt-4">
      <h3>{book.title}</h3>
      <p><b>Author:</b> {book.author}</p>
      <p><b>Publisher:</b> {book.publisher}</p>
      <p><b>Price:</b> ₹{book.price}</p>
    </div>
  );
}

export default BookDetails;
