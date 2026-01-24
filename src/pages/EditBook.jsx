import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { getBookById, updateBook } from "../services/api";
import { useEffect } from "react";

function EditBook() {
  const { id } = useParams();
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
      price: Yup.number().required("Required").positive("Must be positive")
    }),
    onSubmit: async (values) => {
      await updateBook(id, values);
      navigate("/");
    }
  });

  useEffect(() => {
    getBookById(id).then(res => formik.setValues(res.data));
  }, [id]);

  return (
    <div className="container mt-4">
      <h2>Edit Book</h2>
      <form onSubmit={formik.handleSubmit}>
        <input className="form-control mb-2" placeholder="Title" {...formik.getFieldProps("title")} />
        {formik.touched.title && formik.errors.title ? <div className="text-danger">{formik.errors.title}</div> : null}

        <input className="form-control mb-2" placeholder="Author" {...formik.getFieldProps("author")} />
        {formik.touched.author && formik.errors.author ? <div className="text-danger">{formik.errors.author}</div> : null}

        <input className="form-control mb-2" placeholder="Publisher" {...formik.getFieldProps("publisher")} />

        <input className="form-control mb-2" type="number" placeholder="Price" {...formik.getFieldProps("price")} />
        {formik.touched.price && formik.errors.price ? <div className="text-danger">{formik.errors.price}</div> : null}

        <button className="btn btn-warning" type="submit">Update Book</button>
      </form>
    </div>
  );
}

export default EditBook;
