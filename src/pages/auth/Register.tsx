
import Button from "../../components/atoms/Button";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import Input from "../../components/atoms/Input";
import { Link } from "react-router-dom";
import { IoMdCloseCircle } from "react-icons/io";

export default function Register() {
  return (
    <div className=" absolute w-full h-screen bg-[#B1D9DB] z-50 top-0 flex items-center">
      <div className=" w-[50%] h-screen">
        <div className=" mt-16 ml-24">
          <img src="images/signUp.jpg" alt="" className=" object-cover" />
        </div>
      </div>
      <div className=" bg-white w-[50%] h-screen rounded-l-[9%] px-16 py-28 flex flex-col gap-5 ">
        <Link to="/food" className=" absolute right-10 top-10 text-red-700 hover:text-red-500"><IoMdCloseCircle size={40}/></Link>
        <h1 className=" text-2xl font-bold">Create Account</h1>
        <div className=" flex items-center gap-16">
          <Button
            icon={<FcGoogle />}
            variant="default"
            className=" font-normal rounded-md"
          >
            {" "}
            Sign up with Google
          </Button>
          <Button
            icon={<FaFacebookSquare color="blue" />}
            variant="default"
            className=" font-normal rounded-md"
          >
            {" "}
            Sign up with Google
          </Button>
        </div>
        <div className=" ml-[37%] text-xl">-Ro-</div>
        <form className=" flex flex-col gap-9">
          <Input
            placeholder="Full Name"
            className=" w-[78%] border-t-0 border-r-0 border-l-0"
          />
          <Input
          type="email"
            placeholder="Email"
            className=" w-[78%] border-t-0 border-r-0 border-l-0"
          />
          <Input
            type="password"
            placeholder="Password"
            className=" w-[78%] border-t-0 border-r-0 border-l-0"
          />

          <Button variant="default" className=" w-[78%] bg-[#B1D9DB] rounded-lg text-white">Create Account</Button>
          <p>Already have an account? <Link to="/login" className=" text-blue-600">Login</Link> </p>
        </form>
      </div>
    </div>
  );
}
