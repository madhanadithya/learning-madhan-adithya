// function Login(){
//     let msg = "Login component";
//     function doLogin(){
//         alert("loginned successfully....!.!")
//     }
//     return (
//         <div className="Login">
//             <h1>{msg}</h1>
//             <input type="text" name="username" />
//             <input type="password" name="password" />
//             <button onClick={doLogin}> Login now...!</button>

//         </div>
//     );
// }

// export default Login;



import { useParams } from "react-router-dom";

function Login(){
    let params = useParams();
    console.log(params);

    function doLogin(){
        alert("loginned successfully....!.!")
    }
    return (
        <div className="Login">
            <h1>{params.title}</h1>
            <h2>{params.tokenId}</h2>
            <input type="text" name="username" />
            <input type="password" name="password" />
            <button onClick={doLogin}> Login now...!</button>

        </div>
    );
}

export default Login;