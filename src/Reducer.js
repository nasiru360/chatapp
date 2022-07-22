


  const initialstate={chat:[] }
  
 function projectlistReducer(state=initialstate,action){
     //   console.log("payload",payload)
       switch(action.type){
       case 'CHAT_LIST':
 
       return {...state,chat: action.payload};  
 
       default:
           return state;
 
 
       }
 
 
 };
 
 export default projectlistReducer;