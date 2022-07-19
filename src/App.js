import './App.css';
import {useState,useEffect} from 'react';
import { useSelector,useDispatch } from "react-redux";
import setAction from './Action'


function App() {
//  localStorage.clear()
  const jabi=localStorage.getItem("user");
  // alert(jabi)
  const projectlist=useSelector((state)=>state.chat);
  const chathistory={}
  const [uname,setUname]=useState("")
  const [message,setMessage]=useState("")
  const [history,setHistory]=useState([])
  const [checker,setChecker]=useState(0)

    


  function savename(){
     // alert(uname)
    localStorage.setItem("user",uname)

   
  // const kas=chatmi:"as"
   //JSON.parse(kas);
    //localStorage.setItem("mychart","Emty chart")
  }
  const dispatch=useDispatch();  
  function sendmessage(){

  setChecker(1)
  setMessage(message)
 
  
 
  const ras={newmessage:message}
  

  kids.push(ras);
  
  dispatch(setAction(kids))
 
  }
  //console.log(localStorage.mychart)



 

   
useEffect(()=>{

  // projectlist.map((dis)=>(
  //   console.log("Record",dis)
  //  ))
  setHistory(projectlist)
 console.log("bili", history)
 
},[checker])



  return (
    <div className="App">

<table>
<tr><td><b>S/no</b></td><td><b>Message</b></td></tr>
{history!=null ? <>
    {history.map((kii,index)=>(

   <tr><td>{index  + 1}</td><td><>{kii.newmessage}</></td></tr>   
    ))}</> : ""
}


   <tr><td></td><td>  {jabi==null ? <>Input your name:<input type='text'   onChange={(e)=> setUname(e.target.value)}  /> 
      
      <button onClick={savename}>Save</button>
       </> : <>


       <input type='text'   onChange={(e)=> setMessage(e.target.value)}  /> 
      
      <button onClick={sendmessage}>Send message</button>
    
       </>}
       </td>
</tr> 
       </table>
     </div>
  );
}

export default App;
var kids = []