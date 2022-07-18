import axios from './axios';

class ProductService {

    PRODUCTS_URL = '/products';

    getAllProducts() {
        return axios.get(
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
        const url = this.PRODUCTS_URL + '/' + product_id;

        return axios.get(
            url,
            { headers: { 'Content-Type': 'application/json' } }
        ).then(function (response) {
            console.log(response)
            return response.data;
        }).catch(function (error) {
            console.log("Product with id " + product_id + " not found");
            console.log(error);
        });
    }

    createProduct(product_name, product_price) {
        return axios.post(
            this.PRODUCTS_URL,
            {
                headers: { 'Content-Type': 'application/json' },
                data:
                {
                    name: product_name,
                    price: product_price
                }

            }
        ).then(function (response) {
            console.log(response)
            return response.data;
        }).catch(function (error) {
            console.log(error);
        });
    }

    updateProduct(product) {
        return axios.put(
            this.PRODUCTS_URL,
            {
                headers: { 'Content-Type': 'application/json' },
                data:
                {
                    product_id: product.product_id,
                    name: product.name,
                    price: product.price
                }

            }
        ).then(function (response) {
            console.log(response)
            return response.data;
        }).catch(function (error) {
            console.log(error);
        });
    }

    deleteProductById(product_id) {
        const url = this.PRODUCTS_URL + '/' + product_id;

        return axios.delete(
            url,
            { headers: { 'Content-Type': 'application/json' } }
        ).then(function (response) {
            console.log(response)
            return response.data;
        }).catch(function (error) {
            console.log("Product with id " + product_id + " not found");
            console.log(error);
        });
    }
}

export default new ProductService();

// documentation found here: https://www.npmjs.com/package/axios