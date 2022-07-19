import Tag from "./tag";

function Infos () {
    const tags = ['Redux', 'React Router', 
                'useState', 'Hooks', 'State',
                'Class', 'Component function',
                'Component Class']
    return (
        <div className="side">
            <h3>React tags </h3>
            <Tag list={tags}/>
        </div>
    )
}

export default Infos