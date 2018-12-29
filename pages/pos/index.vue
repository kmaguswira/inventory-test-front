<template>
  <section class="section">
    <div class="container">
      <header-tab-title title="Sales"/>

      <div class="field is-grouped">
        <div class="control is-expanded">
          <input
            class="input search-box-input"
            placeholder="search by order-id/note or product"
            v-model="search"
          >
        </div>

        <div class="control">
          <div class="button button-search">Search</div>
        </div>
        <div class="control">
          <div class="button button-search is-info">
            <nuxt-link to="/pos/create">Create</nuxt-link>
          </div>
        </div>
      </div>

      <div class="list-box">
        <table class="table table-list is-striped is-hoverable">
          <thead>
            <tr>
              <td>Created At</td>
              <td>Order-ID/Note</td>
              <td>Products</td>
              <td>Total</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(sale, index) in filteredItems" :key="sale.ID">
              <td>{{ sale.CreatedAt }}</td>
              <td>{{ sale.note }}</td>
              <td v-html="sale.products"></td>
              <td>{{ sumPrice(sale.productOuts) }}</td>
              <td>
                <div
                  class="button is-danger is-small"
                  @click="deleteSale(sale.ID, index)"
                  :disabled="load"
                >Delete</div>
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
import { currency } from '../../mixins/currency.js'

export default {
  components: { HeaderTabComponent, HeaderTabTitle },
  data() {
    return {
      sales: null,
      load: false,
      search: ''
    }
  },

  mounted() {
    this.getSales()
  },

  computed: {
    filteredItems() {
      if (this.sales) {
        return this.sales.filter(item => {
          return (
            item.note.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
            item.products.toLowerCase().indexOf(this.search.toLowerCase()) > -1
          )
        })
      }
    }
  },

  methods: {
    async getSales() {
      this.sales = await crud.get('sales/all')
      this.sales.map(x => {
        x.products = this.mergeProduct(x.productOuts)
      })
    },

    async deleteSale(id, index) {
      if (confirm('Are you sure?')) {
        this.load = true
        try {
          const data = await crud.delete('sales/delete/' + id)
          this.sales.splice(index, 1)
          this.load = false
          alert('success')
        } catch (err) {
          this.load = false
          alert('error')
        }
      }
    },

    mergeProduct(data) {
      if (data) {
        let res = []
        data.forEach(element => {
          if (element.product.name && element.quantity && element.sellPrice) {
            res.push(
              `${element.product.name} @${this.formatPrice(
                element.sellPrice
              )} x${element.quantity}`
            )
          } else {
            return ''
          }
        })

        return res.join('<br>')
      }
    },

    sumPrice(data) {
      if (data) {
        let sum = 0
        data.forEach(element => {
          return (sum += element.totalPrice)
        })
        return this.formatPrice(sum)
      }
    }
  },
  mixins: [currency]
}
</script>
