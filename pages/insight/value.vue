<template>
  <section class="section">
    <div class="container">
      <header-tab-title title="Product Value Today Report"/>
      <header-tab-component :content="headerTab"/>
      <div class="summary" v-if="reports">
        <div class="info">
          <div><b>Date Printed:</b> {{reports.date}}</div>
          <div><b>Total SKU:</b> {{reports.totalSku}}</div>
          <div><b>Total Quantity:</b> {{reports.totalSku}}</div>
          <div><b>Total Price:</b> {{formatPrice(reports.totalPriceSku)}}</div>
        </div>
        <div class="download">
            <div class="button is-uppercase" @click="getCSV">csv</div>
        </div>
      </div>
      <div class="insight">
        <div class="list-box">
          <table class="table table-list">
            <thead>
              <tr>
                <td>SKU</td>
                <td>Name</td>
                <td>Quantity</td>
                <td>Mean of Buying Price</td>
                <td>Total</td>
              </tr>
            </thead>
            <tbody v-if="reports">
              <tr v-for="product in reports.products" :key="product.ID">
                <td>{{ product.sku }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.quantity }}</td>
                <td>{{ formatPrice(product.meanPrice) }}</td>
                <td>{{ formatPrice(product.total) }}</td>
              </tr>
            </tbody>
          </table>
          <div class="csv-fab">csv</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HeaderTabComponent from '../../components/sections/HeaderTabComponent'
import HeaderTabTitle from '../../components/sections/HeaderTitleComponent'
import { apiEndpoint, crud } from '../../services/crud.js'
import { currency } from '../../mixins/currency.js'

export default {
  components: { HeaderTabComponent, HeaderTabTitle },
  data() {
    return {
      headerTab: [
        {
          title: 'Value',
          url: '/insight/value'
        },

        {
          title: 'Sales',
          url: '/insight/sales'
        }
      ],

      reports: null
    }
  },

  created() {
    this.getReport()
  },

  methods: {
    async getReport() {
      this.reports = await crud.get('insight/value-product')
    },
    getCSV() {
      window.open(`${apiEndpoint}csv/export?type=product`, '_blank')
    }
  },

  mixins: [currency]
}
</script>
