import axios from "axios";

class ProductService {

    instance = axios.create({
        baseURL: "http://localhost:8080/api",
        headers: {
            "Content-type": "application/json"
        }
    });

    getAllProducts() {
        return axios({
            method: 'get',
            url: `api/products`,
            // headers: {
            //     Authorization: `Bearer ${process.env.CLIENT_TOKEN}`
            // }
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    getProductById(product_id) {
        return axios({
            method: 'get',
            url: `api/products/${product_id}`,
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
            url: `api/products`,
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
            url: `api/products`,
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
            url: `api/products/${product_id}`,
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


// documentation found here: https://www.npmjs.com/package/axios