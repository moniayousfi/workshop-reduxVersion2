const initialState={
    todos:[
        {
            id:1,
            description:"desc",
            isDone:false
        }
    ],
    searchword:''
}

export const reducer=(state=initialState
    ,action)=>{
    switch(action.type){
        case 'ADD_TODO':
    return{...state,todos:[...state.todos,action.payload]}
       
           
    default:
            return state;
        }
}