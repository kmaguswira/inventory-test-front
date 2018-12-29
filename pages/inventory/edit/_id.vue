<template>
    <section class="section">
        <div class="container">
            <header-title-component title="edit product"/>

            <text-input-component placeholder="Name" @update="form.name = $event" :value="form.name"/>
            <text-input-component placeholder="Quantity" typeInput="number" @update="form.quantity = $event" :value="form.quantity"/>
            <text-input-component placeholder="SKU" @update="form.sku = $event" :value="form.sku"/>

            <button class="button" @click="updateProduct" :disabled="load">
                Update
            </button>

            <header-title-component title="Missing/Broken/Sample Product" top="true"/>
            <select-component placeholder="Select Type" :data="types" valueKey="value" valueTitle="title" @update="formDrop.type = $event"/>
            <text-input-component placeholder="Quantity" typeInput="number" @update="formDrop.quantity = $event"/>
            <text-input-component placeholder="Note" @update="formDrop.note = $event"/>
            <button class="button id-danger" @click="dropProduct" :disabled="load">
                Drop
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

    components: { HeaderTitleComponent, TextInputComponent,SelectComponent },
    data() {
        return {
            form: {
                name: null,
                quantity: null,
                sku: null
            },

            formDrop: {
                quantity: null,
                note: null,
                type: null,
                productId: this.$route.params.id
            },

            load: false,

            types: [
              {
                  value: 'Missing',
                  title: 'Missing'
              },
              {
                  value: 'Broken',
                  title: 'Broken'
              },
              {
                  value: 'Sample',
                  title: 'Sample'
              }
          ],
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
            this.load = true
            this.form.quantity = parseInt(this.form.quantity);
            try {
                const data = await crud.update('product/update/' + this.$route.params.id, this.form)
                this.load = false
                alert("success")
            } catch(err) {
                this.load = false
                alert("error")
            }
            
        },

        async dropProduct() {
            this.load = true
            this.formDrop.quantity = parseInt(this.formDrop.quantity);
            this.formDrop.productId = parseInt(this.formDrop.productId);

            try {
                const data = await crud.post('product-out/create', this.formDrop);
                this.load = false
                alert("success")
            } catch(err) {
                this.load = false
                alert("error")
            }
        }
    }

}
</script>