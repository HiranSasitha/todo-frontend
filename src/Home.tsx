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
      
return(
    <>
    <Header/>
   
      <div className="text-center my-4">
        <h2 className="k1">TO-DO</h2>
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
                <button type='button' className="btn btn-outline-success"  >
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

     <Footer/>

    </>
)

}

export default Home;