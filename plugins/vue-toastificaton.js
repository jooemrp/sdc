import Toast from 'vue-toastification';
// import 'vue-toastification/dist/index.css'; // if needed
import '@/assets/css/vue-toastification.css'; // if needed

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Toast);
});
