import { useState } from "react";
function Counter(){


    console.log(useState(1));
    let [statecount, setstatecount] = useState(2);

    function increase(){
        setstatecount(statecount + 1);
    }
    function decrease(){
        setstatecount(statecount - 1);
    }

    function reset(){
        setstatecount(statecount = 0);
    }

    return(
        <div>
            <h1> {statecount} </h1>
            <button onClick={increase} > Increase</button>
            <button onClick={decrease} > decrease</button>
            <button onClick={reset} > reset</button>

        </div>
    );
}

export default Counter;