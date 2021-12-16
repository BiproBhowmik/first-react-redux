// var initialString = "HEY";

const changeString = (state = "initialString", action)=>{
    if (action.type === "cngStr") {
        return state = action.param;
    }
    else{
        return "initialString"
    }
}

export default changeString