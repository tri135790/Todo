import React, { Component } from "react";



class TodoComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todos : [
                {id: 1, description: 'Learn React'},
                {id: 2, description: 'Learn Java'},
                {id: 3, description: 'Learn how to learn'}
            ]
        }
    }

    render() {
        return <div>
            <h1>List Todos</h1>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>descripstion</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.todos.map(
                            todo => 
                            <tr>
                                <th>{todo.id}</th>
                                <th>{todo.description}</th>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    }
}

export default TodoComponent;