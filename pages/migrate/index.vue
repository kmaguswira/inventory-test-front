<template>
    <section class="section">
        <div class="container">
            <header-title-component title="data migration" />

            <div class="field is-grouped">

                <div class="control">
                    <div class="select">
                        <select>
                            <option>Product</option>
                            <option>Order</option>
                            <option>Sales</option>
                        </select>
                    </div>
                </div>

                <div class="control">
                    <div class="file">
                        <label class="file-label">
                            <input class="file-input" type="file" name="resume">
                            <span class="file-cta">
                            <span class="file-label">
                                Choose a file…
                            </span>
                            </span>
                        </label>
                    </div>
                </div>

                <div class="control">
                    <div class="button is-primary">Upload</div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
import HeaderTitleComponent from '../../components/sections/HeaderTitleComponent'
export default {
  components: { HeaderTitleComponent }
}
</script>
