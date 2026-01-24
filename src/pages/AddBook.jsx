import { useFormik } from "formik";
import * as Yup from "yup";
import { addBook } from "../services/api";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      publisher: "",
      price: ""
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      author: Yup.string().required("Required"),
      price: Yup.number().required("Required")
    }),
    onSubmit: async (values) => {
      await addBook(values);
      navigate("/");
    }
  });

  return (
    <div className="container mt-4">
      <h2>Add Book</h2>
      <form onSubmit={formik.handleSubmit}>
        <input className="form-control mb-2" placeholder="Title" {...formik.getFieldProps("title")} />
        <input className="form-control mb-2" placeholder="Author" {...formik.getFieldProps("author")} />
        <input className="form-control mb-2" placeholder="Publisher" {...formik.getFieldProps("publisher")} />
        <input className="form-control mb-2" type="number" placeholder="Price" {...formik.getFieldProps("price")} />
        <button className="btn btn-success">Submit</button>
      </form>
    </div>
  );
}

export default AddBook;
