import RoomItem from "./RoomItem";

const ListRoom = ({data}) => {
    return(
        <div className="p-4 max-w-screen-xl m-auto">
            <div className="flex justify-between items-center mb-6">
                <h2 className="font-bold text-xl">Stays in Finland</h2>
                {data.length ? <p>{data.length > 12 ? "12+" : data.length} stays</p> : 'Not Found'}
            </div>
            <RoomItem data={data}/>
        </div>
    )
}

export default ListRoom;