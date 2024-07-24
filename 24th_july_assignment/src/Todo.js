import { useState, useEffect } from "react";

import axios from "axios";

function Todo(){
    let todosinitialvalue = [{name: "Default name", status: "default status"}];
    let [todos, settodos] = useState(todosinitialvalue);
    let [todoentered, settodoentered] = useState("Default Todo");
    let [statusentered, setstatusentered] = useState("Default Status");


    useEffect(function(){
        console.log("function called on load");
            gettodos();
    }, []);

    function changetodoentered(e){
        console.log(e);
        console.log(e.target);
        console.log(e.target.value);
        settodoentered(e.target.value);      
    }

    function gettodos(){
        axios
            .get("/todos")
            .then(function(response){
                console.log(response.data);
                settodos(response.data);
            })
            .catch(function(error){
                console.log(error);
            });
    }

    function addtodo(){
        let newtodoOb ={name : todoentered, status: statusentered};
        console.log(newtodoOb);
        axios
            .post("/todos", newtodoOb)
            .then(function(response){
                console.log(response);
                if(response.data.status == 1){
                    gettodos();
                }
            })
            .catch(function(err){
                console.log(err);
            });
    }

    function deletetodo(indextodelete){
        // let newtodos = todos.filter(function (val, index){
        //     if(indextodelete == index) return false;
        //     return true;
        // });
        // settodos(newtodos);

        axios
            .delete(`/todos/${indextodelete}`)
            .then(function(response){
                console.log(response);
                gettodos();
            })
            .catch(function(error){
                console.log(error);
            });
    }

    return (
        <div>
            <input type="text" name="todoitem" value={todoentered} onChange={changetodoentered}/>
            <select onChange={function(e){
                setstatusentered(e.target.value);
            }}>

                <option value="completed"> completed </option>
                <option value="incomplete"> not completed </option>
            </select>
            <button onClick={addtodo}> add todo</button>
            {
                todos.map(function(val, index){
                    return (
                        <div>

                            <div className="value">
                                {val.name}
                            </div>

                            <button onClick={function(){ deletetodo(index); }}>
                                delete
                            </button>

                            <div>status :{val.status}</div>
                            <br/>

                        </div>
                    );
                })}
        </div>
    );
}

export default Todo;