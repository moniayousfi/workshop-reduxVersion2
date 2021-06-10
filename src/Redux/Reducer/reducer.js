const initialState={
    todos:[
        {
            id:1,
            description:"desc",
            isDone:false
        }
    ],
   
}

export const reducer=(state=initialState
    ,{type,payload})=>{
    switch(type){
        case 'ADD_TODO':
    return{...state,todos:[...state.todos,payload]}
       case 'DELETE_TODO':
    return {...state,todos:state.todos.filter(el=>el.id !== payload)}
        case 'EDIT_TODO':
    return{...state,todos:state.todos.map(el=>el.id == payload.id
        ? {...el ,description :payload.text} : el)
   }
    default:
            return state;
        }
}