<template>
  <div class="root font-lato">
    <header-component/>
    <nuxt/>
  </div>
</template>

<script>
import HeaderComponent from '../components/global/HeaderComponent'
export default {
  components: { HeaderComponent }
}
</script>
