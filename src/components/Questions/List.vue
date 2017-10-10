<template>
  <div class="width">
    <md-layout md-column md-gutter
               v-for="(item, index) in questions"
               :key="index">
      <md-card v-if="!loading" :class="validation[item._id] === false ? 'md-warn' : ''">
        <md-card-header>
          <div class="md-title"
               v-text="item.title" />
          <div class="md-subhead"
               v-text="item.subtitle" />
        </md-card-header>

        <md-card-content v-if="answers !== null">
          <div v-for="(poll, pollIndex) in answers[index].options"
                        :key="pollIndex">
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
          </div>
        </md-card-content>

        <md-card-actions>
          <md-button v-text="'Delete'"
                     @click="remove(item._id)" />
          <md-button v-text="'Submit'"
                     @click="submit(index)"
                     :disabled="disabled(index)" />
        </md-card-actions>
      </md-card>
    </md-layout>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Questions_List',
  data () {
    return {
      answers: null
    }
  },
  computed: {
    ...mapState({
      questions: state => state.questions.list,
      loading: state => state.questions.loading,
      validation: state => state.questions.validation
    })
  },
  created () {
    this.updateQuestions()
  },
  methods: {
    ...mapActions(['getQuestions', 'validateQuestion', 'deleteQuestion']),
    clearRadio (index, poll) {
      for (let i = 0; i < this.answers[index].options.length; i++) {
        if (i !== poll) {
          this.answers[index].options[i].value = false
        }
      }
    },
    disabled (index) {
      if (this.answers !== null) {
        for (let i in this.answers[index].options) {
          if (this.answers[index].options[i].value !== false) return false
        }
      }
      return true
    },
    submit (index) {
      let form = {
        id: this.answers[index].id,
        options: []
      }
      this.answers[index].options.forEach(function (poll) {
        if (poll.value) form.options.push(poll.id)
      })
      this.validateQuestion(form)
    },
    async updateQuestions () {
      await this.getQuestions()
      if (this.questions !== null) {
        this.answers = this.questions.map(function (question) {
          let polls = question.options.map(function (poll) {
            return { id: poll._id, value: false }
          })
          return { id: question._id, options: polls }
        })
      }
    },
    remove (id) {
      this.deleteQuestion(id)
    }
  },
  watch: {
    validation: {
      handler: function (validation) {
        console.log(this.validation)
        if (this.validation !== {}) {
          this.$notify({
            title: 'Server error',
            type: 'success',
            text: 'See console'
          })
        }
      },
      deep: true
    }
  }
}
</script>
