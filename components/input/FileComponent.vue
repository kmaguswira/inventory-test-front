<template>
    <div class="field">
        <div class="file is-info has-name">
            <label class="file-label">
            <input class="file-input" type="file" :placeholder="placeholder" @input="updateValue" :required="required" :value="value">
            <span class="file-cta">
                <span class="file-icon">
                <i class="fas fa-upload"></i>
                </span>
                <span class="file-label">
                {{ placeholder }}
                </span>
            </span>
            <span class="file-name">
                {{ filename }}
            </span>
            </label>
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

    data() {
        return {
            filename: null
        }
    },

    methods: {
        updateValue(e) {
            this.$emit('update', e.target.files[0])
            this.filename = e.target.files[0].name
        }
    }
}
</script>
