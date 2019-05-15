<template>
  <div>
    <div v-if="model.isNewNode">
      <div class="horizontal-splitter-1 clear-both"></div>
    </div>
    <div class="question-container clear-both">
      <div>
        <div class="question-body">
          <span class="header-text">{{model.questionText}}</span>
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
        isNewNode: this.componentModel.isNewNode,
        questionText: this.componentModel.questionText
      }
    };
  },
  props: {
    componentModel: Object
    // isNewNode: Boolean,
    // questionText: String
  }
};
</script>

<style scoped>
@import "../content/css/question.css";
</style>


