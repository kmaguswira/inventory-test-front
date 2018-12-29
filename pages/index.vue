<template>
  <section class="container">
    <h1>OVERVIEW</h1>
    <p>barang terlaris</p>
    <p>barang keuntungan terbesar</p>
    <p>barang paling banyak rusak</p>
    <p>barang paling banyak hilang</p>
  </section>
</template>

<script>
export default {
  components: {},

  created() {
    this.$router.push({ path: '/insight/value' })
  }
}
</script>
