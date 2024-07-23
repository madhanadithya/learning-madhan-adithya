// import Login from "./Login";
// import Counter  from './Counter';
// import Todo from './Todo';
import Hobby from "./Hobby";
import Add from "./Add";
import Calculator from "./Calculator";
import Student from "./Student";

function Container(){
    return (
        <div className="Container">
            <h3> HOBBIES LIBRARY.....</h3>
            {/* <Todo/>
            <Login/>
            <Counter/> */}
            <Hobby/>
            <br></br>
            <h3>ADDITION OF 2 NUMBRS.....</h3>
            <h3> Enter two numbers</h3>
            <Add/>

            <h3>TRIGNOMETRY CALCULATOR.....</h3>
            <Calculator/>
            
            <h3>STUDENT LIST.....</h3>
            <Student/>
        </div>
    );
}

export default Container;