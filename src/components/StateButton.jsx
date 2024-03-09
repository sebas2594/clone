const StateButton = ({ status }) => {
    let button = [
        {
            "name": "Optimization",
            "color": "bg-yellow-100",
            "font": "text-yellow-600",
            "border" : "border-2 yellow-600"
        }, {
            "name": "New Project",
            "color": "bg-violet-400",
            "font": "text-violet-900",
            "border" : "border-2 violet-900"
        }, {
            "name": "Design",
            "color": "bg-green-500",
            "font": "text-green-900",
            "border" : "border-2 green-900"
        }
    ]

    for(let i = 0; i<=button.length; i++){
        if (status === button[i].name) {
            return (
                <button className={`${button[i].color} rounded-sm p-1 font-semibold ${button[i].font} rounded-xl px-2 ${button[i].border}`}>{status}</button>
    
            );
        }

    }
  


}

export default StateButton;