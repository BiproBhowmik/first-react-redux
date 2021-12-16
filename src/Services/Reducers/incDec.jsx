const initialState = 0;

const inDec = (state = initialState, action)=>{
    if (action.type === "INREMENT") {
        return state + action.param;
    }
    else if (action.type === "DECREMENT") {
        return state - 1;
    }
    else{
        return initialState
    }
}

export default inDec