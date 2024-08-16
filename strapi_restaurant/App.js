// // import './App.css';
// // import { BrowserRouter, Route, Routes } from 'react-router-dom';
// // import { useState } from 'react';

// // import Menu from './Menu';
// // import Cities from './Cities';
// // import CityDetails from './CityDetails';
// // import CityNews from './CityNews';
// // import RefHookExample from './RefHookExample';
// // import ClassBasedCounter from './ClassBasedCounter';

// // import MUIspacing from './GUI_Assignment/MUIspacing';
// // import AutoGrid from './GUI_Assignment/AutoGrid';
// // import BasicGrid from './GUI_Assignment/BasicGrid';
// // import ComplexFluidGrid from './GUI_Assignment/ComplexFluidGrid';
// // import FeaturedPost from './GUI_Assignment/FeaturedPost';
// // import MainFeaturedPost from './GUI_Assignment/MainFeaturedPost';
// // import NestedGridGroup from './GUI_Assignment/NestedGridGroup';


// // import ReduxCounter from './ReduxCounter/ReduxCounter';
// // import TodoReducer from './reducers/TodoReducer';
// // import ReduxTodo from './ReduxTodo';
// // import EditTodo from "./EditTodo";


// // import NewLogin from './NewLogin';
// // import UserMenu from './UserMenu';


// // function App() {
// //     const LOGIN_URL = "https://ascendion.com/login";

// //     let [show, setShow] = useState(true);

// //     const loginAttempts = 5;
// //     const menuData = [
// //         { title: "Home", path: "/" },
// //         { title: "Todos", path: "/Todo" },
// //         { title: "Login", path: "/login" },
// //         { title: "ExampleUseEffect", path: "/ue" },
// //         { title: "Cities", path: "/cities" },
// //         { title: "RefHookExample", path: "/refhook" },
// //         { title: "ClassBasedExample", path: "/classBasedExample" },
// //         { title: "ReduxCounter", path: "/ReduxCounter"},
// //         { title: "TodoReducer", path: "/TodoReducer"},
// //         { title: "ReduxTodo", path: "/ReduxTodo"}
// //     ];
// //     const errorMsgs = {
// //         LOGIN_FAILED: "Sorry! Unable to login",
// //         LOGIN_500: "Server error"
// //     };

// //     function greet() {
// //         alert("Let's Login! You have a great day!");
// //     }

// //     // const [isLoggedIn, setIsLoggedIn] = useState(false);

// //     // const handleLoginStatusChange = (status) => {
// //     //   setIsLoggedIn(status);
// //     // };
  

// //     return (
// //         <div className='App'>


// //             show var = {show} <br/>
// //             <select onChange={(e) => {e.target.value == "show" ? setShow(true) : setShow(false);}}>
// //               <option value= "show">Show</option>
// //               <option value= "hide">Hide</option>
// //             </select>

// //             <h1>Main Page</h1>
// //             <BrowserRouter>
// //               {show ? <Menu menuData={menuData}/> : ""}
// //                 {/* <Menu menuData={menuData} /> */}
// //                 <Routes>
// //                     <Route path="/cities" element={<Cities />}>
// //                         <Route path=":name" element={<CityDetails />}>
// //                             <Route path="news" element={<CityNews newsText="This is news text" />} />
// //                         </Route>
// //                     </Route>
// //                     <Route path="/refhook" element={<RefHookExample />} />
// //                     <Route path="/classBasedExample" element={<ClassBasedCounter />} />
// //                     <Route path='/ReduxCounter' element={<ReduxCounter/>}/>
// //                     <Route path='/TodoReducer' element={<TodoReducer/>}/>
// //                     <Route path='/ReduxTodo' element={<ReduxTodo/>}/>

// //                     <Route path="/" element={<ReduxTodo />} />
// //                     <Route path="/edit/:index" element={<EditTodo />} />
// //                 </Routes>


// //                 {/* <MUIspacing />
// //                 <AutoGrid />
// //                 <BasicGrid />
// //                 <ComplexFluidGrid />
// //                 <FeaturedPost />
// //                 <MainFeaturedPost />
// //                 <NestedGridGroup /> */}
// // {/* 
// //               <UserMenu />
// //               <NewLogin onLogin={handleLoginStatusChange} />

// //               {isLoggedIn && <UserMenu />} */}
// //             </BrowserRouter>
// //         </div>
// //     );
// // }

// // export default App;







// // // import React, { useState } from 'react';
// // // import NewLogin from './NewLogin';
// // // import UserMenu from './UserMenu';
// // // //import './App.css'; 

// // // const App = () => {
// // //   const [isLoggedIn, setIsLoggedIn] = useState(false);

// // //   const handleLoginStatusChange = (status) => {
// // //     setIsLoggedIn(status);
// // //   };

// // //   return (
// // //     <div className="container">
// // //       {isLoggedIn && <UserMenu />}
// // //       <NewLogin onLoginStatusChange={handleLoginStatusChange} />
// // //     </div>
// // //   );
// // // };

// // // export default App;




// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Provider } from "react-redux";
// import ReduxTodo from "./ReduxTodo";
// import EditTodo from "./EditTodo";
// import store from "./store/store";
// import UseMemoHookExample from "./UseMemoHookExample";
// import CustomHookUser from "./CustomHookUser";
// import Profile from "./Profile";
// import JwtDecode from "./jwtDecode";
// import TokenDecoder from "./TokenDecoder";
// import './App.css';

// const App = () => (
//     <Provider store={store}>
//         <Router>
//             <Routes>
//                 <Route path="/" element={<ReduxTodo />} />
//                 <Route path="/edit/:index" element={<EditTodo />} />
//                 <Route path="/usememohook" element={<UseMemoHookExample />} />
//                 <Route path="/customhook" element={<CustomHookUser />} />
//                 <Route path="/profile" element={<Profile />} />
//                 <Route path="/jwtDecode" element={<JwtDecode />} />
//                 <Route path="/tokendecoder" element={<TokenDecoder />} />
                
//             </Routes>
//         </Router>
//     </Provider>
// );

// export default App;




import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './Auth';
import Admin from './Admin';
import RestaurantDetails from './RestaurantDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/restaurants/:id" element={<RestaurantDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
