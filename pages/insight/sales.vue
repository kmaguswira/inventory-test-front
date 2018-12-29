<template>
  <section class="section">
    <div class="container">
      <header-tab-title title="Sales Report"/>
      <header-tab-component :content="headerTab"/>

      <div class="date-range-box">
        <input class="input date-range-input" placeholder="start date" v-model="filterDate.start">
        <input class="input date-range-input" placeholder="end date" v-model="filterDate.end">
        <div class="button button-date-range is-uppercase" @click="getReport">search</div>
      </div>
      <div class="summary" v-if="reports">
        <div class="info">
          <div><b>Date Printed:</b> {{reports.datePrinted}}</div>
          <div><b>Date Range:</b> {{reports.dateRange}}</div>
          <div><b>Total Omzet:</b> {{formatPrice(reports.totalOmzet)}}</div>
          <div><b>Total Profit:</b> {{formatPrice(reports.totalProfit)}}</div>
          <div><b>Total Sales:</b> {{reports.totalSales}}</div>
          <div><b>Total Quantity:</b> {{reports.totalQuantity}}</div>
        </div>
        <div class="download">
          <div class="button is-uppercase" @click="getCSV">csv</div>
        </div>
      </div>
      <div class="list-box">
        <table class="table table-list">
          <thead>
            <tr>
              <td>SKU</td>
              <td>Name</td>
              <td>Quantity</td>
              <td>Buy Price</td>
              <td>Sell Price</td>
              <td>Total Price</td>
              <td>Profit</td>
            </tr>
          </thead>
          <tbody v-if="reports">
            <tr v-for="product in reports.sales" :key="product.ID">
              <td>{{ product.sku }}</td>
              <td>{{ product.name }}</td>
              <td>{{ product.quantity }}</td>
              <td>{{ formatPrice(product.buyPrice) }}</td>
              <td>{{ formatPrice(product.sellPrice) }}</td>
              <td>{{ formatPrice(product.totalPrice) }}</td>
              <td>{{ formatPrice(product.profit) }}</td>
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
import { apiEndpoint, crud } from '../../services/crud.js'
import { currency } from '../../mixins/currency.js'
import moment from 'moment'

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
      reports: null,
      filterDate: {
        start: moment('2017-12-01').format('YYYY-MM-DD'),
        end: moment('2017-12-31').format('YYYY-MM-DD')
      }
    }
  },

  created() {
    this.getReport()
  },

  methods: {
    async getReport() {
      const params = {
        start: this.filterDate.start,
        end: this.filterDate.end
      }

      this.reports = await crud.get('insight/sales', params)
    },
    getCSV() {
      window.open(`${apiEndpoint}csv/export?type=sales`, '_blank')
    }
  },

  mixins: [currency]
}
</script>
