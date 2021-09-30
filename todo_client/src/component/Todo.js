import React, { Component } from "react";



class TodoComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todos : [
                {id: 1, description: 'Learn React', done: false, targetDate: new Date()},
                {id: 2, description: 'Learn Java', done: false, targetDate: new Date()},
                {id: 3, description: 'Learn how to learn', done: false, targetDate: new Date()}
            ]
        }
    }

    render() {
        return <div>
            <h1>List Todos</h1>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>descripstion</th>
                            <th>done</th>
                            <th>target date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todo => 
                                <tr>
                                    <th>{todo.description}</th>
                                    <th>{todo.done.toString()}</th>
                                    <th>{todo.targetDate.toString()}</th>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            
        </div>
    }
}

export default TodoComponent;