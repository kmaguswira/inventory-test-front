<template>
    <section class="section">
        <div class="container">
            <header-title-component title="create order" />

            <select-component placeholder="Select a product" :data="products" valueKey="ID" valueTitle="name" @update="form.productId = $event" />
            <text-input-component placeholder="Order Quantity" typeInput="number" @update="form.orderQuantity = $event" />
            <text-input-component placeholder="Base Price" typeInput="number" @update="form.basePrice = $event" />
            <text-input-component placeholder="Invoice" @update="form.invoice = $event" />

            <button class="button" @click="createOrder" :disabled="load">
                Create
            </button>
        </div>
    </section>
</template>

<script>

import HeaderTitleComponent from '../../../components/sections/HeaderTitleComponent'
import TextInputComponent from '../../../components/input/TextInputComponent'
import SelectComponent from '../../../components/input/SelectComponent'
import { crud } from '../../../services/crud.js'
export default {

    components: { HeaderTitleComponent, TextInputComponent, SelectComponent },
    data() {
        return {
            form: {
                productId: null,
                orderQuantity: null,
                basePrice: null,
                invoice: null
            },
            load: false,
            products: null
        }
    },

    created() {
        this.getProducts();
    },

    methods: {
        async getProducts() {
            this.products = await crud.get('product/all?limit=100');
        },

        async createOrder() {
            this.load = true
            this.form.productId = parseInt(this.form.productId);
            this.form.orderQuantity = parseInt(this.form.orderQuantity);
            this.form.basePrice = parseInt(this.form.basePrice);
            try {
                const data = await crud.post('order/create', this.form);
                this.load = false
                alert("success")
            } catch(err) {
                this.load = false
                alert("error")
            }
        },
    }

}
</script>