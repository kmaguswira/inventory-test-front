<template>
    <div class="header-tab">
        <div class="header-tab-item" v-for="item in content" :key="item.url">
            <nuxt-link :to="item.url">{{ item.title }}</nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        content: {
            type: Array
        }
    }
}
</script>
