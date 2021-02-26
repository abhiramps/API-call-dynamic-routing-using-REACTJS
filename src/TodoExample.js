import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function TodoExample(props) {

    const [todos, setTodos] = useState()
    const [eid, setId] = useState()
    const [Data, setdata] = useState()


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


    // let deleteChange = (id) => {
    //     debugger;
    //     const res = todos.filter(t => t.id !== id)
    //     setTodos(res)
    // }

    console.log(eid)


    let handleSubmit = () => {
        debugger;
       let obj= {
            title: todos.title,
            body: todos.body,
            userId: todos.userId,
          }
          todos.id.filter((todo) => {
              if(todo.id==eid){

                return{
                    obj
                }
              }
            })

        setdata(obj)
    }

    // {
    //     todos && todos.filter((todo) => {todo.id==eid
    //         debugger;
    //         const { id, title } = todo;
          

    
    //     })
    // }


    // alert("todos value is:"+todos)
    return (
        <div>
            <div>

                <input type='text' placeholder='enter id' onChange={event => setId(event.target.value)}></input>
                <input type='button' value='submit' onClick={() => handleSubmit()}></input>


                {/* <h3>id is :{Data.title}</h3>  */}
                 {/* <h3>title is :{data.title}</h3> */}


            </div>
        </div>
    )
}

