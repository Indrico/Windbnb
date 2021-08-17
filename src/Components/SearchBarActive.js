const SearchBarActive = () => {
    return (
        <div className="fixed w-screen h-screen inset-0 bg-black bg-opacity-50">
            <div className="bg-white h-1/2">
                <div className="max-w-screen-xl mx-auto p-4">
                    <div className="mt-8 flex justify-between items-center border-gray-300 border-2 rounded-xl shadow">
                        <div className="border-r-2 w-1/3 p-4 pl-8">
                            <p className="font-bold">LOCATION</p>
                            <p name="city">Helsinki, Finland</p>
                        </div>
                        <div className="border-r-2 w-1/3 p-4 pl-8">
                            <p className="font-bold">GUESTS</p>
                            <p name="city">Add guests</p>
                        </div>
                        <div className="w-1/3 p-4 pl-8 flex justify-center">
                            <p className="w-1/3 flex justify-center items-center bg-red-500 text-white rounded-2xl">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 my-3 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                Search
                            </p>
                        </div>
                    </div>
                    
                    {/* List Pilihan */}
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBarActive;