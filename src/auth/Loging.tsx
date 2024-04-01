import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
    const [username, setUsername] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);

    const navigate = useNavigate();

    const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    }

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = {
            "userName": username,
            "password": password,
        };

        try {
            const response = await axios.post("https://localhost:7035/api/Auth/login", data);

            if (response.status === 200) {
                // Store the token in local storage
                localStorage.setItem("token", response.data);
                console.log(response.data);
                navigate("/home");
            } else {
                console.log("Failed login");
                alert("Wrong userName or Password")
                window.location.reload();
            }
        } catch (error) {
            console.error("Error during login:", error);
            alert("Wrong userName or Password")
            window.location.reload();
        }
    };

    return (
        <>
            <div className="loging-box">
                <div className="text-center mt-5 mb-5">
                    <h1>Login</h1>
                </div>

                <div className="login-box mx-auto mt-5 mb-3" style={{ maxWidth: "400px" }}>
                    <form onSubmit={handleLogin}>
                        <div className="form-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                onChange={handleUsername}
                                placeholder="UserName"
                                value={username || ""}
                                required
                            />
                        </div>

                        <div className="form-group mb-3">
                            <input
                                type="password"
                                className="form-control"
                                onChange={handlePassword}
                                placeholder="Password"
                                value={password || ""}
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
            <div className="text-center mb-5 fw-bold">
                <Link className="mx-4 text-decoration-none " to={"/auth/register_user"}>Register For Users</Link>
            </div>
        </>
    );
}

export default Login;
