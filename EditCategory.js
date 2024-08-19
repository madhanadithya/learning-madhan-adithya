// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';
// import './EditCategory.css';

// const EditCategory = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');

//   useEffect(() => {
//     axios
//       .get(`http://localhost:3000/api/v1/categories/${id}`)
//       .then(response => {
//         setName(response.data.category.name);
//         setDescription(response.data.category.description);
//       })
//       .catch(error => console.error('Error fetching category:', error));
//   }, [id]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.put(`http://localhost:3000/api/v1/categories/${id}`, { name, description })
//       .then(() => {
//         navigate('/Category'); 
//       })
//       .catch(error => console.error('Error updating category:', error));
//   };

//   return (
//     <div className="edit-category-container">
//       <h2>Edit Category</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)}  />
//         </label><br/><br/>
//         <label>
//           Description:   
//           <textarea value={description} rows={4} cols={36} onChange={(e) => setDescription(e.target.value)} />
//         </label><br/>
//         <button type="submit">Update</button><br/>
//         <button type="button" onClick={() => navigate('/Category')}>Cancel</button>
//       </form>
//     </div>
//   );
// };

// export default EditCategory;






import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './EditCategory.css';

const EditCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState({ name: '', description: '' });
  const [loading, setLoading] = useState(true); // Added to handle loading state

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/categories/${id}`)
      .then(response => {
        const category = response.data.category;
        setInitialValues({ name: category.name, description: category.description });
        setLoading(false); // Set loading to false after fetching data
      })
      .catch(error => {
        console.error('Error fetching category:', error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, [id]);

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    description: Yup.string().required('Description is required')
  });

  const handleSubmit = (values) => {
    axios.put(`http://localhost:3000/api/v1/categories/${id}`, values)
      .then(() => {
        // alert('Category Edited Successfully!! :)');
        navigate('/Category'); 
      })
      .catch(error => console.error('Error updating category:', error));
  };

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="edit-category-container">
      <h2>Edit Category</h2>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div>
              <label htmlFor="name">Name:</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" className="error-message" />
            </div>
            <br />
            <div>
              <label htmlFor="description">Description:</label>
              <Field as="textarea" id="description" name="description" rows={4} cols={36} />
              <ErrorMessage name="description" component="div" className="error-message" />
            </div>
            <br />
            <button type="submit">Update</button>
            <br />
            <button type="button" onClick={() => navigate('/Category')}>Cancel</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditCategory;
