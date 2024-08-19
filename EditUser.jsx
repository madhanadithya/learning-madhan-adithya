// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Navigate, useParams, useNavigate } from "react-router-dom";
// import logo from "./logo.svg"

// function EditUsers() {
//     const { userId } = useParams();
//     let [data, setData] = useState([{ email: "@email.com", displayname: "displayname", username: "Username", password: "A12", status: true }]);
//     let [displayname, setdisplayName] = useState("");
//     let [email, setemail] = useState("");
//     let [username, setusername] = useState("");
//     let [password, setpassword] = useState("");
//     let [status, setstatus] = useState(true);
//     let [imageUrl,setImageurl] = useState(logo);

//     const navigate = useNavigate();


//     useEffect(function () {
//         axios
//             .get(`http://localhost:3000/api/v1/users/${userId}`)
//             .then(function (response) {
//                 console.log(response);
//                 setData(response.data.user);
//             })
//     }, [])

//     function displaynameChanged(e) {
//         e.preventDefault();
//         setdisplayName(e.target.value);
//     }
//     function emailChanged(e) {
//         e.preventDefault();
//         setemail(e.target.value);
//     }
//     function usernameChanged(e) {
//         e.preventDefault();
//         setusername(e.target.value);
//     }
//     function passwordChanged(e) {
//         e.preventDefault();
//         setpassword(e.target.value);
//     }

//     function statusChanged(e) {
//         e.preventDefault();
//         setstatus(e.target.value);
//     }

//     function urlChanged(e) {
//         e.preventDefault();
//         setImageurl(e.target.value);
//     }

//     function EditUser() {
//         let newdata = { avatar : imageUrl, email: email, displayName: displayname, username: username, password: "", status: status };
//         axios
//             .put(`http://localhost:3000/api/v1/users/${userId}`, newdata)
//             .then(function (response) {
//                 console.log(response)
//                 setData(newdata);
//             })
//             .catch(function (err) {
//                 console.log(err)
//             })
//             alert("Details Updated");
//             navigate(`/`);
//     }

//     return (
//         <div className="addproducts">
//             <h3>Update User Details</h3>
//             <img src={imageUrl} alt="User Icon" height="200px" width="200px"/>
//             <input type="text" value={displayname} onChange={displaynameChanged} placeholder="Update displayName"></input>
//             <input type="email" value={email} onChange={emailChanged} placeholder="Update email"></input>
//             <input type="text" value={username} onChange={usernameChanged} placeholder="Update Description"></input>
//             <input type="password" value={password} onChange={passwordChanged} placeholder="Update password"></input><br/>
//             <input type="text" value={imageUrl} onChange={urlChanged} placeholder="add image url"></input><br/>
//             <select onChange={statusChanged} defaultValue={status}>
//                 <option value="true">Active</option>
//                 <option value="false">InActive</option>
//             </select>
//             <button id="updateBtn" onClick={EditUser}>Update Details</button>
//         </div>
//     )
// }

// export default EditUsers;




import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import logo from "./logo.svg"; // Default image if none is provided

function EditUsers() {
    const { userId } = useParams();
    const [user, setUser] = useState({
        email: "",
        displayName: "",
        username: "",
        password: "",
        status: true,
        avatar: logo
    });
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/users/${userId}`)
            .then(response => {
                setUser(response.data.user);
            })
            .catch(err => {
                console.error("Error fetching user data:", err);
            });
    }, [userId]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleUpdate = () => {
        axios.put(`http://localhost:3000/api/v1/users/${userId}`, user)
            .then(response => {
                console.log("User updated:", response);
                alert("Details Updated");
                navigate('/'); // Navigate to the home page or another appropriate page
            })
            .catch(err => {
                console.error("Error updating user:", err);
            });
    };

    return (
        <div className="edit-users">
            <h3>Update User Details</h3>
            <img src={user.avatar} alt="User Avatar" height="200px" width="200px" />
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    name="displayName"
                    value={user.displayName}
                    onChange={handleChange}
                    placeholder="Update display name"
                />
                <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    placeholder="Update email"
                />
                <input
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleChange}
                    placeholder="Update username"
                />
                <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    placeholder="Update password"
                />
                <input
                    type="text"
                    name="avatar"
                    value={user.avatar}
                    onChange={handleChange}
                    placeholder="Add image URL"
                />
                <select
                    name="status"
                    value={user.status}
                    onChange={handleChange}
                >
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                </select>
                <button type="button" id="updateBtn" onClick={handleUpdate}>
                    Update Details
                </button>
            </form>
        </div>
    );
}

export default EditUsers;

