import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import axios from 'axios'





export default function ControllableStates() {



    var options = ['Option 1', 'Option 2'];
    const [DataItem, setDataItem] = useState()
    var [value, setValue] = useState();
    var [inputValue, setInputValue] =useState('');

   

    useEffect(() => {
        console.log("use effect is triggered")

       
        return () => {
            debugger
           
            // console.log("todos")
        }
    }, [])

    axios.get('https://jsonplaceholder.typicode.com/todos/').then(dat => {
        debugger;
        // const result = dat;

        setValue(dat.data)
        debugger

    })
   

    return (
        <div>

            <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                    debugger;
                    setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    debugger
                    setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={options}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Controllable" variant="outlined" />}
            />
        </div>
    );
}