import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import { useEffect, useState } from "react";
import { Todo } from "./model/todo";
import axios from "axios";
import Footer from "./Footer";

const UpdateTaskItem: React.FC = () => {
    const { id } = useParams();
    const [todoByID, setTodoById] = useState<Todo | null>(null);
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const navigate = useNavigate();

    useEffect(() => {
        getAllTodoById();
    }, []);

    useEffect(() => {
        setInput();
    }, [todoByID]);

    const getAllTodoById = async () => {  //get to-do itemby id
        try {

            const response = await axios.get(`https://localhost:7035/api/TodoItem/get-todo-item-by-id/${id}`);
            console.log(response.data);
            
            setTodoById(response.data);

        } catch (error) {
            console.error("Error Todo data:", error);
        }
    }

    const setInput = () => {
        if (todoByID) {
           setTitle(todoByID.title);
           setDescription(todoByID.description);
        }
    }

    const handeleUpdater = async(event: React.FormEvent<HTMLFormElement>) => {  // update task
        event.preventDefault();
    

    const data = {
        "title": title,
        "description": description,
        "isAvailable": false,
    };

    try {
        const response = await axios.put(`https://localhost:7035/api/TodoItem/update-todo-item/${id}`, data);
        if (response.status === 200) {
            alert("Success Update Task");
            navigate("/home");
        }else{
            alert("Faild Update Task");
            window.location.reload();
            
        }
    } catch (error) {
        console.error("Error updating task:", error);
    }
    }

    const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }
    const handleDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value);
    }
    return(
        <>
        <Header/>

        <div className="text-center my-4">
                <h2 className="k1">Update Task</h2>
            </div>
            <div className="card mx-5 mb-5 border border-secondary rounded-3">
                <h5 className="card-header card-header text-center fw-bold bg-secondary text-white">Update Task</h5>
                <div className="card-body">
                    <form onSubmit={handeleUpdater}>
                        <label className="form-label">
                            Title
                        </label>
                        <div className="form-group mb-3">
                            <input type="text" className="form-control" onChange={handleTitle} value={title} placeholder="Title" required />
                        </div>
                        <label className="form-label">
                            Description
                        </label>
                        <div className="form-group mb-3">
                            <textarea className="form-control" onChange={handleDescription} value={description} placeholder="Description"  required />
                        </div>

                        <div className="card-body d-flex justify-content-between flex-column">
                            <button type="submit" className="btn btn-primary">Update</button>
                        </div>
                    </form>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default UpdateTaskItem;