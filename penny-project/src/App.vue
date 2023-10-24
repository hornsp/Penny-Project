
<template>
  <body>
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
        <SelectButtonCustom v-model="breakfastValue" :options="breakfastOptions" aria-labelledby="basic" />
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
export default {
  setup() {
    const handleButtonClick = () => {
      console.log('Button clicked!');
    };
    return {
      handleButtonClick,
    };
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
  methods: {
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
  background: cover;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
