import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-full bg-backGroundFooterColor flex flex-col lg:flex-row px-8 lg:px-32 py-10 lg:py-20 text-white">
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
        <h1 className="text-3xl lg:text-4xl">
          Fresh Updates,
          <br />
          Direct to Your Inbox
        </h1>
        <div className="mt-6">
          <input
            type="text"
            placeholder="Sign up for our Newsletter!"
            className="w-full lg:w-96 text-[18px] bg-backGroundFooterColor border-2 rounded-full px-4 py-2 focus:outline-green-600 focus:border-green-600 mr-0 lg:mr-6 mb-4 lg:mb-0"
          />
          <Link to="/submit-success" className="bg-green-600 w-full lg:w-auto px-6 py-2 text-[18px] rounded-full font-medium">
            Submit
          </Link>
        </div>
        <div className="font-semibold flex flex-col lg:flex-row items-start lg:items-center gap-6 mt-10 lg:mt-14">
          <p>Contact Us</p>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 lg:border-l-2 lg:px-12">
        <h1 className="text-3xl lg:text-4xl">
          Follow Us:
          <br />
          @ribrackbbqsauce
        </h1>
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 mt-7">
          <div className="flex items-center gap-2">
            <FaFacebook size={30} />
            <p className="text-xl">Instagram</p>
          </div>
          <div className="flex items-center gap-2">
            <FaInstagram size={30}/>
            <p className="text-xl">Facebook</p>
          </div>
          <div className="flex items-center gap-2">
            <FaGithub size={30}/>
            <p className="text-xl">Facebook</p>
          </div>
        </div>
        <h3 className="mt-10 lg:mt-16 text-center text-gray-300">© 2021 Rib Rack. All Rights Reserved.</h3>
      </div>
    </div>
  );
}
