import { useState } from "react";
import Header from "./Header";
import axios from "axios";
import Footer from "./Footer";

const AddTodo: React.FC = () => {

    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const handeleAdd = async(event: React.FormEvent<HTMLFormElement>) => {  // add task
        event.preventDefault();
    

    const data = {
        "title": title,
        "description": description,
        "isAvailable": false,
    };

    try {
        const response = await axios.post("https://localhost:7035/api/TodoItem/save-todo-item", data);
        if (response.status === 200) {
            alert("Success Add Task");
            window.location.reload();
        }
    } catch (error) {
        console.error("Error adding task:", error);
    }
    }

    const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }
    const handleDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value);
    }
    return (
        <>
            <Header />

            <div className="text-center my-4">
                <h2 className="k1">Add Task</h2>
            </div>
            <div className="card mx-5 mb-5 border border-secondary rounded-3">
                <h5 className="card-header card-header text-center fw-bold bg-secondary text-white">Add Task</h5>
                <div className="card-body">
                    <form onSubmit={handeleAdd}>
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

                        <button type="submit" className="btn btn-primary">Add Task</button>
                    </form>
                </div>
            </div>

            <Footer/>

        </>
    )
}

export default AddTodo;