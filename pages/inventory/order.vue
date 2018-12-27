<template>
  <section class="container">
      <h1>Catatan barang masuk</h1>
    <div class="inventory">
        <div class="columns tab">
            <div class="column is-half">
                <div class="title is-5">
                    <nuxt-link to="/inventory">
                        Inventory
                    </nuxt-link>
                </div>
            </div>
            <div class="column is-half">
                <div class="title is-5 is-right">
                    <nuxt-link to="/inventory/order">
                        Order
                    </nuxt-link>
                </div>
            </div>
        </div>
        <div class="search-box">
            <input class="input search-box-input" placeholder="search by name">
            <div class="button button-search is-uppercase">search</div>
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
                    <tr>
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
export default {
  components: {}
}
</script>
