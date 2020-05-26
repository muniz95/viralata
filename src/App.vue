<template>
  <div id="app">
    <Header />
    <section>
      <router-view/>
    </section>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  components: { Header }
}
</script>

<style lang="scss">
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, hr, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, font, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td {
  margin:0; padding:0; border:0; background:transparent;
  /*vertical-align: baseline;*/
}

body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #333;
  text-shadow: 0 1px 0 #fff;
}

section {
  padding: 80px 20px 50px;
  border-top: 1px solid #ccc;
  font-size: 20px;
  line-height: 24px;
}

section:after {
  content: "";
  display: block;
  clear: both;
}

section img {
  width: 44%;
  margin: 0 0 10px 4%;
}

section p {
  padding: 0 0 20px;
}

@media screen and (max-width: 767px) {
  header+section {
    padding-top: 80px;
  }

  section {
    padding: 30px 15px 10px;
  }
}

</style>
