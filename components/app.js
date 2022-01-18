let PlanPickerItemComponent = {
  template: '#plan-picker-item-template',
  props: {
    name: {
      type: String,
      required: true
    },
    selectedPlan: {
      type: String
    }
  },
  computed: {
    isSelected() {
      return this.name === this.selectedPlan
    }
  },
  methods: {
    select() {
      this.$emit('select', this.name)
    }
  }
}

let PlanPickerComponent = {
  template: '#plan-picker-template',
  components: {
    'plan-picker-item': PlanPickerItemComponent
  },
  data() {
    return {
      plans: ['The component', 'Component2', 'component3'],
      selectedPlan: null
    }
  },
  methods: {
    selectPlan(plan) {
      this.selectedPlan = plan
    }
  }
}


new Vue({
  el: '#app',
  components: {
    'plan-picker': PlanPickerComponent
  }
})