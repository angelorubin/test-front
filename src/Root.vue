<template>
  <div id="app">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'Root',
    data() {
      return {
        title: 'Test Front Trezo Team'
      }
    }
  }
</script>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition-property: opacity;
    transition-duration: .25s;
  }
  .fade-enter-active {
    transition-delay: .25s;
  }
  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>
