<template>
    <section class="section">
        <div class="container">
            <header-title-component title="create product" />

            <text-input-component placeholder="Name" @update="form.name = $event" />
            <text-input-component placeholder="Quantity" typeInput="number" @update="form.quantity = $event" />
            <text-input-component placeholder="SKU" @update="form.sku = $event" />

            <button class="button" @click="createProduct" :disabled="load">
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
            },
            load: false
        }
    },

    methods: {
        async createProduct() {
            this.load = true
            this.form.quantity = parseInt(this.form.quantity);
            try {
                const data = await crud.post('product/create', this.form);
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