import React from "react";
import { MdOutlinePhoneCallback } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";

const ContactUs: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row max-w-4xl mx-auto my-8 p-4">
            <div className="md:w-1/2 p-4 border-r border-gray-300">
                <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                <div className="mb-8">
                    <h2 className="text-xl font-semibold">Name</h2>
                    <p>Menghong</p>
                    <hr className="border-t border-gray-300 mt-2" />
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold">E-mail</h2>
                    <p>menghong@gmail.com</p>
                    <hr className="border-t border-gray-300 mt-2" />
                </div>
                <div className="flex items-center mb-2">
                    <MdOutlinePhoneCallback className="bg-indigo-700 w-7 h-7 rounded-full text-white p-1" />
                    <p className="px-5">088 00 11 11 **</p>
                </div>
                <div className="flex items-center">
                    <TbWorldWww className="bg-indigo-700 w-7 h-7 rounded-full text-white p-1"/>
                    <p className="px-5">khmerresteran</p>
                </div>
            </div>
            <div className="md:w-1/2 p-4">
                <h2 className="text-xl font-semibold">Message</h2>
                <textarea
                    className="w-full h-32 mt-2 p-2  border-gray-300 rounded"
                    placeholder="Write your message here..."
                ></textarea>
                <button className="mt-4 px-6 py-2 bg-red-800 text-white rounded-full">
                    Submit
                </button>
            </div>
        </div>
    );
}

export default ContactUs;
