import Task from "./Task";
const Cards = () =>{
    return(
        <>
        
        <div className="my-8 mx-20">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                <Task/>            
                <Task/>     
                <Task/>            
                <Task/>  
                <Task/>            
                <Task/>     
                <Task/>            
                <Task/>  
                <Task/>            
                <Task/>     
                <Task/>            
                <Task/>  
            </div>
        </div>
        
        </>
    );
}

export default Cards;