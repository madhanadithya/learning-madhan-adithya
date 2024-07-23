import { useState } from "react";


function Hobby(){
    let hobbyinitialvalue = ["walking", "running", "sleeping", "swimming"];
    let [hobby, sethobby] = useState(hobbyinitialvalue);
    let [hobbyentered, sethobbyentered] = useState("Default hobby");

    function changehobbyentered(e){
        console.log(e);
        console.log(e.target);
        console.log(e.target.value);
        sethobbyentered(e.target.value);      
    }


    function addhobby(){
        let newhobbyarr = [...hobby, hobbyentered];
        sethobby(newhobbyarr);
    }

    function deletehobby(indextodelete){
        let newhobby = hobby.filter(function (val, index){
            if(indextodelete == index) return false;
            return true;
        });
        sethobby(newhobby);
    }

    function clearhobby(){
        hobby = [];
        sethobby(hobby);
    }

    
    return (
        <div>
            <input type="text" name="hobby" value={hobbyentered} onChange={changehobbyentered}/>
            <button onClick={addhobby}> add hobby</button>            
            <button onClick={clearhobby}> clear all </button>
            {
                hobby.map(function(val, index){
                    return (
                        <div>
                            {val}
                            <button id="delete"
                                onClick={function(){
                                    deletehobby(index);
                                }}
                            >
                                delete
                            </button>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Hobby;