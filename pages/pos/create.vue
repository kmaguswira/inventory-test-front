<template>
  <section class="section">
        <div class="container">
            <header-title-component title="Create sales" />
        
            <div class="columns">
                <div class="column is-one-third">
                    <div class="list-box">
                        <table class="table table-list is-striped is-hoverable">
                            <thead>
                                <tr>
                                    <td>Product</td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="product in filteredItems" :key="product.ID">
                                    <td>{{ product.name }}</td>
                                    <td>
                                        <div class="button is-info" @click="addItem(product)">+</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="column is-two-third">
                    <div class="list-box">
                        <table class="table table-list is-striped is-hoverable">
                            <thead>
                                <tr>
                                    <td>Product</td>
                                    <td>Sell Price</td>
                                    <td>Quantity</td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item,index) in form.products" :key="index">
                                    <td>{{ item.name }}</td>
                                    <td>
                                        <text-input-component placeholder="Sell Price" typeInput="number" :label="false" @update="item.sellPrice = parseInt($event)"/>
                                    </td>
                                    <td>
                                        <text-input-component placeholder="Quantity" typeInput="number" :label="false" @update="item.quantity = parseInt($event)"/>
                                    </td>
                                    <td>
                                        <div class="button is-danger" @click="deleteItem(index)" :disabled="load">Delete</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <text-input-component placeholder="Note" @update="form.note = $event"/>
                        <div class="button is-info" @click="save" :disabled="load">Save</div>
                    </div>
                </div>
            </div>
        </div>
  </section>
</template>

<script>
import HeaderTitleComponent from '../../components/sections/HeaderTitleComponent'
import { crud } from '../../services/crud.js'
import TextInputComponent from '../../components/input/TextInputComponent'

export default {
  components: {HeaderTitleComponent,TextInputComponent },
  data() {
      return {
          products: null,

          form: {
              products: []
          },

          load: false
      }
  },

  created() {
      this.getProducts();
  },
  computed: {
    filteredItems() {
      if (this.products && this.form.products) {
            let formItems = [];
            this.form.products.forEach(item => {
                formItems.push(item.productId)
            })
            return this.products.filter(item => {         
                return formItems.indexOf(item.ID) == -1
            })
      }
    }
  },

  methods: {
      async getProducts() {
          this.products = await crud.get('product/all');
      },

      addItem(product) {
          this.form.products.push({
              productId: product.ID,
              quantity: product.quantity,
              sellPrice: product.sellPrice,
              name: product.name
          })
      },

      deleteItem(index) {
          this.form.products.splice(index, 1)
      },

      async save() {
          this.load = true
          try{
              const data = crud.post('sales/new-sales', this.form);
              this.load= false
              alert("success")
          } catch(err) {
              this.load= false
              alert("error")
          }
      }
  }
}
</script>
