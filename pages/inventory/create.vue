<template>
    <section class="section">
        <div class="container">
            <header-title-component title="create product" />

            <text-input-component placeholder="Name" @update="form.name = $event" />
            <text-input-component placeholder="Quantity" typeInput="number" @update="form.quantity = $event" />
            <text-input-component placeholder="SKU" @update="form.sku = $event" />

            <button class="button" @click="createProduct">
                Create
            </button>
        </div>
    </section>
</template>

<script>

import HeaderTitleComponent from '../../components/sections/HeaderTitleComponent'
import TextInputComponent from '../../components/input/TextInputComponent'
import { crud } from '../../services/crud.js'
export default {

    components: { HeaderTitleComponent, TextInputComponent },
    data() {
        return {
            form: {
                name: null,
                quantity: null,
                sku: null
            }
        }
    },

    methods: {
        async createProduct() {
            this.form.quantity = parseInt(this.form.quantity);
            const data = await crud.post('product/create', this.form);
            console.log("data", data)
        },
    }

}
</script>