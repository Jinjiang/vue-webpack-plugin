<template>
  <div>
    App (red)
    <ul>
      <li><Foo/></li>
      <li><Bar/></li>
    </ul>
  </div>
</template>

<script>
import Foo from './Foo.vue'
import Bar from './Bar.vue'
export default {
  components: { Foo, Bar }
}
</script>

<style>
body { background-color: red; }
</style>
