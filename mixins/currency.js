export const currency = {
    methods: {
        formatPrice(value) {
            let val = (value/1).toFixed(2).replace('.', ',')
            return `Rp. ${val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`
        }
    }
}