import React from 'react';


class ProductPriceList extends React.Component {
 
  render() {
   const {product,price} =this.props
  
   return (  
              <div style ={{marginTop:"20px"}}>
                      <div class="ui cards">
  <div class="card">
    <div class="content">
      <div class="header">{product}</div> 
      </div> 
      </div> 
    
     <div class="card">
     <div class="content">
       <div class="header">{price} TL</div> 
       </div> 
       </div> 
     
       </div>
     
  </div>
      
    )
  }
}

  
export default ProductPriceList;