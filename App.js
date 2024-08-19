// import React from 'react';
// // import './App.css';
// import ShowProducts from './ShowProducts';
// import ProductDetails from './ProductDetails';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Addproducts from './AddProducts';
// import UserDetails from './UserDetails';
// import EditUsers from './EditUser';
// import ShowUsers from './ShowUsers';
// import AddUsers from './AddUsers';
// import RoleForm from './RoleForm';
// import Navbar from './Navbar'; 
// import CategoryList from './CategoryList';
// import CreateCategory from './CreateCategory';
// import EditCategory from './EditCategory';

// import LazyHome from './LazyHome';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Routes>

//           <Route path="/products/:id" element={<ProductDetails />} />
//           <Route path="/addProduct" element={<Addproducts />} />
//           <Route path='/ShowProducts' element={<ShowProducts />}/>


//           <Route path="/AddUsers" element={<AddUsers />} />
//           <Route path="/ShowUsers" element={<ShowUsers />} />

//           <Route path="/users/:userId" element={<UserDetails />} /> 
//           <Route path="/role" element={<RoleForm />} />

//           <Route path="Category" element={<CategoryList />}>
//                 <Route path="create" element={<CreateCategory />} />
//                 <Route path="edit/:id" element={<EditCategory />} />
//           </Route>

//           <Route path="/lazy" element={<LazyHome />} />

//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import ShowProducts from './ShowProducts';
import ProductDetails from './ProductDetails';
import AddUsers from './AddUsers';
import ShowUsers from './ShowUsers';
import UserDetails from './UserDetails';
import EditUsers from './EditUser';
import RoleForm from './RoleForm';
import CategoryList from './CategoryList';
import EditCategory from './EditCategory';
import LazyHome from './LazyHome';
// import './App.css';

const Admin = lazy(() => import('./Admin'));

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path='/ShowProducts' element={<ShowProducts />} />
            <Route path="/AddUsers" element={<AddUsers />} />
            <Route path="/ShowUsers" element={<ShowUsers />} />
            <Route path="/users/:userId" element={<UserDetails />} />
            <Route path="/role" element={<RoleForm />} />
            <Route path="Category" element={<CategoryList />}>
              <Route path="edit/:id" element={<EditCategory />} />
            </Route>
            <Route path="/lazy" element={<LazyHome />} />
            <Route path="/admin/*" element={<Admin />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
