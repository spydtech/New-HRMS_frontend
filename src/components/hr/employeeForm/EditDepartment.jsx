import React, { useState } from 'react';
import { BiEditAlt } from "react-icons/bi";
import { MdOutlineDoneOutline } from "react-icons/md";
import { BsCheck2Circle } from "react-icons/bs";



const EditDepartment = () => {
    const [name, setName] = useState('');
    const [head, setHead] = useState('');
    const [employees, setEmployees] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const department = { name, head, employees };
        localStorage.setItem('department',JSON.stringify(department));
        setShowModal(true);
        setName('');
        setHead('');
        setEmployees('');
        setTimeout(()=>{
            setShowModal(false);
        },1500);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };  
    return (
        <div className="max-w-full max-h-screen mx-32 my-10 shadow-2xl px-14 py-11 rounded-lg bg-white">
            <h2 className="text-2xl font-semibold mb-10 mt-4 text-blue-400">Edit Department List</h2>
            <form onSubmit={handleSubmit} className='flex flex-col md:mx-[240px] mx-[0px]'>
            <div className="mb-6">
                <div className='flex flex-row justify-between items-center'>
                <label className="block text-md font-medium text-gray-700">Department Name</label>
                <BiEditAlt className='text-blue-500 text-lg'/>
                </div>
                    <input
                        className="w-full mt-4 px-3 py-2 border-cyan-300 border rounded-md focus:outline-none focus:border-cyan-500"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-6">
                <div className='flex flex-row justify-between items-center'>
                <label className="block text-md font-medium text-gray-700">Department Head</label>
                <BiEditAlt className='text-blue-500 text-lg'/>
                </div>
                    <input
                        className="w-full mt-4 px-3 py-2 border-cyan-300 border rounded-md focus:outline-none focus:border-cyan-500"
                        value={head}
                        onChange={(e) => setHead(e.target.value)}
                        rows="4"
                        required
                    />
                </div>
                <div className="mb-6">
                <div className='flex flex-row justify-between items-center'>
                <label className="block text-md font-medium text-gray-700">Total Employees</label>
                <BiEditAlt className='text-blue-500 text-lg'/>
                </div>
                    <input
                        className="w-full mt-4 px-3 py-2 border-cyan-300 border rounded-md focus:outline-none focus:border-cyan-500"
                        value={employees}
                        onChange={(e) => setEmployees(e.target.value)}
                        required
                    />
                </div>
                <div className="flex justify-center gap-4">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white  px-9 text-md py-1 text-medium rounded-md focus:outline-none"
                    >
                        Save
                    </button>
                    <button
                        type="button"
                        className="bg-white text-blue-500 border border-blue-400 px-7 text-sm font-medium rounded-md focus:outline-none"
                    >
                        Cancel
                    </button>
                </div>
                
            </form>
            {showModal && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50" onClick={handleCloseModal}>
                    <div className="bg-[#2a97db] z-50 p-8 rounded-lg shadow-lg" onClick={(e) => e.stopPropagation()}>
                        <div className="text-center mt-4 flex flex-col justify-center items-center gap-3">
                        <BsCheck2Circle  className='text-white text-[40px]'/>


                            <span className='text-white'>
                                Successfully Save The <br/> Changes
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EditDepartment;
