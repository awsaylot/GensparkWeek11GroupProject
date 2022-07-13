import axios from "axios";

class OrderService {
    
    instance = axios.create({
        baseURL: "http://localhost:8080/api",
        headers: {
            "Content-type": "application/json"
        }
    });

    getAllOrders() {
        return axios({
            method: 'get',
            url: `/orders`,
            // headers: {
            //     Authorization: `Bearer ${process.env.CLIENT_TOKEN}`
            // }
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    };

    getOrderById(order_id) {
        return axios({
            method: 'get',
            url: `/orders/${order_id}`,
            // headers: {
            //     Authorization: `Bearer ${process.env.CLIENT_TOKEN}`
            // }
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    };

    createOrder(purchase_list, purchase_total) {
        return axios({
            method: 'post',
            url: `/orders`,
            // headers: {
            //     Authorization: `Bearer ${process.env.CLIENT_TOKEN}`
            // },
            data: {
                "purchase_list": purchase_list,
                "purchase_total": purchase_total
            }
        });
    }

    updateOrder(order) {
        return axios({
            method: 'put',
            url: `/orders`,
            // headers: {
            //     Authorization: `Bearer ${process.env.CLIENT_TOKEN}`
            // },
            data: {
                "order_id": order.order_id,
                "purchase_list": order.purchase_list,
                "purchase_total": order.purchase_total
            }
        });
    };

    deleteOrderById(order_id) {
        return axios({
            method: 'delete',
            url: `/orders/${order_id}`,
            // headers: {
            //     Authorization: `Bearer ${process.env.CLIENT_TOKEN}`
            // }
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    };
}


// documentation found here: https://www.npmjs.com/package/axios
// if this doesn't work, use http-common. can also try removing quotes around the data
// code found here https://www.bezkoder.com/react-spring-boot-crud/#:~:text=Architecture%20of%20Spring%20Boot%20React%20CRUD%20example%20This,Responses%20using%20axios%2C%20shows%20data%20on%20the%20components.

// import http from "../http-common";
// class TutorialDataService {
//   getAll() {
//     return http.get("/tutorials");
//   }
//   get(id) {
//     return http.get(`/tutorials/${id}`);
//   }
//   create(data) {
//     return http.post("/tutorials", data);
//   }
//   update(id, data) {
//     return http.put(`/tutorials/${id}`, data);
//   }
//   delete(id) {
//     return http.delete(`/tutorials/${id}`);
//   }
//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }
//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
// }
// export default new TutorialDataService();