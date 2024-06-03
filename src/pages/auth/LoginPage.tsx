import { BiUserCircle } from "react-icons/bi";
import Input from "../../components/atoms/Input";
import { FaUnlockKeyhole } from "react-icons/fa6";
import Button from "../../components/atoms/Button";
import { Link } from "react-router-dom";

type Props = {};

export default function LoginPage({}: Props) {
  return (
    <div className="h-96 w-[50%] m-5 mx-auto flex items-center">
      <div className="w-[55%]">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-green-500 bg-clip-text text-transparent text-center">
          Login
        </h1>
        <div>
          <form className=" flex flex-col items-center">
            <Input
              placeholder="Username"
              icon={<BiUserCircle size={30} color="gray" />}
              className=" w-72  bg-indigo-100 rounded-xl mt-5"
            />
            <Input
              placeholder="Password"
              icon={<FaUnlockKeyhole size={28} color="gray" />}
              className=" w-72  bg-indigo-100 rounded-xl mt-3"
            />
            <Button className=" rounded-xl mt-3 mb-6">Login Now</Button>
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
