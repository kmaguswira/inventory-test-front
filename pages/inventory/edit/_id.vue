<template>
    <section class="section">
        <div class="container">
            <header-title-component title="create product" />

            <text-input-component placeholder="Name" @update="form.name = $event" :value="form.name"/>
            <text-input-component placeholder="Quantity" typeInput="number" @update="form.quantity = $event" :value="form.quantity"/>
            <text-input-component placeholder="SKU" @update="form.sku = $event" :value="form.sku"/>

            <button class="button" @click="updateProduct">
                Update
            </button>
        </div>
    </section>
</template>

<script>

import HeaderTitleComponent from '../../../components/sections/HeaderTitleComponent'
import TextInputComponent from '../../../components/input/TextInputComponent'
import { crud } from '../../../services/crud.js'
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

    created() {
        this.getProduct();
    },

    methods: {
        async getProduct() {
            const data = await crud.get('product/get/' + this.$route.params.id);
            this.form = {
                name: data.name,
                quantity: data.quantity,
                sku: data.sku
            }
        },

        async updateProduct() {
            this.form.quantity = parseInt(this.form.quantity);
            const data = await crud.update('product/update/' + this.$route.params.id, this.form)
        }
    }

}
</script>