<template>
  <section class="section">
      <div class="container">
          <header-tab-title title="Report penjualan barang" />
          <header-tab-component :content="headerTab"/>
            <div class="insight">
                <div class="date-range-box">
                    <input class="input date-range-input" placeholder="start date">
                    <input class="input date-range-input" placeholder="end date">            
                    <div class="button button-date-range is-uppercase">search</div>
                </div>
                <div class="list-box">
                    <table class="table table-list">
                        <thead>
                            <tr>
                                <td>SKU</td>
                                <td>Name</td>
                                <td>Total</td>
                                <td>Mean of Buying Price</td>
                                <td>Total</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>idsku</td>
                                <td>Inventory name</td>
                                <td>total</td>
                                <td>edit</td>
                                <td>delete</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="csv-fab">
                        csv
                    </div>
                </div>
            </div>
    </div>
  </section>
</template>

<script>
import HeaderTabComponent from '../../components/sections/HeaderTabComponent'
import HeaderTabTitle from '../../components/sections/HeaderTitleComponent'
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
          ]
      }
  }
}
</script>
