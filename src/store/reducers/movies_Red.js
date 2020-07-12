export default function(state = {
    MID: {}
}, action) {
    switch (action.type) {
        case 'MOVIEID':   
        console.log(action.obj)    
            return {
                ...state,
                MID: action.obj
            }        
        default:
            return state
    }
}