<template>
    <div class="header-title">
        {{ title }}
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Header Title'
        }
    }
}
</script>
