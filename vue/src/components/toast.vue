<template>
  <div v-bind:title="this.$props.text">
    <span>{{ "#" + text.toLowerCase() }}</span>
  </div>
</template>

<script lang="ts">
export default {
  name: "toast",
  props: {
    text: { type: String, required: true },
  },
};
</script>

<style lang="scss" scoped>
div {
  background: var(--primary-color-100);
  border-radius: 6px;
  padding: 0.5px 2px;
  width: max-content;
  text-align: center;
  span {
    font-family: var(--font-200);
    font-weight: 700;
    font-size: 0.1pt;
    color: var(--primary-color-200);
  }
}
</style>
