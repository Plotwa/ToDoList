import { bindActionCreators } from "redux"

const CREATE_TASK = 'CREATE_TASK'
const UPDATE_TASK = 'UPDATE_TASK'
const DELETE_TASK = 'DELETE_TASK'
let initialState ={
    title: '',
    id: 0,
    tasks:[{id:0,
            title:'Век одиночетсва'}]
}

const appReducer = (state=initialState,action) =>{
    switch(action.type){
        case CREATE_TASK:{
            let newTask ={
                id: state.id++,
                title: action.newTitle
            }
            return {
                ...state,tasks:[...state.tasks, newTask],
            
            }
        }
        case UPDATE_TASK:{
            return state
        }
        case DELETE_TASK:{
            return state
        }
        default:return state
    }
}
export const createTaskActionCreator= (newTitle) => ({
    type: CREATE_TASK, newTitle
 })
export default appReducer