export const addTask =(payload)=>
{
    return  {
    type:'ADD_TODO',
    payload
}
}

export const deleteTask =(payload)=>
{
    return  {
    type:'DELETE_TODO',
    payload
}
}
export const editTask =(id,text)=>
{
    return  {
    type:'EDIT_TODO',
    payload: {id,text}
}
}
export const ISDONE =(payload)=>
{
    return  {
    type:'IS_COMPLETED',
    payload
}
}