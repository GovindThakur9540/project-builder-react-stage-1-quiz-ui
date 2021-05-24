import React, { Component } from 'react'

export default class QuizComponent extends Component{
    render(){
        return(
            <div className="main-container">
                <div className="quiz-container">
                    <h1>Question</h1>
                    <div className="question-container">
                        <h4>4 of 15</h4>
                        <h3>Which is the only mammal that can't jump?</h3>
                    </div>
                    <div className="options">
                        <button>Dog</button>
                        <button>Goat</button>
                        <button>Elephant</button>
                        <button>Lion</button>
                    </div>
                    <div className="buttons">
                        <button>Previous</button>
                        <button>Next</button>
                        <button>Quit</button>
                    </div>
                </div>
            </div>
        )
    }
}