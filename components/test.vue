<template>
  <div v-if="modelTo.isVisibleWelcome">
    <div class="start-container">
      <div>
        <div class="start-text">
          <div class="inline-block margin-bottom-1">
            <div class="margin-0-48">
              <span>{{modelTo.welcomeObject.textOne}}</span>
            </div>
          </div>
          <div class="inline-block">
            <div class="margin-0-48">
              <span>{{modelTo.welcomeObject.textTwo}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      modelTo: {
        isVisibleWelcome: this.componentModel.isVisibleWelcome,
        welcomeObject: {
          textOne: this.componentModel.welcomeObject.textOne,
          textTwo: this.componentModel.welcomeObject.textTwo
        }
      }
    };
  },
  props: {
    componentModel: Object
  },
};
</script>

<style scoped>
@import "../content/css/welcome.css";
</style>