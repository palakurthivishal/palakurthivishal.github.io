const mainReducer= (state={},action)=>{
    switch(action.type) {
        case "FETCH_PROFILE_DATA_SUCCESS":
            return Object.assign({},state, {profileData:action.payload}); 
            break;
    }
    return state;
}

export default mainReducer;