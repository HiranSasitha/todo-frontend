import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Todo } from "./model/todo";
import axios from "axios";
import Footer from "./Footer";
import Header from "./Header";



const Home: React.FC = () => {
    const [todo, setTodo] = useState<Todo[] | null>(null);

    useEffect(() => {
        getAllTodo();
    }, []);


    const getAllTodo = async () => {  //get to-do item
        try {

            const response = await axios.get("https://localhost:7035/api/TodoItem/get-all-unavailable-todo-items");
            console.log(response.data);
            console.log(response);
            setTodo(response.data);

        } catch (error) {
            console.error("Error Todo data:", error);
        }
    }

    const getAllTodoByName = async () => {  //get to-do item-by-name

        try {

            const response = await axios.get("https://localhost:7035/api/TodoItem/get-all-unavailable-todo-items-orderby-title");
            console.log(response.data);
            console.log(response);
            setTodo(response.data);

        } catch (error) {
            console.error("Error Todo data:", error);
        }
    }

    const filterBy = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
    switch (value) {
      case "Title":
         setTodo(null);
         getAllTodoByName();
        break;
      case "Date":
        setTodo(null);
         getAllTodo();
        break;
      default:
         getAllTodo();
        break;
    }

    }

    const updateComplted = async(id:number) => {
          //update todo as completed
        try {

            const response = await axios.put(`https://localhost:7035/api/TodoItem/update-todo-item-completed/${id}`);
            window.location.reload()  // reload page

        } catch (error) {
            console.error("Error Todo data:", error);
        }
    }
        
    

    return (
        <>
            <Header />

            <div className="text-center my-4">
                <h2 className="k1">TO-DO</h2>
            </div>

            <div className="className mb-5 d-flex justify-content-end">
                <label className="form-label me-3">Filter :</label>
                <select className="form-select me-5" onChange={filterBy} style={{ width: '200px' }}>
                    <option value="Date">Date</option>
                    <option value="Title">Title</option>
                    
                </select>
            </div>

            <table className="custom-table table table-success table-striped  mb-5 ">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Completed</th>
                        <th>Update</th>

                    </tr>
                </thead>
                <tbody>
                    {todo && todo.map((emp) =>
                        <tr>
                            <td>{emp.title}</td>
                            <td>{emp.description}</td>


                            <td>
                                <button type='button' onClick={() => updateComplted(emp.id)} className="btn btn-outline-success"  >
                                    Completed
                                </button>
                            </td>

                            <td>
                                <Link type='button' className="btn btn-outline-primary" to={""} >
                                    Update
                                </Link>
                            </td>

                        </tr>


                    )}

                </tbody>
            </table>

            <Footer />

        </>
    )

}

export default Home;