import { BiUserCircle } from "react-icons/bi";
import Input from "../../components/atoms/Input";
import { FaUnlockKeyhole } from "react-icons/fa6";
import Button from "../../components/atoms/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

type Props = {};

export default function LoginPage({}: Props) {
  const {login} = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const success:any = login(username, password);
    if (success) {
      navigate('/food'); // Redirect to /food after successful login
    } else {
      setError('Invalid username or password');
    }
    setUsername('');
    setPassword('');
  };
  return (
    <div className="h-96 w-[50%] m-5 mx-auto flex items-center">
      <div className="w-[55%]">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-green-500 bg-clip-text text-transparent text-center">
          Login
        </h1>
        <div>
       
          <form className=" flex flex-col items-center" onSubmit={handleSubmit}>
          {error && <p className="text-red-500 mb-4">{error}</p>}
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              icon={<BiUserCircle size={30} color="gray" />}
              className=" w-72  bg-indigo-100 rounded-xl mt-5"
            />
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              icon={<FaUnlockKeyhole size={28} color="gray" />}
              className=" w-72  bg-indigo-100 rounded-xl mt-3"
            />
            <Button type="submit" className=" rounded-xl mt-3 mb-6">Login Now</Button>
            <p>
              Have account yet?{" "}
              <Link to="/register" className=" text-blue-500 ">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
      <div className=" bg-login-bg w-[45%] h-full rounded-3xl flex justify-center items-center shadow-xl">
        <div className="w-[80%] h-[80%] rounded-3xl overflow-hidden">
           <img src="images/loginImg.jpg" className="w-full h-full object-cover​​​​​​​​​​​" alt="" />
        </div>
      </div>
    </div>
  );
}
