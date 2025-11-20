import React from 'react'

export default function Customer() {
    return (
        <div className="bg-gray-50 text-gray-800 font-sans leading-relaxed py-10 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-wrap items-center justify-between mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Review & Ratings for Black Forest
                    </h2>
                    <a href="#" className="text-teal-600 font-medium hover:underline">(View All Reviews)</a>
                </div>
                <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center space-x-2 text-yellow-500">
                        <span className="text-2xl">⭐</span>
                        <span className="text-lg font-semibold text-gray-800">4.9 out of 5</span>
                    </div>
                    <div className="flex items-center space-x-2 text-yellow-500">
                        <span className="text-2xl">👏</span>
                        <span className="text-lg font-semibold text-gray-800">98% Recommended</span>
                    </div>
                    <div className="ml-auto flex items-center bg-white border-1 border-gray-100 rounded-lg px-3 py-1 shadow-sm">
                        <span className="text-green-600 font-semibold">★ 4.9</span>
                        <span className="ml-2 text-gray-600 text-sm">2673 reviews</span>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-xl shadow-sm p-5">
                        <div className="flex items-start gap-4 mb-4">
                            <img src="1.1.jpg" alt="cake" className="w-14 h-14 rounded-md object-cover" />
                            <p className="text-gray-700 text-sm">
                                This cake is absolutely delicious, and I wholeheartedly recommend it to make your day extra special.
                            </p>
                        </div>
                        <h3 className="font-semibold text-gray-900">Mariyappanvinitha
                            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded ml-1">★ 5</span>
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">Posted On : 29th November, 2024</p>
                        <p className="text-sm text-gray-500">City : Mundra</p>
                        <p className="text-sm text-gray-500">Occasion : Cheer Up</p>
                    </div>
                    <div className="bg-white rounded-xl shadow-sm p-5">
                        <div className="flex items-start gap-4 mb-4">
                            <img src="1.2.jpg" alt="cake" className="w-14 h-14 rounded-md object-cover"/>
                                <p className="text-gray-700 text-sm">
                                    Perfect one for the special day.
                                </p>
                        </div>
                        <h3 className="font-semibold text-gray-900">Mariyappanvinitha
                            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded ml-1">★ 5</span>
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">Posted On : 20th November, 2024</p>
                        <p className="text-sm text-gray-500">City : Mundra</p>
                        <p className="text-sm text-gray-500">Occasion : Cheer Up</p>
                    </div>
                    <div className="bg-white rounded-xl shadow-sm p-5">
                        <div className="flex items-start gap-4 mb-4">
                            <img src="1.3.jpg" alt="cake" className="w-14 h-14 rounded-md object-cover" />
                            <p className="text-gray-700 text-sm">
                                The cake and taste is awesome.. so far it's always been a great experience!
                            </p>
                        </div>
                        <h3 className="font-semibold text-gray-900">Ashwini V
                            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded ml-1">★ 5</span>
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">Posted On : 23rd September, 2024</p>
                        <p className="text-sm text-gray-500">City : Secunderabad</p>
                        <p className="text-sm text-gray-500">Occasion : Birthday</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
