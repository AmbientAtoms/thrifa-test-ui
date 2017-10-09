<template>
  <div class="width">
    <md-layout md-column md-gutter>
      <md-card>
        <md-card-header>
          <div class="md-title"
               v-text="'Create Question'" />
        </md-card-header>

        <md-card-content>
          <md-input-container>
            <label v-text="'Title'" />
            <md-input v-model="answer.title"
                      required />
          </md-input-container>
          <md-input-container>
            <label v-text="'Subtitle'" />
            <md-input v-model="answer.subtitle"
                      required />
          </md-input-container>
          <md-switch v-model="answer.multiple"
                     id="my-test1"
                     name="my-test1"
                     required>
            Multiple
            </md-switch>
          <h3>Options:</h3>
          <md-input-container v-for="(poll, pollIndex) in answer.options" :key="pollIndex">
            <label v-text="`Option ${pollIndex + 1}`"/>
            <md-input v-model="poll.answer"
                      required
                      @change="addPoll(poll)" />

            <md-button class="md-icon-button"
                       @click="poll.valid = !poll.valid">
              <md-icon v-if="poll.valid">check_circle</md-icon>
              <md-icon v-else>check</md-icon>
            </md-button>

            <md-button class="md-icon-button"
                       v-if="answer.options.length > 1"
                       @click="removePoll(pollIndex)" >
              <md-icon>clear</md-icon>
            </md-button>
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
const Answer = {
  title: null,
  subtitle: null,
  multiple: true,
  options: [
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
  methods: {
    addPoll (poll) {
      let count = this.answer.options.length
      if (poll !== null && count > 0 && this.answer.options[count - 1].answer !== null) {
        this.answer.options.push({ answer: null, valid: false })
      }
    },
    removePoll (index) {
      this.answer.options.splice(index, 1)
    },
    submit () {
      this.answer.id = null
      this.answer.options = []
    }
  }
}
</script>
