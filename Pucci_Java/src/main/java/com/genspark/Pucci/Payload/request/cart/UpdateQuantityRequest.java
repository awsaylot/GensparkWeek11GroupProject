package com.genspark.Pucci.Payload.request.cart;

import javax.validation.constraints.NotBlank;

public class UpdateQuantityRequest {
    @NotBlank
    private String product_id;

    @NotBlank
    private String quantity;

    public String getProduct_id() {
        return product_id;
    }

    public void setProduct_id(String product_id) {
        this.product_id = product_id;
    }

    public String getQuantity() {
        return quantity;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }
}
