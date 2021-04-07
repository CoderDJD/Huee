<template>
  <div
    v-bind:title="this.$props.text"
    v-if="disabled == 'false' || disabled == undefined"
  >
    <span>{{ text }}</span>
  </div>
  <div v-else style="background: var(--light-color-200)">
    <span style="color: #f5f5f550">{{ text }}</span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default {
  name: "lightButton",
  props: {
    text: { type: String, required: true },
    disabled: { type: String, required: false },
  },
};
</script>

<style lang="scss" scoped>
div {
  background: var(--light-color-100);
  text-align: center;
  width: max-content;
  padding: 4px 14px;
  border-radius: 6px;
  span {
    color: var(--primary-color-200);
    font-family: var(--font-100);
    font-size: 18px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0em;
  }
}
div:hover {
  background: var(--light-color-200);
}
</style>
