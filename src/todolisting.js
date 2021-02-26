import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Todolisting(props) {

    const [todos, setTodos] = useState()
    const [title] = useState("todo listing")

    useEffect(() => {
        console.log("use effect is triggered")

        axios.get('https://jsonplaceholder.typicode.com/todos/').then(dat => {
            debugger;
            // const result = dat;

            setTodos(dat.data)
            debugger

        })
        return () => {
            debugger
           
            // console.log("todos")
        }
    }, [])


    let deleteChange=(id)=>{
        debugger;
        const res=todos.filter(t=>t.id!==id)
        setTodos(res)
    }


    // alert("todos value is:"+todos)
    return (
        <div>
            <h1>my first funcional component</h1>
            <h2>{title}</h2>
            <div>
                {todos && todos.map((todo) => {
                    debugger;
                    const { id, title } = todo;
                    return (
                        <div>
                            <h3>id is :{id}</h3>
                            <h3>title is :{title}</h3>

                            <input type='button' value='delete' onClick={()=>deleteChange(id)}/>
                        </div>

                    )
                })}

            </div>
        </div>
    )
}
