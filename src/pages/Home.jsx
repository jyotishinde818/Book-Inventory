// import { useEffect, useState } from "react";
// import { getBooks, deleteBook } from "../services/api";
// import { useNavigate } from "react-router-dom";

// function Home() {
//   const [books, setBooks] = useState([]);
//   const navigate = useNavigate();

//   const loadBooks = async () => {
//     const res = await getBooks();
//     setBooks(res.data);
//   };

//   useEffect(() => {
//     loadBooks();
//   }, []);

//   return (
//     <div className="container mt-4">
//       <h2>Book Inventory</h2>
//       <button className="btn btn-primary mb-3" onClick={() => navigate("/add")}>
//         Add Book
//       </button>

//       <div style={{ overflowX: "auto" }}>
//         <table className="table table-bordered">
//           <thead>
//             <tr>
//               <th>Title</th>
//               <th>Author</th>
//               <th>Publisher</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {books.map((b) => (
//               <tr key={b.id}>
//                 <td>{b.title}</td>
//                 <td>{b.author}</td>
//                 <td>{b.publisher}</td>
//                 <td>
//                   <button className="btn btn-info btn-sm" onClick={() => navigate(`/view/${b.id}`)}>View</button>
//                   <button className="btn btn-warning btn-sm mx-2" onClick={() => navigate(`/edit/${b.id}`)}>Edit</button>
//                   <button className="btn btn-danger btn-sm" onClick={() => deleteBook(b.id).then(loadBooks)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Home;


import { useEffect, useState } from "react";
import { getBooks, deleteBook } from "../services/api";
import { useNavigate } from "react-router-dom";

function Home() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const loadBooks = async () => {
    const res = await getBooks();
    setBooks(res.data);
  };

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Book Inventory</h2>

      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Publisher</th>
              <th>Price</th>
              {/* <th>Age</th>
              <th>Email</th> */}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map(book => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.publisher}</td>
                <td>₹{book.price}</td>
                {/* <td>{book.age}</td>
                <td>{book.email}</td> */}
                <td>
                  <button className="btn btn-info btn-sm me-1" onClick={() => navigate(`/view/${book.id}`)}>View</button>
                  <button className="btn btn-warning btn-sm me-1" onClick={() => navigate(`/edit/${book.id}`)}>Edit</button>
                  <button className="btn btn-danger btn-sm" onClick={() => deleteBook(book.id).then(loadBooks)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
