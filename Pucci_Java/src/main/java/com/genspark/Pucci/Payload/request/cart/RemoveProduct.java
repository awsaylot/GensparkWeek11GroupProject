package com.genspark.Pucci.Payload.request.cart;

import javax.validation.constraints.NotBlank;

public class RemoveProduct {
    @NotBlank
    private String product_id;

    public String getProduct_id() {
        return product_id;
    }

    public void setProduct_id(String product_id) {
        this.product_id = product_id;
    }
}
