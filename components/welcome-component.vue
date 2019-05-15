<template>
  <div v-if="isVisibleWelcome">
    <div class="start-container">
      <div>
        <div class="start-text">
          <div class="inline-block margin-bottom-1">
            <div class="margin-0-48">
              <span>{{welcomeObject.textOne}}</span>
            </div>
          </div>
          <div class="inline-block">
            <div class="margin-0-48">
              <span>{{welcomeObject.textTwo}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {chatBotAppConfig} from '../scripts/config.js'

export default {
  props:{
    isVisibleWelcome: Boolean,
  },
  data: function() {
    return {
      welcomeObject: chatBotAppConfig.welcomeObject
    };
  }
};
</script>

<style scoped>
@import "../content/css/welcome.css";
</style>