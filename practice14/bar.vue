<template>
  <div class="bar">
    <h1 class="header">Barコンポーネント</h1>
    <p>これはBarコンポーネントです。</p>
  </div>
</template>

<script>
import Foo from './foo'
export default {
  components: { Foo }
}
</script>

<style scoped>
  .bar { border: 1px solid red; margin:4px;}
  .header { font-size: 125% }
</style>