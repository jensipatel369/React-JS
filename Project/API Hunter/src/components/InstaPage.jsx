import React from 'react'

export default function InstaPage() {
    return (
        <div className="bg-gradient-to-tr from-pink-500 to-fuchsia-700 flex justify-center">
            <div className="bg-white w-full max-w-6xl flex rounded-lg shadow-lg my-8">
                <div className="w-64 border-r border-[#d1d5dc] p-5 hidden md:flex flex-col justify-between">
                    <div>
                        <h1 className="text-2xl font-bold mb-8">Instagram</h1>
                        <nav className="space-y-4">
                            <a href="#" className="flex items-center space-x-3 text-gray-800 hover:text-black">
                                <span>🏠</span><span>Home</span>
                            </a>
                            <a href="#" className="flex items-center space-x-3 text-gray-800 hover:text-black">
                                <span>🔍</span><span>Explore</span>
                            </a>
                            <a href="#" className="flex items-center space-x-3 text-gray-800 hover:text-black">
                                <span>💬</span><span>Messages</span>
                            </a>
                            <a href="#" className="flex items-center space-x-3 text-gray-800 hover:text-black">
                                <span>❤️</span><span>Notifications</span>
                            </a>
                            <a href="#" className="flex items-center space-x-3 text-gray-800 hover:text-black">
                                <span>➕</span><span>Create</span>
                            </a>
                        </nav>
                    </div>
                    <div>
                        <a href="#" className="flex items-center space-x-3 text-gray-800 hover:text-black">
                            <span>👤</span><span>Profile</span>
                        </a>
                    </div>
                </div>
                <main className="flex-1 border-r border-[#d1d5dc] overflow-y-auto p-4">
                    <div className="flex space-x-4 overflow-x-auto mb-6">
                        <div className="w-16 h-16 rounded-full border-2 border-pink-500 bg-gray-200"></div>
                        <div className="w-16 h-16 rounded-full border-2 border-pink-500 bg-gray-200"></div>
                        <div className="w-16 h-16 rounded-full border-2 border-pink-500 bg-gray-200"></div>
                        <div className="w-16 h-16 rounded-full border-2 border-pink-500 bg-gray-200"></div>
                        <div className="w-16 h-16 rounded-full border-2 border-pink-500 bg-gray-200"></div>
                    </div>
                    <div className="border border-[#d1d5dc] rounded-lg overflow-hidden mb-8">
                        <div className="p-4 flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                                <div>
                                    <p className="font-semibold">tartinebakery</p>
                                    <p className="text-sm text-gray-500">San Francisco, California</p>
                                </div>
                            </div>
                            <span className="text-gray-500">•••</span>
                        </div>
                        <img src="insta-img.jpg" alt="Pie" className="w-full" />
                        <div className="p-4">
                            <p className="font-semibold">tartinebakery</p>
                            <p className="text-gray-600 text-sm">Fresh pies from the oven 🥧</p>
                        </div>
                    </div>
                </main>
                <div className="hidden lg:block w-80 p-5">
                    <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                        <div>
                            <p className="font-semibold">azevedo_drdr</p>
                            <a href="#" className="text-blue-500 text-sm">Switch</a>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mb-3">
                        <p className="text-gray-500 font-semibold">Suggestions For You</p>
                        <a href="#" className="text-sm font-semibold">See All</a>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                                <p className="font-semibold text-sm">alex.anyways18</p>
                            </div>
                            <a href="#" className="text-blue-500 text-sm">Follow</a>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                                <p className="font-semibold text-sm">chantoulowergirl</p>
                            </div>
                            <a href="#" className="text-blue-500 text-sm">Follow</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
