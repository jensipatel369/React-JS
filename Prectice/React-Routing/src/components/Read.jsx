import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Read() {
    const navigate = useNavigate();
    const [record, setRecord] = useState([]);

    useEffect(() => {
        let allRecord = JSON.parse(localStorage.getItem("record")) || [];
        setRecord(allRecord);
    }, []);

    const handleDelete = (id) => {
        let filterData = record.filter((item) => item.id !== id);
        localStorage.setItem("record", JSON.stringify(filterData));
        setRecord(filterData);
    };

    const handleEdit = (id) => {
        navigate("/add", { state: { stid: id } });
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Records</h1>
                    <Link to="/add">
                        <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">ADD DATA</button>
                    </Link>
                </div>

                {record.length > 0 ? (
                    <ul className="space-y-4">
                        {record.map((e, i) => (
                            <li key={i} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg border" >
                                <div>
                                    <p className="font-semibold text-gray-700">{i + 1}. {e.name}</p>
                                    <p className="text-sm text-gray-500">Age : {e.age}</p>
                                    <p className="text-sm text-gray-500">City : {e.city}</p>
                                </div>
                                <div className="flex gap-3">
                                    <button onClick={() => handleEdit(e.id)} className="px-3 py-1 bg-green-600 cursor-pointer text-white rounded-lg hover:bg-green-700 transition" > Edit </button>
                                    <button onClick={() => handleDelete(e.id)} className="px-3 py-1 bg-red-600 cursor-pointer text-white rounded-lg hover:bg-red-700 transition" > Delete </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-center text-gray-500 text-lg mt-10">NO RECORD</p>
                )}
            </div>
        </div>
    );
}
