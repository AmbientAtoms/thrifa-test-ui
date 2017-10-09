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
          <md-list class="md-dense" v-if="answer.id === item.id">
            <md-list-item v-for="(poll, pollIndex) in answer.options" :key="pollIndex">
              <md-checkbox name="answer"
                           v-model="poll.value"
                           v-if="item.multiple">
                {{ item.options[pollIndex].answer }}
              </md-checkbox>
              <md-radio name="'sdfafdfsd'"
                        v-model="poll.value"
                        md-value="poll.value"
                        v-else
                        @change="clearRadio(pollIndex)">
                {{ item.options[pollIndex].answer }}
              </md-radio>
            </md-list-item>
          </md-list>
        </md-card-content>

        <md-card-actions>
          <md-button v-text="'Submit'"
                     v-if="answer.id === item.id"
                     @click="submit" />
          <md-button v-text="'Answer'"
                     v-else
                     @click="toEdit(item, index)" />
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
      answer: {
        id: null,
        options: []
      },
      editQuestion: null
    }
  },
  computed: {
    questions () {
      return this.$store.state.questions.list
    }
  },
  methods: {
    toEdit (item, index) {
      this.answer.id = item.id
      this.answer.options = item.options.map(function (poll) {
        let object = {
          id: poll.id,
          value: false
        }
        return object
      })
      this.editQuestion = index
    },
    clearRadio (index) {
      for (let i = 0; i < this.answer.options.length; i++) {
        if (i !== index) {
          this.answer.options[i].value = false
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
