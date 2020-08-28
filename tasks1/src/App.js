  import React, {Component} from 'react';
  import Loader from './Component/Loader/Loader'
  import Table from './Component/Table/Table'
  import _ from 'lodash'

  class App extends Component{

    state = {
      isLoading : true,
      data : [],
      sort : 'asc', 
      sortField : 'id'
    }

    async componentDidMount(){
    const response = await  fetch(`http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`)
    const data = await response.json()

    this.setState ({
      isLoading : false,
      data
    })
    }

    onSort = sortField => {
      const clonedData = this.state.data.concat()
      const sortType = this.state.sort === 'asc' ? 'desc' : 'asc'
      const orderedData = _.orderBy(clonedData, sortField , sortType)

      this.setState ({
        data : orderedData,
        sort : sortType,
        sortField
      })
    }

    render () {
      return(
      <div className="container">
        {
          this.state.isLoading 
          ? <Loader/>
          : <Table
          data = {this.state.data}
          onSort = {this.onSort}
          sort = {this.state.sort}
          sortField = {this.state.sortField}
          />
        }

      </div>
      );
    }
  }

  export default App;
