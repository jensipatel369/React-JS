import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function Login() {

    const [showPassword, setShowPassword] = useState(false);
    const [formdata, setFormdata] = useState({});
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers();
    }, []);

   const fetchUsers = async () => {
        await axios.get("http://localhost:5000/users").then(res => {
            setUsers(res.data)
        })
    }

    const handleChange = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = users.find(item => 
            (item.email === formdata.email || item.username === formdata.email) && 
            item.password === formdata.password
        );

        if (user) {
            navigate('/insta-page');
        } else {
            setFormdata({
                email: "",
                password: ""
            });
            alert("Invalid email/username or password");
        }
    };

    return (
        <div className='bg-black w-full h-screen flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center gap-3'>
                <div className='w-[350px] py-6 flex flex-col items-center justify-center border border-[#363636]'>
                    <div className='w-[268.5px]'>
                        <img src="logo.png" alt="" className='w-60' />
                        <form className="flex flex-col gap-2 text-[14px] text-[#a8a8a8]" onSubmit={handleSubmit}>
                            <input 
                                className="bg-[#121212] w-full h-9 px-2 border border-[#555555] rounded-sm text-white" 
                                type="text" 
                                name="email" 
                                placeholder="Email or Username" 
                                value={formdata.email}
                                onChange={handleChange}
                                required
                            />
                            <div className="relative">
                                <input 
                                    className="bg-[#121212] w-full h-9 px-2 border border-[#555555] rounded-sm pr-14 text-white" 
                                    type={showPassword ? 'text' : 'password'} 
                                    name="password" 
                                    placeholder="Password" 
                                    value={formdata.password}
                                    onChange={handleChange}
                                    required
                                />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-1/2 -translate-y-1/2 text-[#a8a8a8] hover:text-white text-[12px] cursor-pointer" >
                                    {showPassword ? 'Hide' : 'Show'}
                                </button>
                            </div>
                            <button type="submit" className="bg-[#4A5DF9] cursor-pointer text-white text-[14px] font-semibold flex justify-center items-center gap-3 rounded-md h-[33.5px] w-full mt-2">Log in</button>
                        </form>
                        <div className='flex gap-3 justify-center items-center my-4'>
                            <div className='h-[1px] w-30 bg-[#363636]'></div>
                            <h1 className='text-[#a8a8a8] w-[18px] text-xs font-semibold'>OR</h1>
                            <div className='h-[1px] w-30 bg-[#363636]'></div>
                        </div>
                        <div className='flex flex-col gap-3 pb-5'>
                            <button className='text-[#0095f6] cursor-pointer text-[14px] font-semibold flex justify-center items-center gap-2 rounded-md h-[33.5px] w-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#0095f6" fillRule="evenodd" d="M15.725 22v-7.745h2.6l.389-3.018h-2.99V9.31c0-.874.243-1.47 1.497-1.47h1.598v-2.7a21 21 0 0 0-2.33-.12c-2.304 0-3.881 1.407-3.881 3.99v2.227H10v3.018h2.607V22H3.104C2.494 22 2 21.506 2 20.896V3.104C2 2.494 2.494 2 3.104 2h17.792C21.506 2 22 2.494 22 3.104v17.792c0 .61-.494 1.104-1.104 1.104z" /></svg>
                                Log in with Facebook
                            </button>
                            <h1 className='text-white text-sm font-semibold text-center hover:underline cursor-pointer'>Forgot password?</h1>
                        </div>
                    </div>
                </div>

                <div className='w-[350px] text-white h-[62.5px] text-[14px] flex gap-1 justify-center items-center border border-[#363636]'>
                    <h1>Don't have an account?</h1>
                    <Link to="/">
                        <button className='text-[#708DFF] font-semibold cursor-pointer'>Sign up</button>
                    </Link>
                </div>

                <footer className="w-full text-[12px] text-[#A8A8A8] mt-20">
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-2">
                        <a href="#" className="hover:underline">Meta</a>
                        <a href="#" className="hover:underline">About</a>
                        <a href="#" className="hover:underline">Blog</a>
                        <a href="#" className="hover:underline">Jobs</a>
                        <a href="#" className="hover:underline">Help</a>x
                        <a href="#" className="hover:underline">API</a>
                        <a href="#" className="hover:underline">Privacy</a>
                        <a href="#" className="hover:underline">Terms</a>
                        <a href="#" className="hover:underline">Locations</a>
                        <a href="#" className="hover:underline">Instagram Lite</a>
                        <a href="#" className="hover:underline">Meta AI</a>
                        <a href="#" className="hover:underline">Meta AI Articles</a>
                        <a href="#" className="hover:underline">Threads</a>
                        <a href="#" className="hover:underline">Contact Uploading & Non-Users</a>
                        <a href="#" className="hover:underline">Meta Verified</a>
                    </div>
                    <div className="flex justify-center items-center gap-1 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                            <span>English</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        <p>© 2025 Instagram from Meta</p>
                    </div>
                </footer>
            </div>
        </div>
    )
}
