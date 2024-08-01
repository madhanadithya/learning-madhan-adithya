
// import './App.css';


// import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import Products from './Products';
// import Fake from './Fake';
// import ProductDetailsComponent from './ProductDetailsComponent';

// function App() {
//   // return (
//   //   <div className="App">
//   //     <header>
//   //       <Menu/>
//   //     </header>

//   //     <main>
//   //       <Hobbies/>
//   //       <Add/>
//   //       <Trigonometry/>
//   //       <ObjectList/>
//   //     </main>

//   //     <footer>
//   //       <Footer/>
//   //     </footer> 
//   //   </div>
//   // );

//     // return(
//     //   <div className="App">
//     //     <header>
//     //       <Menu/>
//     //     </header>

//         // <h1>Main Page</h1>
//         // <BrowserRouter>
//         //   <Link to="/Todo">Todo</Link>
//         //   <Link to="/Login">Login</Link>
//         //   <br/>

//         //   <Routes>
//         //     <Route path="/Todo" element={<Todo/>}/>
//         //     <Route path="/Login" element={<Login/>}/>
//         //   </Routes>
//         // </BrowserRouter>

//     const LOGIN_URL="https://ascendion.com/login";
//     let login_attempts=5;
//     let menuData=[
//       {title:"Home",path:"/"},
//       {title:"Todos",path:"/Todo"},
//       {title:"Login",path:"/login/:title/:tokenId"}
//     ];
//     function greet(){
//       alert("Let's Login! You have a great day!");
//     }
//     return(
//       <div className="App">
//         {/* <header>
//           <Menu/>
//         </header>*/}

//         {/* <h1>Main Page</h1>
//         <BrowserRouter>
//           <Menu menuData={menuData}/>

//           <Routes>
//             <Route path="/todo" element={<Todo/>}/>
//             <Route path="/logn/:title/:tokenId"
//               element={<Login L_URL={LOGIN_URL}
//                 login_attempts={login_attempts}
//                 greet={greet}/>
//               }
//         />

//           </Routes>
//         </BrowserRouter>   */}

        
//         <h1>Fake Store API</h1><br/>
//         <BrowserRouter>
//           {/* <Menu menuData={menuData}/> */}
//           <div className="Routes">
//           <Link to="/Home"> Home </Link>   &nbsp;  
//           <Link to="/All_Categories"> All Products </Link>  &nbsp;<br/><br/>  </div> 
//           {/* <Link to="All_ categories/CategoryOne"> Category One </Link>  &nbsp;
//           <Link to="All/CategoryTwo"> Category Two </Link>  &nbsp;
//           <Link to="All/CategoryThree"> Category Three </Link>  &nbsp;
//           <Link to="All/CategoryFour"> Category Four </Link>  &nbsp; */}

//           <Routes>
            
//             {/* <Route path='/All_Categories' element={<Login log_url={LOGIN_URL} login_att={login_attempts} errors={error_msgs} greeting={greet}/>}/> */}
//             {/* <Route path='/All_Categories' element={<Products/>}/>
//             <Route path='/All_categories/CategoryOne' element={<Container/>}/>
//             <Route path='/All/CategoryTwo' element={<Counter/>}/> */}
//             {/* <Route path='/All/CategoryThree' element={<Todo/>}/>
//             <Route path='/All/CategoryFour' element={<TodoDetails/>}/> */}
//             <Route path="/:category" element={<Fake />} />
//             <Route path="/:category" element={<Products />} />
//             <Route path='/:category/:id' element={<ProductDetailsComponent/>}></Route>
//           </Routes>
//       </BrowserRouter>
//      <br/>



//         {/* <Menu menuData={menuData}/> */}
        
//         {/* <header>
//           <Menu/>
//         </header>

//         <br/><br/>

//         <MyProfile/>
//         <GenderAPI/>
//         <Products/>
//         <Github/>

//         <footer>
//           <Footer/>
//        </footer>  */}
//       </div>
//     );
// }

// export default App;





// import './App.css';

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import CategoryPage from './Category';
// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/admin/category" element={<CategoryPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const Card = (props) => {
    return (
        <div className="card">
            <img alt="avatar" src={props.avatar_url} />
            <div>
                <div className="name">{props.name}</div>
                <div>{props.blog}</div>
            </div>
        </div>
    );
};

const CardList = (props) => (
    <div>
        {props.cards.map((card, index) => (
            <Card key={index} {...card} />
        ))}
    </div>
);

const Form = (props) => {
    const [username, setUsername] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .get(`https://api.github.com/users/${username}`)
            .then((resp) => {
                props.onSubmit(resp.data);
                setUsername('');
            });
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder="GitHub username"
                required
            />
            <button type="submit">Add card</button>
        </form>
    );
};

const App = () => {
    const [cards, setCards] = useState([]);

    const addNewCard = (cardInfo) => {
        setCards(cards.concat(cardInfo));
    };

    return (
        <div>
            <Form onSubmit={addNewCard} />
            <CardList cards={cards} />
        </div>
    );
};

export default App;
