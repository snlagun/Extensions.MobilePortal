<template>
  <div>
    <w-c v-bind:is-visible-welcome="isVisibleWelcome"/>
    <s-c v-on:sendText="sendQuestion"/>
    <!-- <q-c v-bind:is-new-question="false" question-text="Вопрос?"/> -->
    <!-- <a-c v-bind:is-talk-end="false" answer-text="Ответ с продолжением разговора"/> -->
    <!-- <q-c v-bind:is-new-question="true" question-text="Новый вопрос"/> -->
    <!-- <a-c v-bind:is-talk-end="true" answer-text="Ответ с окончанием разговора"/> -->

    <component
      v-for="(item, index) in items"
      v-bind:key="'item-' + index"
      v-bind:is="item.component"
      v-bind:component-model="item.model"
    />
  </div>
</template>
    
<script>
import Welcome from "../components/welcome-component.vue";
import Search from "../components/search-component.vue";
import Question from "../components/question-component.vue";
import Answer from "../components/answer-component.vue";
import CheckBox from "../components/check-box-component.vue";
import { chatBotAppConfig } from "../scripts/config.js";
//https://css-tricks.com/creating-vue-js-component-instances-programmatically/
//https://laracasts.com/discuss/channels/vue/extend-vue-component-with-other-template-and-methods
export default {
  data: function() {
    return {
      items: [],
      isVisibleWelcome: true
    };
  },
  components: {
    "w-c": Welcome,
    "s-c": Search,
    "q-c": Question,
    "a-c": Answer,
    "c-b-c": CheckBox
  },
  methods: {
    sendQuestion(searchText) {
      if (searchText === undefined || searchText === null || searchText.length === 0) return;

      //Прячем приветствие
      if (this.isVisibleWelcome) this.isVisibleWelcome = false;

      var isNewNode = this.items.length !== 0 ? true : false;
      //Блок вопроса
      this.items.push(this.questionBuilder(searchText, isNewNode));

      //Блок ответа. Строим запрос.
      //this.$http = Axios
      this.$http
        .post(this.urlBuilder(), {
          question: searchText
        })
        .then(response => {
          console.log(response.data);
          var answer = this.answerBuilder(response.data);
          if (answer === null) return;
          this.items.push(answer);
        });
    },

    questionBuilder(searchText, isNewNode) {
      return {
        component: "q-c",
        model: {
          isNewNode: isNewNode,
          questionText: searchText
        }
      };
    },

    urlBuilder() {
      var url = "";
      if (chatBotAppConfig.localTest) url += "https://client.systtech.ru";
      else url += baseUrl;
      url +=
        chatBotAppConfig.chatBotController +
        chatBotAppConfig.chatBotSendQuestion;
      return url;
    },

    answerBuilder(data) {
      if (data === undefined || data === null) return null;

      if (data.suggestions === undefined || data.suggestions === null)
        return null;

      if (data.suggestions.length === 0) return null;

      switch (data.suggestions[0].answer.type) {
        case "checklist":
          return {
            component: "c-b-c",
            model:{
              checkBoxText: "Попробуйте следующие рекомендации и отметьте, которые Вам помогли:",
              checkBoxObject: data.suggestions[0].answer.answer,
            }
          };
          break;
        default:
          return {
            component: "a-c",
            model: {
              answerText: data.suggestions[0].answer,
              isTalkEnd: data.suggestions[0].isTalkEnd
            }
          };
      }
    }
  }
};
</script>

<style>
@import "../content/css/common.css";
</style>