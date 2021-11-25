import React, { Component } from 'react';
import AddProductList from './AddProductList';


 class App extends Component {
  render() {
    return (
      <div className="Container">
        <AddProductList /> 
        <div style={{marginTop:"20px"}}>
    
        </div>
      </div>
    )
  }
}
export default App;