<template>
  <div class="width">
    <md-layout md-column md-gutter v-for="(item, index) in questions" :key="index">
      <md-card>
        <md-card-header>
          <div class="md-title"
               v-text="item.title" />
          <div class="md-subhead"
               v-text="item.subtitle" />
        </md-card-header>

        <md-card-content>
          <md-list class="md-dense">
            <md-list-item v-for="(poll, pollIndex) in answers[index].options" :key="pollIndex">
              <md-checkbox name="answer"
                           v-model="poll.value"
                           v-if="item.multiple">
                {{ item.options[pollIndex].answer }}
              </md-checkbox>
              <md-radio name="'sdfafdfsd'"
                        v-model="poll.value"
                        md-value="true"
                        v-else
                        @change="clearRadio(index, pollIndex)">
                {{ item.options[pollIndex].answer }}
              </md-radio>
            </md-list-item>
          </md-list>
        </md-card-content>

        <md-card-actions>
          <md-button v-text="'Submit'"
                     @click="submit" />
        </md-card-actions>
      </md-card>
    </md-layout>
  </div>
</template>

<script>
export default {
  name: 'Questions_List',
  data () {
    return {
      answers: [],
      answer: {
        id: null,
        options: []
      }
    }
  },
  computed: {
    questions () {
      return this.$store.state.questions.list
    }
  },
  created () {
    this.answers = this.questions.map(function (question) {
      let polls = question.options.map(function (poll) {
        return { id: poll.id, value: false }
      })
      return { id: question.id, options: polls }
    })
  },
  methods: {
    clearRadio (index, poll) {
      for (let i = 0; i < this.answers[index].options.length; i++) {
        if (i !== poll) {
          this.answers[index].options[i].value = false
        }
      }
    },
    submit () {
      this.answer.id = null
      this.answer.options = []
    }
  }
}
</script>
