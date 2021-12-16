import React from "react";
// import {BrowserRouter as Link} from "react-router-dom";
import { Link } from 'react-router-dom';
const axios = require('axios').default;



export default class clasComp extends React.Component {
    state = {
        userData: [],
        hello: [
            {name: "Joy", age: 25, id: 1},
            {name: "Bipro", age: 27, id: 2},
        ]
    };

    componentDidMount() {
        // this.setState({
        //     userData:[1, 2],
        // })
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response)=> {
                // handle success
                this.setState({
                    userData: response.data,
                })
                console.log(this.state.userData);
            })
            .catch((error)=> {
                // handle error
                console.log(error);
            });
    }

    render() {
        // const listItems = this.state.userData.map((item) =>
        // <li key={item.id}>{item.name}</li>
        // );
        return (
            <div>
                Hello

                <Link to="/classComp">Class Component</Link>
                
                {/* <ul>{listItems}</ul> */}
                {/* {/* {this.state.userData} */}
                {/* <h1>Helv {this.state.userData}</h1> */}
                {/* {this.state.userData.map(home => <div>{home[0]}</div>)} */}
                <ul>
                    {this.state.userData.map((item) =>
                        <li key={item.id}>{item.name}</li>
                    )}
                </ul>
            </div>
        );
    }

}