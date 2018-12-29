<template>
  <section class="section">
    <div class="container">
      <header-title-component title="Edit Order"/>

      <text-input-component
        placeholder="Product"
        typeInput="text"
        @update="form.productId = $event"
        :value="form.productName"
        :disabled="true"
      />
      <text-input-component
        placeholder="Order Quantity"
        typeInput="number"
        @update="form.orderQuantity = $event"
        :value="form.orderQuantity"
      />
      <text-input-component
        placeholder="Base Price"
        typeInput="number"
        @update="form.basePrice = $event"
        :value="form.basePrice"
      />
      <text-input-component
        placeholder="Invoice"
        @update="form.invoice = $event"
        :value="form.invoice"
      />

      <button class="button" @click="updateOrder" :disabled="load">Update</button>

      <header-title-component title="order progress" top="true"/>

      <text-input-component
        placeholder="Quantity Recieved"
        typeInput="number"
        @update="formProgress.quantityReceived = $event"
        :value="progress ? progress.quantityReceived : null"
      />

      <button
        class="button is-info"
        @click="addProgress"
        v-if="!progressEdit"
        :disabled="load"
      >Create</button>

      <div v-else>
        <button class="button is-info" @click="updateProgress" :disabled="load">Update</button>
        <button class="button is-danger" @click="cancelProgress" :disabled="load">Cancel</button>
      </div>

      <div class="list-box">
        <table class="table table-list">
          <thead>
            <tr>
              <td>Created At</td>
              <td>Quantity Recieved</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody v-if="order">
            <tr v-for="(progress, index) in order.orderProgress" :key="progress.ID">
              <td>{{ progress.CreatedAt }}</td>
              <td>{{ progress.quantityReceived }}</td>
              <td>
                <div
                  class="button is-primary is-small"
                  @click="editProgress(progress, index)"
                  :disabled="load"
                >Edit</div>
                <div
                  class="button is-danger is-small"
                  @click="deleteProgress(progress.ID, index)"
                  :disabled="load"
                >Delete</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import HeaderTitleComponent from '../../../../components/sections/HeaderTitleComponent'
import TextInputComponent from '../../../../components/input/TextInputComponent'
import SelectComponent from '../../../../components/input/SelectComponent'
import { crud } from '../../../../services/crud.js'
export default {
  components: { HeaderTitleComponent, TextInputComponent, SelectComponent },
  data() {
    return {
      form: {
        productId: null,
        orderQuantity: null,
        basePrice: null,
        invoice: null
      },
      formProgress: {
        orderId: this.$route.params.id,
        quantityReceived: null
      },
      order: null,
      progressEdit: false,
      progressEditIndex: null,
      progress: null,
      load: false
    }
  },

  created() {
    this.getOrder()
  },

  methods: {
    async getOrder() {
      const data = await crud.get('order/get/' + this.$route.params.id)
      this.order = data
      this.form = {
        productId: data.product.ID,
        orderQuantity: data.orderQuantity,
        basePrice: data.basePrice,
        invoice: data.invoice,
        productName: data.product.name
      }
    },

    async updateOrder() {
      this.load = true
      this.form.productId = parseInt(this.form.productId)
      this.form.orderQuantity = parseInt(this.form.orderQuantity)
      this.form.basePrice = parseInt(this.form.basePrice)
      try {
        const data = await crud.update(
          'order/update/' + this.$route.params.id,
          this.form
        )
        this.load = false
        alert('success')
      } catch (err) {
        this.load = false
        alert('error')
      }
    },

    async addProgress() {
      this.load = true
      this.formProgress.orderId = parseInt(this.formProgress.orderId)
      this.formProgress.quantityReceived = parseInt(
        this.formProgress.quantityReceived
      )

      try {
        const data = await crud.post('order-progress/create', this.formProgress)
        this.order.orderProgress.push(data)
        this.load = false
        alert('success')
      } catch (err) {
        this.load = false
        alert('error')
      }
    },

    async deleteProgress(id, index) {
      this.load = true
      if (confirm('Are you sure')) {
        try {
          const data = await crud.delete('order-progress/delete/' + id)
          this.order.orderProgress.splice(index, 1)
          this.load = false
          alert('success')
        } catch (err) {
          this.load = false
          alert('error')
        }
      }
    },

    editProgress(progress, index) {
      this.progress = progress
      this.progressEdit = true
      this.progressEditIndex = index
    },

    async updateProgress() {
      this.load = true
      this.formProgress.orderId = parseInt(this.formProgress.orderId)
      this.formProgress.quantityReceived = parseInt(
        this.formProgress.quantityReceived
      )
      try {
        const data = await crud.update(
          'order-progress/update/' + this.progress.ID,
          this.formProgress
        )
        this.load = false
        alert('success')
      } catch (err) {
        this.load = false
        alert('error')
      }
    },

    cancelProgress() {
      this.progress = null
      this.progressEdit = false
    }
  }
}
</script>