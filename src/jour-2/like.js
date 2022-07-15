import { useState } from "react"

function Like (){
    const [counter, setCounter] = useState(0)
    const handlerCounter = () =>{
        setCounter(counter + 1)
    }

    return (
        <div className="btn-aime">
            <button onClick={handlerCounter}>🤙</button>
            {counter}
        </div>
    )
}

export default Like