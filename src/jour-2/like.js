import { useState } from "react"

function Like (props){
    const [counter, setCounter] = useState(0)
    const handlerCounter = () =>{
        setCounter(counter + 1)
    }

    return (
        <div className="btn-aime">
            <h2>Laisse un coeur si t'as aimer </h2>
            <button onClick={handlerCounter}>❤️</button>
            {counter}
        </div>
    )
}

export default Like