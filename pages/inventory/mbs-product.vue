<template>
  <section class="section">
    <div class="container">
      <header-tab-title title="MISSING/BROKEN/SAMPLE PRODUCT"/>
      <header-tab-component :content="headerTab"/>

      <div class="field is-grouped">
        <div class="control is-expanded">
          <input class="input search-box-input" placeholder="search by name" v-model="search">
        </div>

        <div class="control">
          <div class="button button-search">Search</div>
        </div>
      </div>

      <div class="list-box">
        <table class="table table-list is-striped is-hoverable">
          <thead>
            <tr>
              <td>SKU</td>
              <td>Name</td>
              <td>Total</td>
              <td>Type</td>
              <td>Note</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in filteredItems" :key="product._id">
              <td>{{ product.product.sku }}</td>
              <td>{{ product.product.name }}</td>
              <td>{{ product.quantity }}</td>
              <td>{{ product.type }}</td>
              <td>{{ product.note }}</td>
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
  components: { HeaderTabComponent, HeaderTabTitle },
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

      products: null,
      search: ""
    }
  },

  mounted() {
    this.getProduct()
  },
  computed: {
    filteredItems() {
      if(this.products){
        return this.products.filter(item => {
          if(item.product.name) {
            return item.product.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
          }
        })
      }
    }
  },

  methods: {
    async getProduct() {
      this.products = await crud.get('product-out/all?where={"type<>":"Sales"}')
    }
  },
}
</script>
