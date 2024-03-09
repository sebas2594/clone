const ProgressBar = () =>{
    return(
        <div className="flex flex-row items-center p-2 gap-2">
            <div className="bg-gray-200 w-1/3 rounded-full h-2.5">
                <div className="bg-green-600 h-2.5 rounded-l-full w-1/2" ></div>
            </div>
            <p className="font-bold text-gray-500">2h 30min</p>
        </div>
    );
}
export default ProgressBar