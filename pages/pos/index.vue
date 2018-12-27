<template>
  <section class="container">
    <h1>catatan barang keluar</h1>
    <div class="sales">
        <div class="list-product">
            <div class="search-box">
                <input class="input search-box-input" placeholder="search by name">
                <div class="button button-search is-uppercase">search</div>
            </div>
            <div class="list-box">
                <table class="table table-list">
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Total</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>name</td>
                            <td>total</td>
                            <td>add</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="notes">
            <div class="notes-header">
                Invoice
            </div>
            <div class="notes-content">
                <table class="table table-invoice">
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Amount</td>
                            <td>Price</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>Amount</td>
                            <td>Price</td>
                            <td>remove</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="notes-footer">
                <span>clear</span>
                <span>TOTAL : 0</span>
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
