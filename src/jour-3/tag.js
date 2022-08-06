import Inputs from '../jour-4/Inputs'
function Tag (props) {
    const tag = props.list;
    let item = tag.map((element, index) => 
        <li key={index}>
            {element}
        </li>
    )
    return (
        <div className="display-tag">
            <ul>
              {item}
            </ul>
            <div>
                <h3>select element</h3>
                <Inputs list={tag}/>
            </div>
        </div>
    )
}
export default Tag