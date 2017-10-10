<template>
  <div class="width">
    <md-layout md-column md-gutter>
      <md-card>
        <md-card-header>
          <div class="md-title"
               v-text="'Create Question'" />
        </md-card-header>

        <md-card-content>
          <md-input-container :class="{'md-input-invalid': errors.has('title')}">
            <label v-text="'Title'" />
            <md-input v-model="answer.title"
                      v-validate="'required|min:2'"
                      data-vv-name="title"
                      :has-error="errors.has('title')"
                      required />
            <span class="md-error">{{errors.first('title')}}</span>
          </md-input-container>
          <md-input-container :class="{'md-input-invalid': errors.has('subtitle')}">
            <label v-text="'Subtitle'" />
            <md-input v-model="answer.subtitle"
                      v-validate="'required|min:2'"
                      data-vv-name="subtitle"
                      :has-error="errors.has('subtitle')"
                      required />
            <span class="md-error">{{errors.first('subtitle')}}</span>
          </md-input-container>
          <md-switch v-model="answer.multiple"
                     id="my-test1"
                     name="my-test1"
                     @change="clearMultiple()"
                     required>
            Multiple
          </md-switch>
          <h3>Options:</h3>
          <md-input-container v-for="(poll, pollIndex) in answer.options"
                              :key="pollIndex"
                              :class="{'md-input-invalid': errors.has(`option${pollIndex}`)}">
            <label v-text="`Option ${pollIndex + 1}`"/>
            <md-input v-model="poll.answer"
                      v-validate="'required|min:1'"
                      :data-vv-name="`option${pollIndex}`"
                      :has-error="errors.has(`option${pollIndex}`)"
                      required
                      @change="addPoll(poll)" />

            <md-button class="md-icon-button"
                       @click="poll.valid = !poll.valid; clearMultiple(poll)">
              <md-icon v-if="poll.valid">check_circle</md-icon>
              <md-icon v-else>check</md-icon>
              <md-tooltip md-direction="top">Set as true answer</md-tooltip>
            </md-button>

            <md-button class="md-icon-button"
                       v-if="answer.options.length > 2"
                       @click="removePoll(pollIndex)" >
              <md-icon>clear</md-icon>
              <md-tooltip md-direction="top">Delete answer</md-tooltip>
            </md-button>
            <span class="md-error">{{errors.first(`option ${pollIndex + 1}`)}}</span>
          </md-input-container>
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

const Answer = {
  title: null,
  subtitle: null,
  multiple: true,
  options: [
    {
      answer: null,
      valid: false
    },
    {
      answer: null,
      valid: false
    }
  ],
  valid: [
    null
  ]
}

export default {
  name: 'Questions_List',
  data () {
    return {
      answer: {}
    }
  },
  created () {
    this.answer = Answer
  },
  computed: {
    loading () {
      return this.$store.state.questions.loading
    }
  },
  methods: {
    ...mapActions(['createQuestion']),
    addPoll (poll) {
      let count = this.answer.options.length
      if (poll !== null && count > 0 &&
          this.answer.options[count - 1].answer !== null) {
        this.answer.options.push({ answer: null, valid: false })
      }
    },
    removePoll (index) {
      this.answer.options.splice(index, 1)
    },
    async create () {
      const submit = await this.createQuestion(this.answer)
      if (submit === true) {
        this.$notify({
          title: 'Success',
          type: 'success',
          text: 'Question has been created'
        })
      } else {
        this.$notify({
          title: 'Wrong',
          type: 'error',
          text: 'Something wrong (see console)'
        })
      }
    },
    submit () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.create()
        } else {
          this.$notify({
            title: 'Error',
            type: 'error',
            text: 'Check all the fields!'
          })
        }
      })
    },
    validate () {
      this.$validator.validateAll().then((result) => {
        alert(`Validation Result: ${result}`)
      })
    },
    clearMultiple (ind) {
      if (this.answer.multiple === false) {
        this.answer.options.forEach(function (poll, index) {
          if (ind !== poll) poll.valid = false
        })
      }
    }
  }
}
</script>
