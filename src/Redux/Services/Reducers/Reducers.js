const initialState={
    userDetails:[]
}

export default function addUser(state=[],action){
    switch (action.type) {
        case 'ADD_USER':
            console.log(action)
            return[
                ...state,
                {userDetails:action.userData}
            ]
            
           
            
        default:
             return state
            
            
    
    } 
}