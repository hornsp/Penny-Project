
import { createApp } from 'vue';
import App from './App.vue';

// Import PrimeVue components and styles
import './assets/css/style.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/saga-blue/theme.css';

import Card from 'primevue/card';
import Clock from './components/Clock.vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import SelectButton from 'primevue/selectbutton';

// Create the Vue app instance and register PrimeVue components
const app = createApp(App);

app.component('CardCustom', Card);
app.component('ClockCustom', Clock);
app.component('ButtonCustom', Button);
app.component('InputTextCustom', InputText)
app.component('SelectButtonCustom', SelectButton)


// Mount the app
app.mount('#app');
