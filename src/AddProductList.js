import React, { Component } from 'react';
import ProductInput from './ProductInput';
import AddButton from './AddButton';
import ProductPriceList from './ProductPriceList'
import List from '@material-ui/core/List';
import CheckBox from './CheckBox';
import { connect } from 'react-redux'
import { ProductList,AddProduct } from './actions'

class AddProductList extends Component {
  
    state = {
        product: "",
        price: "",
        allchecked:false,
        newChecked:false
        
    }
    componentDidMount() {
        this.props.ProductList()  
    }
   
    ProductAddInput = (e) => {
        this.setState({
            product: e.target.value
        })
    }
    PricetAddInput = (e) => {
        this.setState({
            [e.target.price]: e.target.value
        })

        const re = /[^0-9.,\s]|\s+$/gi;


        let str = e.target.value;
        str = str.replace(re, '');
        this.setState({
            price: str,
        })
    }
  
    Confirmation = (e) => {
        this.setState({
            newChecked: !this.state.newChecked
        })
        
        this.props.productList.forEach((item) => {
          if(this.state.newChecked === true) {
              item.checked = false
            }
            if(this.state.newChecked === false) {
                item.checked = true
              }
        });
         
    }
    Confirmation1 = (id,checked) => {
             var product = this.props.productList.find((item) => {
                 return item.id === id
             })
             product.checked = !checked
             this.setState({
               allchecked: product.checked
             })
            }
    
    
    GetButton = (e) => {
        e.preventDefault();
        let list = [];
        if (this.state.newChecked) {
            this.props.productList.forEach((item) => {
                list.push(item);
            });

            this.setState({
                newProductList: list,
                products:[]
            })
        }
        else{
            this.props.productList.find((item) => {
                if(item.checked === true
                    ){
                    list.push(item);
                }      
            }     
             );
            this.setState({
                newProductList: list,
                products:[]
            })
        }
    }
        render() {
           const { product, price } = this.state
            return (
                                <div>
                                    <div>
                                        <div className="col-md-8 mb-4">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h1 style={{ textAlign: "center" }}> ALIŞVERİŞ  LİSTESİ </h1>
                                                    <form>
                                                        <label>Ürün </label>
                                                        <ProductInput
                                                            type="text"
                                                            name="product"
                                                            value={product}
                                                            placeHolder="Ürün İsmini giriniz"
                                                            className="form-control"
                                                            onChange={this.ProductAddInput}
                                                        />
                                                        <label>Ürün Fiyatı</label>
                                                        <ProductInput
                                                            type="text"
                                                            name="price"
                                                            value={price}
                                                            placeHolder="Ürün Fiyatını giriniz"
                                                            className="form-control"
                                                            onChange={this.PricetAddInput}
                                                        />
                                                        <br />
                                                        <AddButton
                                                            className="btn btn-danger btn-block"
                                                            type="submit"
                                                            name="Ürün Ekle"
                                                            onClick={() => {
                                                            this.props.AddProduct(product,price,this.props.productList)
                                                            }}
                                                        />
                                                       
                                                    </form>

                                                </div>
                                            </div>
                                        </div>

                                      <List>
                                            <div className="col-md-8 mb-4">
                                                <h2>EKLENEN ÜRÜNLER</h2>
                                                <CheckBox
                                                    type="checkbox"
                                                    name="example"
                                                    label="Tümünü Seç"
                                                    onClick={this.Confirmation}
                                                    checked={this.state.newChecked}
                                                />
                                                <ul class="list-group">
                                                    <li class="list-group-item">
                                                       <div> 
                                                           <div style={{marginLeft:"40px"}}>
                                                                  ÜRÜN 
                                                           </div>
                                                      <div style={{marginLeft:"340px",marginTop:"-20px"}} >
                                                          FİYAT
                                                          </div>       
                                                    
                                                       </div>
                                                       <hr />
                                                        {this.props.productList &&this.props.productList.length>0 &&
                                                            this.props.productList.map(item => {
                                                                return (
                                                                  <div style={{}}>
                                                                  <div style={{marginLeft:"30px"}}>
                                                                    <ProductPriceList 
                                                                        product={item.product}
                                                                        price={item.price}
                                                                        selection={this.state.allchecked}
                                                                        checked = {item.checked}
                                                                    /></div>
                                                                    <div style={{marginTop:"-50px"}}>
                                                                    <CheckBox
                                                                type="checkbox"
                                                                name="example"
                                                                label=""
                                                                onClick = {() => this.Confirmation1(item.id,item.checked)}
                                                                checked = {item.checked}
                                                              /></div>
                                                                   </div>
                                                                )
                                                            })
                                                        }
                                                    </li>
                                                </ul>
                                            </div>
                                            <br />
                                            <AddButton
                                                name="Seçilen Ürünleri Listeye Ekle"
                                                className="btn btn-primary"
                                                style={{ marginLeft: "350px" }}
                                                onClick={this.GetButton}
                                            />
                                            <br />
                                            <br />
                                            <div className="col-md-8 mb-4">
                                                <h2>SEÇİLEN ÜRÜNLER</h2>
                                                <ul class="list-group">
                                                    <li class="list-group-item">
                                                    <div> 
                                                           <div style={{marginLeft:"20px"}}>
                                                           ÜRÜN 
                                                           </div>
                                                      <div style={{marginLeft:"310px",marginTop:"-20px"}} >
                                                           FİYAT
                                                          </div>       
                                                    
                                                       </div>
                                                       <hr />
                                                      {this.state.newProductList &&
                                                            this.state.newProductList.map(item => {
                                                                return (

                                                                    <ProductPriceList
                                                                        product={item.product}
                                                                        price={item.price}
                                                                        selection={this.state.allchecked}
                                                                     
                                                                    />    
                                                                )
                                                            })
                                                        }
                                                     </li> </ul> </div>
                                        </List>

                                    </div>
                                </div>
                            )
                        }
                    }
             
const mapStateToProps = (state) => {
   
    return {
        productList:state.productList
                        }
                    }
    
export default connect(mapStateToProps,{ProductList,AddProduct}) (AddProductList);