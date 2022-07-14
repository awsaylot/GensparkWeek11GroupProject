import axios from './axios';

class ProductService {

    PRODUCTS_URL = '/products';

    getAllProducts() {
        const response = axios.get(
            this.PRODUCTS_URL,
            { headers: { 'Content-Type': 'application/json' } }
        ).then(function (response) {
            console.log(response)
            return response.data;
        }).catch(function (error) {
            console.log(error);
        });
    }

    getProductById(product_id) {
        return axios({
            method: 'get',
            url: `${this.baseURL}/${product_id}`,
            // headers: {
            //     Authorization: `Bearer ${process.env.CLIENT_TOKEN}`
            // }
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    createProduct(product_name, product_price) {
        return axios({
            method: 'post',
            url: `${this.baseURL}`,
            // headers: {
            //     Authorization: `Bearer ${process.env.CLIENT_TOKEN}`
            // },
            data: {
                "name": product_name,
                "price": product_price
            }
        });
    }

    updateProduct(product) {
        return axios({
            method: 'put',
            url: `${this.baseURL}`,
            // headers: {
            //     Authorization: `Bearer ${process.env.CLIENT_TOKEN}`
            // },
            data: {
                "product_id": product.product_id,
                "name": product.name,
                "price": product.price
            }
        });
    }

    deleteProductById(product_id) {
        return axios({
            method: 'delete',
            url: `${this.baseURL}/${product_id}`,
            // headers: {
            //     Authorization: `Bearer ${process.env.CLIENT_TOKEN}`
            // }
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }
}

export default new ProductService();

// documentation found here: https://www.npmjs.com/package/axios