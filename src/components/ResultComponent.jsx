import React, { Component } from 'react'
export default class ResultComponent extends Component{
    render(){
        return(
            <div className="result-main-container">
                <i class="fa fa-check-circle" aria-hidden="true"></i>
                <h1 className="result">Result</h1>
                <div className="result-container">
                    <h3>You need more practice!</h3>
                    <h2>Your Score: 20%</h2>
                    <p>Total number of question:<span>15</span></p>
                    <p>Number of attempted question:<span>9</span></p>
                    <p>Number of Correct Answers:<span>3</span></p>
                    <p>Number of Wrong Answers:<span>6</span></p>
                </div>
                <div className="button-container">
                    <button>Play Again</button>
                    <button>Back to Home</button>
                </div>
            </div>
        )
    }
}