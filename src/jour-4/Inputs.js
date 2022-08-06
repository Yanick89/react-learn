// import { useState } from "react"

function Inputs (props){
    const users = {
      firstName: 'MOUSSAVOU KOUMBA',
      lastName: 'allen',
      age: 25,
      adress: '45e Rue de plein-ciel'
  };
    let item = '';
    let items;
    items = Object.values(users).map((value, index) => {
      return <option key={index} value={value}>
        {value}
      </option>
    })
    function handle(event){      
      item = event.target.value
      console.log(item);
    }
    return (
        <div>
          <select  onChange={handle.bind()}>
            {items}
          </select>
          <div> {item}  selectionné</div>
        </div>
    )
}
export default Inputs