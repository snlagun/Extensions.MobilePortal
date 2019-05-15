<template>
  <div class="search-container">
    <div>
      <div class="horizontal-splitter-1"></div>
    </div>
    <div class="row">
      <div class="col-1">
        <a class="inline-block float-left">
          <div v-on:click="voice" class="inline-block search-icon-container">
            <voice-svg />
          </div>
        </a>
      </div>
      <div class="col-10">
        <div>
          <input
            class="inline-block search-input search-input-text width-100-percent"
            placeholder="Новый вопрос"
            v-model="searchText"
          >
        </div>
      </div>
      <div class="col-1">
        <a class="inline-block float-right">
          <div v-on:click="send" class="inline-block search-icon-container">
            <send-svg />
          </div>
         </a>
      </div>
    </div>
  </div>
</template>

<script>
import SendSvg from "../content/images/ic-send-24.svg";
import VoiceSvg from "../content/images/ic-keyboard-voice-24.svg";

export default {
  data: function() {
    return {
      searchText: ''
    };
  },
  components: {
    SendSvg,
    VoiceSvg,
  },
  methods: {
    voice(event){
      //this.$emit("voiceSearch");
    },
    send(){
      this.$emit("sendText", this.searchText);
      this.searchText = "";
    }
  }
};
</script>

<style scoped>
@import "../content/css/answer.css";
@import "../content/css/search.css";
</style>


