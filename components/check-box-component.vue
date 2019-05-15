<template>
  <div class="answer-container-common answer-container-half clear-both">
    <div class="answer-header-container">
      <span class="header-text">{{model.checkBoxText}}</span>
    </div>
    <div class="check-box-container">
      <div class="horizontal-splitter-8"></div>

      <b-form-checkbox
        v-for="(checkBox, index) in model.checkBoxObject"
        v-bind:id="checkBox.guid"
        v-bind:key="'checkBox-' + index"
        v-bind:checked="checkBox.check"
        v-bind:value="checkBox.text"
        class="check-box-element"
        stacked
      >
        <span class="check-box-text">{{checkBox.text}}</span>
      </b-form-checkbox>
      <!-- <div v-for="(checkBox, index) in model.checkBoxObject" v-bind:key="'checkBox-' + index">
        <div class="checkbox checkbox-primary">
          <input
            v-bind:id="checkBox.guid"
            type="checkbox"
            v-bind:checked="checkBox.check"
            v-bind:value="checkBox.text"
          >
          <label v-bind:for="checkBox.guid">
            <span class="check-box-text">{{checkBox.text}}</span>
            <i class="fas fa-check"></i>
          </label>
        </div>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input type="checkbox" class="form-check-input" value>Начните/завершите визит в торговую точку вне помещения
        </label>
      </div>-->
      <div class="horizontal-splitter-8"></div>
    </div>
    <div class="check-box-button-container">
      <button type="button" class="check-box-button">
        <span class="answer-button-text">Выбрать</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      model: {
        checkBoxText: this.componentModel.checkBoxText,
        checkBoxObject: this.componentModel.checkBoxObject
      }
    };
  },
  props: {
    componentModel: Object
  }
};
</script>

<style scoped>
@import "../content/css/check-box.css";
</style>