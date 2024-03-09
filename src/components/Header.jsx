const Header =() =>{
    return (
        <div className="flex justify-between p-8">
            <h1 className="text-4xl font-bold">Task Board</h1>
            <button className="bg-sky-500 p-2 text-white rounded-lg font-bold hover:bg-blue-700">Show Backlog</button>
        </div>
    );
}
export default Header;