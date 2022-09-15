import './App.css';
import ShowHeader from './components/Header';
import Subject from './components/Subject';
import Content from './components/Content';
import TableOfContent from './components/TableOfContents';
import {useState} from 'react';

function App() {
  const [mode, setMode] = useState("welcome")
  const [welcome, setWelcome] = useState({
    title:"welcome",
    desc:"hello React"
  })

  const [title,setTitle] = useState("welcome");
  const [subTitle, setSubTitle] = useState("Start test");
  const [contents, setContents] = useState([
    {id:0, title: 'html', desc: "this is HTML"},
    {id:1, title:'css', desc:'this is css'},
    {id:2, title:'JS',desc:'this is js'},
    {id:3, title:'Nodejs', desc:'this is nodeJS'}
  ]);
  const [selectedItem, setSelectedItem] = useState(0)

  var _title,_desc = null;
  if(mode === "welcome"){
    _title = welcome.title
    _desc = welcome.desc
  }else if(mode==='read'){
    _title = contents[selectedItem].title
    _desc = contents[selectedItem].desc
  }

  const onClick = function(){
    alert("onclickEvent")
    setMode('welcome')
  }
 
  const onChangePage = () =>{setMode('read')}

  return (
    <div className="App">
      <Subject data = {title} subTitle = {subTitle} setMode = {setMode} onClick = {onClick}></Subject>
      {/* <ShowHeader title = {title} text = {subTitle}></ShowHeader> */}
      <TableOfContent data= {contents} setSelectedItem = {setSelectedItem} onChangePage={onChangePage}> </TableOfContent>
      <Content title = {_title} text={_desc}></Content>
    </div>
  );
}



export default App;
