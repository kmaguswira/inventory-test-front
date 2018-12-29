<template>
  <section class="section">
    <div class="container">
        <header-tab-title title="Inventory Order" />
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
                <nuxt-link to="/pos">
                    Create
                </nuxt-link>
            </div>
            </div>
        </div>
        <div class="list-box">
            <table class="table table-list">
                <thead>
                    <tr>
                        <td>SKU</td>
                        <td>Name</td>
                        <td>Total</td>
                        <td colspan="2">Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="order in orders" :key="order.ID">
                        <td>idsku</td>
                        <td>Inventory name</td>
                        <td>total</td>
                        <td>edit</td>
                        <td>delete</td>
                    </tr>
                </tbody>
            </table>
            <div class="add-fab">
                <span class="icon">
                  +
                </span>
            </div>
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
          orders: null
      }
  },

  mounted() {
      this.getOrders();
  },

  methods: {
      async getOrders() {
          this.orders = await crud.get('order/all');
          console.log("this.orders", this.orders)
      }
  }
}
</script>
