<template>
  <section class="section">
    <div class="container">
        <header-tab-title title="Inventory Order" />
        <header-tab-component :content="headerTab"/>

        <div class="field is-grouped">

            <div class="control is-expanded">
                <input class="input search-box-input" placeholder="search by name" v-model="search">
            </div>

            <div class="control">
            <div class="button button-search ">Search</div>
            </div>
            <div class="control">
            <div class="button button-search is-info">
                <nuxt-link to="/inventory/order/create">
                    Create
                </nuxt-link>
            </div>
            </div>
        </div>
        <div class="list-box">
            <table class="table table-list">
                <thead>
                    <tr>
                        <td>Invoice</td>
                        <td>Product Name</td>
                        <td>Order Quantity</td>
                        <td>Order Recieved</td>
                        <td>Status</td>
                        <td colspan="2">Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="order in filteredItems" :key="order.ID">
                        <td>{{ order.invoice }}</td>
                        <td>{{ order.product.name }}</td>
                        <td>{{ order.orderQuantity }}</td>
                        <td>
                            <span v-if="order.total">{{ order.total }}</span>    
                        </td>
                        <td>{{ order.status }}</td>
                        <td>
                            <div class="button is-primary is-small" :disabled="load">
                                <nuxt-link :to="'/inventory/order/edit/' + order.ID">Edit</nuxt-link>
                            </div>
                            <div class="button is-danger is-small" @click="deleteOrder(order.ID)" :disabled="load">Delete</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </section>
</template>

<script>
import HeaderTabComponent from '../../../components/sections/HeaderTabComponent'
import HeaderTabTitle from '../../../components/sections/HeaderTitleComponent'
import { crud } from '../../../services/crud.js'

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
                  title: 'Missing/Broken/Sample',
                  url: '/inventory/mbs-product'
              },

              {
                  title: 'Order',
                  url: '/inventory/order'
              }
          ],
          orders: null,
          load: false,
          search:"",
      }
  },

  mounted() {
      this.getOrders();
  },
  computed: {
    filteredItems() {
      if(this.orders){
        return this.orders.filter(item => {
          if(item.product.name) {
            return item.product.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
          }
        })
      }
    }
  },

  methods: {
      async getOrders() {
          this.orders = await crud.get('order/all');
          this.orders.map(order => {
              let total = 0;
                order.orderProgress.forEach(element => {
                    total += element.quantityReceived
                });

              order.total = total
          })
      },

      async deleteOrder(id) {
          if(confirm("Are you sure?")) {
              this.load= true
              try {
                const data = await crud.delete('order/delete/' + id);
                this.getOrders();
                this.load= false
                alert("success")
              } catch(err) {
                  this.load =false
                  alert("error")
              }
          }
      }
  }
}
</script>
