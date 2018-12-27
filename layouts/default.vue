<template>
  <div class="root">
    <header class="header">
      <div class="container">
        <div class="columns">
        <div class="column is-one-third">
          <div class="title is-uppercase">
              <nuxt-link to="/">
                Inventory
              </nuxt-link>
          </div>
        </div>
        <div class="column is-two-thirds">
          <div class="columns">
            <div class="column">
              <div class="header--menu">
                <nuxt-link to="/insight/value">
                  <span>Insight</span>
                </nuxt-link>
              </div>
            </div>
            <div class="column">
              <div class="header--menu">
                <nuxt-link to="/pos">
                  <span>Sales</span>
                </nuxt-link>
              </div>
            </div>
            <div class="column">
              <div class="header--menu">
                <nuxt-link to="/inventory">
                  <span>Inventory</span>
                </nuxt-link>
              </div>
            </div>
            <div class="column">
              <div class="header--menu">
                <nuxt-link to="/migrate">
                  <span>Import Data</span>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </header>
    <nuxt/>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
