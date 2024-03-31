import axios from "axios";
import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const RegisterUser: React.FC = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [emailError, setEmailError] = useState<String>("");

    const navigate = useNavigate();

    const handleUsername = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError("Please enter a valid email address");
        }
    }

    const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        validateEmail();
        const data = {
            userName: username,
            email: email,
            password: password
        };

        try {
            const response = await axios.post("https://localhost:7035/api/Auth/register", data);

            console.log(response);

            if (response.status === 200) {
                alert("Success Register");
                navigate("/auth/login");
            } else {
                alert("Register Failed");
                window.location.reload();
            }
        } catch (error) {
            alert("Register Failed");
            window.location.reload();
        }
    };

    return (
        <>
            <div className="loging-box mx-auto mt-5" style={{ maxWidth: "400px" }}>
                <div className="text-center mb-4">
                    <h1>User Register</h1>
                </div>

                <form onSubmit={handleRegister} className="mb-5">
                    <div className="form-group mb-3">
                        <input type="text" className="form-control" onChange={handleUsername} placeholder="Username" value={username} required/>
                    </div>

                    <div className="form-group mb-3">
                        <input   type="password"  className="form-control"  onChange={handlePassword} placeholder="Password" value={password}   required  />
                    </div>

                    <div className="form-group mb-3">
                            <input type="email" className="form-control" onChange={handleEmail} value={email} onBlur={validateEmail} placeholder="Email" required />
                            {emailError && <div className="text-danger">{emailError}</div>}
                        </div>

                    <button type="submit" className="btn btn-primary">
                        Register
                    </button>
                </form>
            </div>
        </>
    );
};

export default RegisterUser;
