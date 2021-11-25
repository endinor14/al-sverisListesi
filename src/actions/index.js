import axios from 'axios';



export const AddProduct = (product, price, productList) =>
    async (dispatch) => {

        console.log("a", ProductList);
        if (!product) alert("Lütfen Ürün İsmini Giriniz")
        else if (product && !price) alert("Lütfen Ürün Fiyatını Giriniz")
        else if (price === "0") alert("Ürün fiyat kısmına 0 değer girilemez")

        else if (productList.length < 15) {
            const newProduct = {
                product,
                price
            }
            console.log(newProduct)
            const response = await axios.post('http://localhost:3004/Products', newProduct)
            console.log(newProduct)
       /*     dispatch({
                type: 'PRODUCT_LIST', payload: response.data
            })*/
        }
        else {
            alert("En fazla 15 ürün ekleyebilirsiniz")
        }
    }

export const ProductList = () =>
    async (dispatch) => {
        const response = await axios.get('http://localhost:3004/Products')
        dispatch({
            type: 'PRODUCT_LIST', payload: response.data
        })
    }

