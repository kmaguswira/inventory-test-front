<template>
    <div class="field">
        <label class="label">{{ placeholder }}</label>
        <div class="control">
            <div class="select">
            <select @change="selected">
                <option value="">Select dropdown</option>
                <option v-for="select in data" :key="select.ID" :value="select[valueKey]" :selected="value === select[valueKey]">{{ select[valueTitle] }}</option>
            </select>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props: {
        data: {
            type: Array
        },
        valueKey: {
            type: String,
        },
        valueTitle: {
            type: String
        },
        value: null,
        placeholder: {
            type: String,
            default: 'Select Option'
        }
    },

    methods: {
        selected(e) {
            this.$emit('update', e.target.value)
        }
    }

}
</script>
