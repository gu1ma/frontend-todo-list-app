<template>
  <section class="footer-todo">
      <slot>
          <p>ToDo List MIT Licence</p>
      </slot>
  </section>
</template>

<script>

import { Task } from '../models/Task'
import Focus from '../directives/focus.js'

export default {
    data(){
        return {
        }
    }
}
</script>

<style lang="less">
.footer-todo{
    position: fixed;
    left: 0px;
    bottom: 0px;
    width: 100%;
    text-align: center;
    padding: 10px 0;
    background-image: linear-gradient(to top, #cfd9df 0%, #cfd9df 0%, #e2ebf0 100%);
}

</style>

