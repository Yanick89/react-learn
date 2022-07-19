function Tag (props) {
    const tag = props.list;
    let item = tag.map(element => 
        <li>
            {element}
        </li>
    )
    return (
        <div className="display-tag">
            <ul>
              {item}
            </ul>
        </div>
    )
}
export default Tag