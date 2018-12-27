<template>
  <section class="container">
    <h1>Data Migration</h1>
    <div class="select">
        <select>
            <option>Product</option>
            <option>Order</option>
            <option>Sales</option>
        </select>
    </div>
    <div class="file">
        <label class="file-label">
            <input class="file-input" type="file" name="resume">
            <span class="file-cta">
            <span class="file-label">
                Choose a file…
            </span>
            </span>
        </label>
    </div>
    <div class="button">upload</div>
  </section>
</template>

<script>
export default {
  components: {}
}
</script>
