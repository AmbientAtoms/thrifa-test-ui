<template>
  <div class="width">
    <md-layout md-column md-gutter
               v-for="(item, index) in questions" :key="index">
      <md-card v-if="!loading">
        <md-card-header>
          <div class="md-title"
               v-text="item.title" />
          <div class="md-subhead"
               v-text="item.subtitle" />
        </md-card-header>

        <md-card-content>
          <md-list class="md-dense"
                   v-if="answers !== null">
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
import { mapActions } from 'vuex'

export default {
  name: 'Questions_List',
  data () {
    return {
      answers: null
    }
  },
  computed: {
    questions () {
      return this.$store.state.questions.list
    },
    loading () {
      return this.$store.state.questions.loading
    }
  },
  created () {
    this.updateQuestions()
  },
  methods: {
    ...mapActions(['getQuestions']),
    clearRadio (index, poll) {
      for (let i = 0; i < this.answers[index].options.length; i++) {
        if (i !== poll) {
          this.answers[index].options[i].value = false
        }
      }
    },
    submit () {
      this.answers = null
    },
    async updateQuestions () {
      await this.getQuestions()
      if (this.questions !== null) {
        this.answers = this.questions.map(function (question) {
          let polls = question.options.map(function (poll) {
            return { id: poll.id, value: false }
          })
          return { id: question.id, options: polls }
        })
      }
    }
  }
}
</script>
