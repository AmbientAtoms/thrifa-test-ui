<template>
  <div class=height>
    <md-card v-for="(item, index) in questions" :key="index">
      <md-card-header>
        <div class="md-title">
          <h4 v-text="item.title" />
        </div>
      </md-card-header>

      <md-card-content>
      </md-card-content>

      <md-card-actions>
        <md-button>Login</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'Questions_List',
  data () {
    return {
    }
  },
  created () {
    console.log(this.$store.state.questions)
  },
  computed: {
    questions () {
      return this.$store.state.questions.list
    }
  }
}
</script>
