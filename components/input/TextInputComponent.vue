<template>
    <div class="field">
        <div class="control">
            <input class="input" :type="typeInput" :placeholder="placeholder" @input="updateValue" :required="required" :value="value">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        typeInput: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: 'Text Input'
        },
        required: {
            type: Boolean,
            default: false
        },
        value: null
    },

    methods: {
        updateValue(e) {
            this.$emit('update', e.target.value)
        }
    }
}
</script>
