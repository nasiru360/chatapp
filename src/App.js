import './App.css';
import {useState,useEffect} from 'react';
import { useSelector,useDispatch } from "react-redux";
import setAction from './Action'
import imgj from './image/person1.png'


function App() {
  //localStorage.clear()
  const jabi=localStorage.getItem("user");
  // alert(jabi)
  const projectlist=useSelector((state)=>state.chat);
  const chathistory={}
  const [uname,setUname]=useState("")
  const [message,setMessage]=useState("")
  const [history,setHistory]=useState([])
  const [checker,setChecker]=useState(0)
  const [namec,setNamec]=useState("")

    


  function savename(){
     // alert(uname)
    localStorage.setItem("user",uname)
    setChecker(1)
  // const kas=chatmi:"as"
   //JSON.parse(kas);
    //localStorage.setItem("mychart","Emty chart")
  }
  const dispatch=useDispatch();  
  function sendmessage(){

  setChecker(1)
 // setMessage(message)
 
 var name1=localStorage.getItem("user")
 //setNamec(name1)
 setNamec(name1)
 //console.log("loka",name1)
  
 
  const ras={name:name1,newmessage:message}


  kids.push(ras);
     localStorage.setItem("mylocalstorage",JSON.stringify(ras))
   //  localStorage.setItem("mylocalstorage",ras)
  dispatch(setAction(kids))
 
  }
  //console.log(localStorage.mychart)
//contains()

 

   
useEffect(()=>{

  // projectlist.map((dis)=>(
  //   console.log("Record",dis)
  //  ))
  setHistory(projectlist)
 console.log("bili", history)
 setChecker(0)
},[checker,uname])



  return (
    <div className="App" style={{ backgroundColor: 'lightblue', width:'410px', height: 410,
    overflow: 'scroll',  position: 'fixed',bottom:0}}>

<table align='center' >
<tr><td><b>Message</b></td></tr>
{history!=null ? <div >
    {history.map((kii,index)=>(
 
   <tr><td><b><img src={imgj}  style={{width:'50px', height:'50px'}}/></b><>{kii.newmessage}</></td></tr>   
    ))}</div> : ""  
}

{/* ewef */}
   <tr><td style={{ position: 'fixed',bottom:0}}>  {jabi==null ? <>Input your name:<input type='text'   onChange={(e)=> setUname(e.target.value)}  /> 
      
      <button onClick={savename}>Save</button>
       </> : <>


       <input type='text'  style={{height:'50px', width:'250px'}}  onChange={(e)=> setMessage(e.target.value)}  /> 
      
      <button onClick={sendmessage}>Send</button>
    
       </>}
       </td>
</tr> 
       </table>
     </div>
  );
}

export default App;
var kids = []