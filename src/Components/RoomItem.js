const RoomItem = ({ data }) => {
    return (
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3">
            {data.slice(0, 6).map((item, index) => (
                <div key={index}>
                    <img src={item.photo} alt={item.title} className="rounded-xl h-80 sm:h-64 w-full object-cover mb-3" />
                    <div className="flex items-center justify-between">
                        {item.superHost && <span className="border-2 p-1 rounded-xl border-gray-400 font-semibold text-sm tracking-wide">Super Host</span>}
                        <p className="text-gray-600">{item.type}</p>
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            {item.rating}
                        </p>
                    </div>
                </div>
            )
            )}
        </div>
    )
}

export default RoomItem