import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {

    const [formdata, setFormdata] = useState({})
    const [record, setRecord] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        fetchRecord();
    }, [])

    const handleChange = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formdata.email || !formdata.password || !formdata.fullName || !formdata.username) {
            alert("Please fill in all fields");
            return;
            navigate('/');
        }


        await axios.post("http://localhost:5000/users", formdata).then(res => {
            setFormdata({
                email: "",
                password: "",
                fullName: "",
                username: ""
            })
            navigate('/login');
        })
    }

    const fetchRecord = async () => {
        await axios.get("http://localhost:5000/users").then(res => {
            setRecord(res.data)
        })
    }

    return (
        <div className='bg-black w-full h-screen flex flex-col gap-2 justify-center items-center'>
            <div className='w-[350px] h-[617px] border border-[#363636] flex flex-col items-center'>
                <div className='w-[268.5px]'>
                    <img src="logo.png" alt="" className='w-60 h-30' />
                    <h1 className='text-[#A8A8A8] text-md text-center m-[-15px] font-semibold'>Sign up to see photos and videos<br /> from your friends.</h1>
                    <button className='bg-[#4A5DF9] text-white cursor-pointer text-[14px] font-semibold flex justify-center items-center gap-3 rounded-md mt-8 h-[33.5px] w-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#fff" fillRule="evenodd" d="M15.725 22v-7.745h2.6l.389-3.018h-2.99V9.31c0-.874.243-1.47 1.497-1.47h1.598v-2.7a21 21 0 0 0-2.33-.12c-2.304 0-3.881 1.407-3.881 3.99v2.227H10v3.018h2.607V22H3.104C2.494 22 2 21.506 2 20.896V3.104C2 2.494 2.494 2 3.104 2h17.792C21.506 2 22 2.494 22 3.104v17.792c0 .61-.494 1.104-1.104 1.104z" /></svg>
                        Log in with Facebook
                    </button>
                    <div className='flex gap-3 justify-center items-center my-4'>
                        <div className='h-[1px] w-30 bg-[#363636]'></div>
                        <h1 className='text-[#a8a8a8] w-[18px] text-xs font-semibold'>OR</h1>
                        <div className='h-[1px] w-30 bg-[#363636]'></div>
                    </div>
                    <form className='flex flex-col gap-1.5 text-[14px] text-[#a8a8a8]'>
                        <input className='bg-[#121212] w-full h-9 px-2 border border-[#555555] rounded-sm' type="email" value={formdata.email} name="email" placeholder='Email' onChange={handleChange} />
                        <input className='bg-[#121212] w-full h-9 px-2 border border-[#555555] rounded-sm' type="password" value={formdata.password} name="password" placeholder='Password' onChange={handleChange} />
                        <input className='bg-[#121212] w-full h-9 px-2 border border-[#555555] rounded-sm' type="text" value={formdata.fullName} name="fullName" placeholder='Full Name' onChange={handleChange} />
                        <input className='bg-[#121212] w-full h-9 px-2 border border-[#555555] rounded-sm' type="text" value={formdata.username} name="username" placeholder='Username' onChange={handleChange} />
                    </form>
                    <div className='text-center mt-6 mb-4 flex flex-col gap-4'>
                        <p className='text-xs text-[#a8a8a8]'>People who use our service may have uploaded your contact information to Instagram. <span className='text-[#708DFF]'>Learn<br /> More</span></p>
                        <p className='text-xs text-[#a8a8a8]'>By signing up, you agree to our <span className='text-[#708DFF]'>Terms</span>, <span className='text-[#708DFF]'>Privacy <br /> Policy</span> and <span className='text-[#708DFF]'>Cookies Policy</span>.</p>
                    </div>
                    <button onClick={handleSubmit} className='bg-[#4A5DF9] cursor-pointer text-white text-[14px] font-semibold flex justify-center items-center gap-3 rounded-md h-[33.5px] w-full'>
                        Sign up
                    </button>
                </div>
            </div>
            <div className='w-[350px] text-white h-[80.5px] text-[14px] flex flex-col justify-center items-center border border-[#363636]'>
                <h1>Have an account?</h1>
                <Link to="/login">
                     <button className='text-[#708DFF] font-semibold cursor-pointer'>Log in</button>
                </Link>
            </div>
        </div>
    )
}