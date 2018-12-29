<template>
    <div class="header-title" :class="{'pad-top': top}">
        {{ title }}
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Header Title'
        },

        top: {
            type: Boolean,
            default: false
        }
    }
}
</script>
