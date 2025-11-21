import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Add() {
    const [formdata, setFormdata] = useState({});
    const navigate = useNavigate();
    const locationObj = useLocation();

    useEffect(() => {
        if (locationObj.state) {
            let allData = JSON.parse(localStorage.getItem("record")) || [];
            let singleData = allData.find(
                (item) => item.id == locationObj.state.stid
            );
            setFormdata(singleData);
        }
    }, []);

    const HandleChange = (e) => {
        setFormdata({
            ...formdata,
            id: Date.now(),
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let allData = JSON.parse(localStorage.getItem("record")) || [];

        if (!locationObj.state) {
            allData.push(formdata);
        } else {
            let singleData = allData.find(
                (item) => item.id == locationObj.state.stid
            );
            singleData.name = formdata.name;
            singleData.age = formdata.age;
            singleData.city = formdata.city;
        }

        localStorage.setItem("record", JSON.stringify(allData));

        setTimeout(() => {
            navigate("/");
        }, 500);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
                <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">{locationObj.state ? "Update Record" : "Add New Record"}</h1>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Name</label>
                        <input type="text" placeholder="Enter your name" value={formdata.name || ""} name="name" onChange={HandleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" required />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Age</label>
                        <input type="number" placeholder="Enter your age" value={formdata.age || ""} name="age" onChange={HandleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" required />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">City</label>
                        <input type="city" placeholder="Enter your city" value={formdata.city || ""} name="city" onChange={HandleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" required />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 cursor-pointer text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold" >{locationObj.state ? "Update Data" : "Add Data"}</button>
                </form>
                <button onClick={() => navigate("/")} className="mt-4 w-full text-center text-gray-600 hover:text-gray-800 transition" >⬅ Back to Records</button>
            </div>
        </div>
    );
}