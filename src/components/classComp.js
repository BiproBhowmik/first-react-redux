import React from "react";

class clasComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: {
                now : 1,
                then : "then",
                
            },
            is : false,
        };
    }

    click = (e, a) => {
        // console.log("Hello World"+a);
        this.setState( {
            is: !this.state.is
          });

          console.log(this.state.is);
    }

    componentDidMount() {
        console.log("Mounted");
          setInterval(
            () => this.tick(),
            1
          );
    }

    tick() {
        this.setState({
          date: {
              now: this.state.date.now*1.1
          }
        });
      }

    componentWillUnmount() {
        console.log("Destroyed");
    }


    render() {
        return (
            <div>
                <button onClick={ (e) => {this.click(e,"5 pm")}} >classComp Click Me</button>
                
                <h1>Hello, Time!</h1>
                <h2>It is {this.state.date.now} .</h2>
                <h2>Then is {this.state.date.then} .</h2>
                <h2>IS is {this.state.is} .</h2>
            </div>
        );
    }

}

export default clasComp