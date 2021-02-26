import React from 'react';
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Checkbox from '@material-ui/core/Checkbox';

import DataTable from 'react-data-table-component';
// import { ReactSearchAutocomplete } from 'react-search-autocomplete'

class Profile extends React.Component {



    constructor(props) {
        super(props)
        this.state = {

            DataItem: [],
            A: []

        }
    }
    columns = [
        { name: 'id', selector: 'id', sortable: true, },
        { name: 'title', selector: 'title', sortable: true, right: true, }
    ]
    temp = []

    // getOptionLabel=[]
    // result=[];

    // top100Films = [
    //     { title: 'The Shawshank Redemption', year: 1994 },
    //     { title: 'The Godfather', year: 1972 },
    //     { title: 'The Godfather: Part II', year: 1974 },
    //     { title: 'The Dark Knight', year: 2008 },]






    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos/').then(dat => {
            debugger;
            let result = dat.data;
            this.setState({ 'DataItem': result })
            debugger;
        })
    }



    render() {


        
        return (
            <div>
                 <Autocomplete
                    id="combo-box-demo"
                    options={this.state.DataItem}
                    getOptionLabel={(option) => (option.id.toString())}



                    // renderOption={(option, { selected }) => (
                    //     <React.Fragment>
                    //       <Checkbox
                    //         icon={this.icon}
                    //         checkedIcon={this.checkedIcon}
                    //         style={{ marginRight: 8 }}
                    //         checked={selected}
                    //       />
                    //       {option.id}
                    //     </React.Fragment>
                    //   )}


                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                />

                {/* <DataTable
                    data={this.state.DataItem}
                    columns={this.columns}
                    onSelectedRowsChange={this.updateState}
                    selectableRows
                /> */}
               
            </div>


        )
    }
}
export default Profile;



                    //  this.setState({ 'temp': this.temp.filter(element => (element.title == option.title)) })
                    //  this.setState({'A':this.temp})


                    // getOptionSelected={(option, value) =>option.title === value.title}
                    // {this.setState({'DataItem':this.DataItem.filter(option.id===value.id)}})
                        // 
                    // getOptionSelected={(option)=> option}

                    // this.temp.push(option)

                    // // this.setState({'temp':option.title}
                    // // this.setState({'temp':this.temp.filter(item=>item.title==option.title)})