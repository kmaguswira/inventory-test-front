<template>
  <section class="section">
      <div class="container">
            <header-tab-title title="Inventory Barang" />
            <header-tab-component :content="headerTab"/>
    
        <div class="field is-grouped">

            <div class="control is-expanded">
                <input class="input search-box-input" placeholder="search by name">
            </div>

            <div class="control">
            <div class="button button-search ">Search</div>
            </div>
            <div class="control">
            <div class="button button-search is-info">
                <nuxt-link to="/inventory/create">
                    Create
                </nuxt-link>
            </div>
            </div>
        </div>

        <div class="list-box">
            <table class="table table-list is-striped is-hoverable">
                <thead>
                    <tr>
                        <td>SKU</td>
                        <td>Name</td>
                        <td>Total</td>
                        <td colspan="2">Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product._id">
                        <td>{{ product.sku }}</td>
                        <td>{{ product.name }}</td>
                        <td>{{ product.quantity }}</td>
                        <td>
                            <div class="button is-primary is-small">Edit</div>
                            <div class="button is-danger is-small" @click="deleteProduct(product.ID)">Delete</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </section>
</template>

<script>
import HeaderTabComponent from '../../components/sections/HeaderTabComponent'
import HeaderTabTitle from '../../components/sections/HeaderTitleComponent'
import { crud } from '../../services/crud.js'

export default {
  components: {HeaderTabComponent, HeaderTabTitle },
  data() {
      return {
          headerTab: [
              {
                  title: 'Product',
                  url: '/inventory'
              },

              {
                  title: 'Order',
                  url: '/inventory/order'
              }
          ],

          products: null
      }
  },

  mounted() {
      this.getProduct();
  },

  methods: {
      async getProduct() {
          this.products = await crud.get('product/all');
          console.log("this.products", this.products)
      },

      async deleteProduct(id) {
          const data = await crud.delete('product/delete/' + id);
          this.getProduct();
      }
  }
}
</script>
