<template>
    <section class="section">
        <div class="container">
            <header-title-component title="data migration" />

            <select-component placeholder="Select a type" :data="types" valueKey="value" valueTitle="title" @update="form.type = $event"/>
            <file-component placeholder="Select your file" @update="form.file = $event"/>

            <div class="field">
                <div class="control">
                    <div class="button is-primary" :disabled="load" @click="uploadCsv">Upload</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import HeaderTitleComponent from '../../components/sections/HeaderTitleComponent'
import SelectComponent from '../../components/input/SelectComponent'
import FileComponent from '../../components/input/FileComponent'
import { crud } from '../../services/crud'

export default {
  components: { HeaderTitleComponent, SelectComponent, FileComponent },
  data() {
      return {
          types: [
              {
                  value: 'product',
                  title: 'Product'
              },
              {
                  value: 'order',
                  title: 'Order'
              },
              {
                  value: 'sales',
                  title: 'Sales'
              }
          ],

          form: {
              type: null,
              file: null
          },

          load: false
      }
  },

  methods: {
      async uploadCsv() {
          this.load = true
          const config = {
              headers: {'Content-Type': 'multipart/form-data' }
          }

          const body = new FormData();
          body.set('type', this.form.type);
          body.append('file', this.form.file); 
          try {
              const data = await crud.post('csv/import', body, config)
              this.load = false
              alert("Success")
          } catch (err) {
              alert(err)
          }
      }
  }
}
</script>
