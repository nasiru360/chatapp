import './App.css';
import * as React from 'react';
import { useSelector,useDispatch } from "react-redux";
import setAction from './Action'


function App() {
//  localStorage.clear()
  const jabi=localStorage.getItem("user");
  // alert(jabi)
  const projectlist=useSelector((state)=>state.chat);
  const chathistory={}
  const [uname,setUname]=React.useState("")
  const [message,setMessage]=React.useState("")
  const [history,setHistory]=React.useState([])

    


  function savename(){
     // alert(uname)
    localStorage.setItem("user",uname)

   
  // const kas=chatmi:"as"
   //JSON.parse(kas);
    //localStorage.setItem("mychart","Emty chart")
  }
  const dispatch=useDispatch();  
  function sendmessage(){
  // alert(message)



  // setMessage ( prevState =>{
  //   return {
  //     message
  // }
  // })

  setMessage(message)
 
  
 
  const ras={newmessage:message}
  


  

  
  kids.push(ras);
  
  dispatch(setAction(kids))
   

      
  console.log("kid:",kids)
//  localStorage.setItem("mychart",JSON.stringify(kids))

//setMessage("")
 // console.log(projectlist)
  }
  //console.log(localStorage.mychart)


  const drecord=JSON.parse(localStorage.getItem("mychart"))
//  setHistory(drecord)
 //console.log("lll",drecord )

 

   
React.useEffect(()=>{

  // projectlist.map((dis)=>(
  //   console.log("Record",dis)
  //  ))
  setHistory(projectlist)
 console.log("bili", projectlist)
 
},[message])



  return (
    <div className="App">

      {jabi==null ? <>Input your name:<input type='text'   onChange={(e)=> setUname(e.target.value)}  /> 
      
      <button onClick={savename}>Save</button>
       </> : <>


       <input type='text'   onChange={(e)=> setMessage(e.target.value)}  /> 
      
      <button onClick={sendmessage}>Send message</button>
    
       </>}

     </div>
  );
}

export default App;
var kids = []