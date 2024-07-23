import { useState } from "react";

function Add(){

    let [val1, setval1] = useState(0);    
    let [val2, setval2] = useState(0);
    let [sum, setstatetotal] = useState(0);

    function value1(e){
        setval1(e.target.value);      
    }
    function value2(e){
        setval2(e.target.value);      
    }

    function addition(){
        setstatetotal(Number(val1) + Number(val2));

    }

    return(
        <div>
            <input type="text" id="val1" onChange={value1} placeholder="enter the first number"/>
            <input type="text" id="val2" onChange={value2} placeholder="enter the second number"/>
            <button onClick={addition}> ADD </button>
            <div>
                <h2>sum of above numbers is : {sum}</h2>
            </div>
        </div>
    );
}

export default Add;

