import ClassComp from './classComp.js'
// import { useSelector, useDispatch } from "react-redux";

function Hello(props) {
    // console.log(props);
    // const myState = useSelector((state) => {
    //     return state.changeNumber
    //   });
    return (
        <div>
            {/* {myState} */}
            { props.age && props.name &&
                <div> 
                    <h3>Age is {sum(props.age, props.increment)} </h3>
                    <h1>From Hello Component and props is {props.name}</h1>
                </div>
            }

            <ClassComp time="1:30 PM" />
        </div>
        

    );

}

let sum = (a, b)=> {

    return (a + b);

}

export default Hello