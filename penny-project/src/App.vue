
<template>
  <body id="main-card">
  <div class="p-d-flex p-jc-center p-ai-center">
    <CardCustom title="PrimeVue Card Example" style="width: 300px">
      <template #content>
        <ClockCustom/>        
        <p>{{ walkStatus }}</p>
        <ButtonCustom @click="changePennyWalkStatus" label="Walker Counter" icon="pi pi-plus"/>
      </template>
    </CardCustom>
    <CardCustom title="PrimeVue Card Example" style="width: 300px">
      <template #content>
        <p>Has Penny had Breakfast?</p>
        <SelectButtonCustom @click="trackBreakfast" v-model="breakfastValue" :options="breakfastOptions" aria-labelledby="basic" />
      </template>
    </CardCustom>
    <CardCustom title="PrimeVue Card Example" style="width: 300px">
      <template #content>
        <p>Has Penny had Dinner?</p>
        <SelectButtonCustom v-model="dinnerValue" :options="dinnerOptions" aria-labelledby="basic" />
      </template>
    </CardCustom>
  </div>
</body>
</template>

<script>
import axios from 'axios';

export default {
  setup() {
    
  },
  data(){
    return {
      walkCounter: 0,
      walkStatus: 'Has penny been walked today?',
      breakfastValue: 'No',
      dinnerValue: 'No',
      breakfastOptions: ['No', 'Yes'],
      dinnerOptions: ['No', 'Yes'],
    };
  },
  created(){
    this.loadBreakfastButtonState();
  },
  methods: {
    async trackBreakfast() {
      try {
        await axios.post('/api/track/breakfast/update', { button: 'yes' });
      } catch (error) {
        console.error('Error:', error);
      }
    },
    async loadBreakfastButtonState(){
      try {
        const response = await axios.get('/api/get_button_state/breakfast');
        this.buttonState = response.data.button_state;
      } catch (error) {
        console.error('Error:', error);
      }
    },
    changePennyWalkStatus() {
      this.walkCounter += 1;
      this.walkStatus = `Penny has been walked ${this.walkCounter} time${this.walkCounter === 1 ? '.' : 's.'}`;
    },
  },
};
</script>

<style scoped>
body{
  background-image: url('./assets/PennyPicture.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 50rem;
}
</style>
