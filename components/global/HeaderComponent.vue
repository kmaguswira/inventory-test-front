<template>
    <header class="header">
      <div class="container">
        <div class="columns">
        <div class="column is-one-quarter">
          <div class="title is-uppercase">
              <nuxt-link to="/">
                Toko Ijah
              </nuxt-link>
          </div>
        </div>
        
        <div class="column is-three-quarters">
          <div class="header--navigation">
              <div class="header--menu">
                <nuxt-link to="/insight/value">
                  <span>Insight</span>
                </nuxt-link>
              </div>

              <div class="header--menu">
                <nuxt-link to="/pos">
                  <span>Sales</span>
                </nuxt-link>
              </div>

              <div class="header--menu">
                <nuxt-link to="/inventory">
                  <span>Inventory</span>
                </nuxt-link>
              </div>

              <div class="header--menu">
                <nuxt-link to="/migrate">
                  <span>Import Data</span>
                </nuxt-link>
              </div>

          </div>
        </div>
      </div>
      </div>
    </header>
</template>

<script>
export default {

}
</script>
