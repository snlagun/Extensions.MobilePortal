<template>
  <div
    class="answer-container-common clear-both"
    v-bind:class="{'answer-container-full': model.isTalkEnd, 'answer-container-half': !model.isTalkEnd}"
  >
    <div
      class="answer-header-container"
      v-bind:class="{'answer-header-container-green': model.isTalkEnd}"
    >
      <span class="header-text">{{model.answerText}}</span>
    </div>

    <div v-if="model.isTalkEnd">
      <div>
        <div class="row">
          <div class="col-3">
            <button
              type="button"
              class="float-left answer-button-half answer-button-common answer-button-helped"
            >
              <span class="answer-button-text">Помогло</span>
            </button>
          </div>
          <div class="col-9">
            <button
              type="button"
              class="float-right answer-button-half answer-button-common answer-button-yes"
            >
              <span class="answer-button-text">Не помогло, связаться с поддержкой</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <div class="row">
        <div class="col-6">
          <button
            type="button"
            class="col-12 float-left answer-button answer-button-common answer-button-yes answer-button-text"
          >
            <span>Да</span>
          </button>
        </div>
        <div class="col-6">
          <button
            type="button"
            class="col-12 float-right answer-button answer-button-common answer-button-no answer-button-text"
          >
            <span>Нет</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      model: {
        isTalkEnd: this.componentModel.isTalkEnd,
        answerText: this.componentModel.answerText
      }
    };
  },
    props:{
      componentModel: Object
      // isTalkEnd: Boolean,
      // answerText: String,
    },
}
</script>

<style scoped>
@import "../content/css/answer.css";
</style>


