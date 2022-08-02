import { useState } from "react"

function Like (){
    const [counter, setCounter] = useState(0);
    const handlerCounter = () =>{
        setCounter(counter + 1)
    }
    return (
        <div className="btn-aime">
            <h2>Laisse un coeur si t'as aimé </h2>
            <button onClick={handlerCounter}>❤️</button>
            <span>{counter}</span>
            { counter > 9 &&
                <span>
                    k
                </span>
            }
        </div>
    )
}

export default Like