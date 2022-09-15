

function ShowHeader(props){
    return(
        <header>
            <h1>{props.title}</h1>
            {props.text}
        </header>
    )
}

export default ShowHeader;