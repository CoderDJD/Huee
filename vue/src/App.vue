<template>
  <div id="app">
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <p>
      Lorem ipsum dolor sit amet, consectet. Lorem ipsum dolor sit amet,
      consectet. Lorem ipsum dolor sit amet, consectet. Lorem ipsum dolor sit
      amet, consectet.
    </p>
    <p id="b">
      Lorem ipsum dolor sit amet, consectet. Lorem ipsum dolor sit amet,
      consectet. Lorem ipsum dolor sit amet, consectet. Lorem ipsum dolor sit
      amet, consectet.
    </p>
    <lightButton text="Button" />
    <br />
    <lightButton text="Button" disabled="true" />
    <br />
    <darkButton text="Button" />
    <br />
    <darkButton text="Button" disabled="true" />
    <br />
    <toast text="Toast" />
  </div>
</template>

<script lang="ts">
import lightButton from "./components/button-light.vue";
import darkButton from "./components/button-dark.vue";
import toast from "./components/toast.vue";
export default {
  name: "app",
  components: {
    lightButton,
    darkButton,
    toast,
  },
};
</script>

<style lang="scss">
:root {
  --primary-color-100: #222233;
  --primary-color-200: #f5f5f5;
  --common-color-100: #5d7290;
  --dark-color-100: #fc5185;
  --dark-color-200: #3fc1c9;
  --light-color-100: #fd4d4d;
  --light-color-200: #fd4f69;
  --font-100: "Roboto", sans-serif;
  --font-200: "Ubuntu", sans-serif;
}
html,
body {
  background-color: #050510;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  padding: 1rem;
}
h1 {
  font-family: var(--font-100);
  font-weight: 700;
  font-size: 56px;
  color: var(--primary-color-200);
}
h2 {
  font-family: var(--font-100);
  font-weight: 700;
  font-size: 40px;
  color: var(--primary-color-200);
}
h3 {
  font-family: var(--font-100);
  font-weight: 700;
  font-size: 28px;
  color: var(--primary-color-200);
}
h4 {
  font-family: var(--font-100);
  font-weight: 700;
  font-size: 20px;
  color: var(--primary-color-200);
}
p {
  font-family: var(--font-200);
  font-weight: 400;
  font-size: 20px;
  color: var(--primary-color-200);
}
p#b {
  font-weight: 700;
}
</style>
