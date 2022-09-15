function Subject(props){
  console.log("subject render");
    return( //JSX는 최상위태그가 항상 하나만 있어야 함
      <header>
        <h1>
          <a href = '/pure.html' onClick = {function(e){
          e.preventDefault();
          alert("subjEvent");
          props.setMode("read")
          }
        }>{props.title}
        hello
        </a>
        </h1>
        {props.subTitle}
        <button onClick = {props.onClick}>
          OK
        </button>
      </header>
    );
  }

export default Subject;