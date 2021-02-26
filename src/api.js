import React from 'react';
import axios from 'axios'
import DataTable from 'react-data-table-component';


class ApiCall extends React.Component {



    constructor(props) {
        super(props)
        this.state = {

            DataItem: []

        }

    }
    // result=[];

    columns = [
        { name: 'id', selector: 'id', sortable: true, },
        { name: 'title', selector: 'title', sortable: true, right: true, }
    ]
    // data = [
    //     { id: 1, name: 'abhi' },
    //     { id: 2, name: 'ram' },
    //     { id: 3, name: 'sugu' }
    // ]


    updateState = state => {
        this.setState({ selectedRows: state.selectedRows });
    }




    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos/').then(dat => {
            debugger;
            const result = dat.data;
            this.setState({ 'DataItem': result })
        })
    }



    render() {
        return (
            <div>
                <DataTable
                    data={this.state.DataItem}
                    columns={this.columns}
                    onSelectedRowsChange={this.updateState}
                    selectableRows
                />
            </div>


        )
    }
}
export default ApiCall;