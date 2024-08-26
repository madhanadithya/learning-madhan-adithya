import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import './TodoDetailsEdit.css';  

function TodoDetailsEdit() {
    const [todoData, setTodoData] = useState({});
    const [statusOptions] = useState(["complete", "incomplete"]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`/todos/${id}`)
            .then(response => {
                setTodoData(response.data);
            })
            .catch(error => {
                console.error('Error fetching todo details:', error);
            });
    }, [id]);

    function editTodo(e) {
        e.preventDefault();
        const todoModifiedObj = {
            name: e.target.todoitem.value,
            status: e.target.status.value,
            description: e.target.description.value,
        };
        axios.put(`/todos/${id}`, todoModifiedObj)
            .then(() => {
                navigate('/Todo');
            })
            .catch(err => {
                console.error('Error updating todo:', err);
            });
    }

    return (
        <div className="todo-details-edit">
            <form onSubmit={editTodo} className="todo-form">
                <input
                    type="text"
                    name="todoitem"
                    defaultValue={todoData.name}
                    required
                />
                <select name="status" defaultValue={todoData.status} required>
                    {statusOptions.map(status => (
                        <option key={status} value={status}>
                            {status}
                        </option>
                    ))}
                </select>
                <textarea
                    name="description"
                    defaultValue={todoData.description}
                    placeholder="Description (optional)"
                />
                <button type="submit">Update Todo</button>
            </form>
        </div>
    );
}

export default TodoDetailsEdit;

