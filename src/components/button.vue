<template>
  <div class="button-button" v-bind:class="rootClassName">
    <span class="button-text"><span>Enter Evecloud</span></span>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    rootClassName: String,
  },
}
</script>

<style scoped>
.button-button {
  display: flex;
  padding: 12px 42px;
  position: relative;
  box-sizing: border-box;
  align-items: center;
  border-color: rgba(66, 141, 255, 1);
  border-style: solid;
  border-width: 2px;
  margin-right: 0;
  border-radius: 5px;
  margin-bottom: 0;
  justify-content: center;
  background-color: rgba(66, 141, 255, 1);
}
.button-text {
  color: rgba(255, 255, 255, 1);
  height: auto;
  font-size: 24px;
  align-self: auto;
  font-style: Medium;
  text-align: right;
  font-family: Poppins;
  font-weight: 500;
  line-height: 27.200000762939453px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

@media(max-width: 1600px) {
  .button-root-class-name {
    width: 100%;
    align-self: center;
  }
}
@media(max-width: 1200px) {
  .button-text {
    align-self: center;
    font-style: normal;
    text-align: center;
    font-weight: 300;
    line-height: 24px;
  }
  .button-root-class-name {
    width: 100%;
    align-self: center;
  }
}
@media(max-width: 991px) {
  .button-root-class-name {
    width: 100%;
    align-self: center;
  }
}
@media(max-width: 390px) {
  .button-root-class-name {
    width: 100%;
    position: 0px;
    align-self: center;
  }
}
@media(max-width: 320px) {
  .button-root-class-name {
    width: 100%;
    align-self: center;
  }
}
</style>
