export const incNum = (num)=>{
    return {
        type: "INREMENT",
        param: num,
    }
}
export const decNum = ()=>{
    return {
        type: "DECREMENT"
    }
}

export const changeTheString = (str)=>{
    return {
        type: "cngStr",
        param: str
    }
}