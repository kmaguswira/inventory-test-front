<template>
  <section class="container">
    <div class="insight">
        <div>
          report penjualan barang
        </div>
        <div class="columns tab">
            <div class="column is-half">
                <div class="title is-5">
                    <nuxt-link to="/insight/value">
                        Value
                    </nuxt-link>
                </div>
            </div>
            <div class="column is-half">
                <div class="title is-5 is-right">
                    <nuxt-link to="/insight/sales">
                        Sales
                    </nuxt-link>
                </div>
            </div>
        </div>
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
  </section>
</template>

<script>
export default {
  components: {}
}
</script>
