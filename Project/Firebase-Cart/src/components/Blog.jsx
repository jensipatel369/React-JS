import React from 'react'

export default function Blog() {
    return (
        <div className="bg-white text-gray-800 font-sans">
            <div className="bg-gray-50 py-12">
                <div className="px-30">
                    <h2 className="text-2xl font-bold mb-8">Related Blog Reads</h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className='bg-white p-5 rounded-2xl border-gray-200 shadow-sm'>
                            <h3 className="text-lg font-semibold mb-2">
                                Top 10 Best-Selling Cakes in Mumbai That Are Always in Demand
                            </h3>
                            <p className="text-gray-600 mb-3">
                                Mumbai is a city of dreams, drama, and a never-ending appetite for celebration. Whether it's birthdays in Bandra, anniversaries in Andheri, or a sweet-tooth craving in Colaba...
                            </p>
                            <a href="#" className="text-teal-600 hover:underline">Read More...</a>
                        </div>
                        <div className='bg-white p-5 rounded-2xl border-gray-200 shadow-sm'>
                            <h3 className="text-lg font-semibold mb-2">
                                10 Irresistible Chocolate Cake Recipes to Satisfy Every Craving
                            </h3>
                            <p className="text-gray-600 mb-3">
                                Chocolate cake is the ultimate comfort food, the dessert that no one can resist. Whether it's for a special occasion or just to satisfy your sweet tooth...
                            </p>
                            <a href="#" className="text-teal-600 hover:underline">Read More...</a>
                        </div>
                        <div className='bg-white p-5 rounded-2xl border-gray-200 shadow-sm'>
                            <h3 className="text-lg font-semibold mb-2">
                                Noida’s Best Bakery Supplies: Top 5 Baking Suppliers You Can’t Miss!
                            </h3>
                            <p className="text-gray-600 mb-3">
                                Whether you're a home baker perfecting your craft or a professional, finding high-quality baking ingredients and tools is essential. From premium chocolates to professional cake...
                            </p>
                            <a href="#" className="text-teal-600 hover:underline">Read More...</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
