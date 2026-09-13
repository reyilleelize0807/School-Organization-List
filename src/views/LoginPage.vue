<template>
  <ion-page>
    <ion-content :fullscreen="true" class="login-content">
      <main class="login-shell">
        <section class="login-card">
          <div class="login-heading"><div class="mini-seal"><img :src="'/baco-seal.png'" alt="Baco Community College seal" @error="hideLogo" /><span>B</span></div><div><p class="eyebrow">Baco Community College</p><h2>Welcome back</h2></div></div>
          <p class="login-subtitle">Sign in to manage your organization members.</p>
          <form @submit.prevent="login">
            <ion-input v-model="email" type="email" label="School email" label-placement="stacked" fill="outline" placeholder="Enter your school email" required />
            <ion-input v-model="password" :type="showPassword ? 'text' : 'password'" label="Password" label-placement="stacked" fill="outline" placeholder="Enter your password" required><ion-button slot="end" fill="clear" class="password-toggle" type="button" :aria-label="showPassword ? 'Hide password' : 'Show password'" @click="showPassword = !showPassword"><ion-icon :icon="showPassword ? eyeOffOutline : eyeOutline" /></ion-button></ion-input>
            <div class="form-options"><label><input v-model="rememberMe" type="checkbox" /> Remember me</label><button type="button" class="forgot-button">Forgot password?</button></div>
            <p v-if="loginError" class="login-error">{{ loginError }}</p>
            <ion-button type="submit" expand="block" class="login-button">Sign in <ion-icon slot="end" :icon="arrowForwardOutline" /></ion-button>
          </form>
        </section>
      </main>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { IonButton, IonContent, IonIcon, IonInput, IonPage } from '@ionic/vue';
import { arrowForwardOutline, eyeOffOutline, eyeOutline } from 'ionicons/icons';

const router = useRouter();
const email = ref('');
const password = ref('');
const rememberMe = ref(false);
const loginError = ref('');
const showPassword = ref(false);
function login() { if (!email.value.trim() || !password.value) { loginError.value = 'Please enter your email and password.'; return; } loginError.value = ''; localStorage.setItem('baco-member-list-auth', 'true'); router.push('/home'); }
function hideLogo(event: Event) { (event.target as HTMLImageElement).style.display = 'none'; }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@700;800&display=swap');
.login-content { --background: #f8f6f2; }.login-shell { display: grid; grid-template-columns: minmax(320px, 0.9fr) minmax(360px, 0.75fr); min-height: 100%; max-width: 1120px; margin: auto; align-items: center; gap: 90px; padding: 54px 56px; }.school-panel { position: relative; min-height: 560px; display: flex; flex-direction: column; justify-content: center; padding: 70px; overflow: hidden; background: #b90812; color: #fff; border-radius: 18px; box-shadow: 0 22px 55px rgba(120, 24, 18, .14); }.school-panel::before, .school-panel::after { content: ''; position: absolute; border: 1px solid rgba(255,255,255,.2); border-radius: 50%; }.school-panel::before { width: 430px; height: 430px; right: -210px; top: -105px; }.school-panel::after { width: 290px; height: 290px; right: -140px; top: -35px; }.school-kicker, .eyebrow { font-size: 10px; letter-spacing: .14em; text-transform: uppercase; }.school-kicker { color: #ffd746; margin: 0 0 23px; }.school-panel h1 { position: relative; z-index: 1; margin: 0; font: 800 clamp(34px, 4vw, 56px)/1.03 'Manrope', sans-serif; text-transform: uppercase; letter-spacing: -.04em; }.school-copy { position: relative; z-index: 1; margin: 32px 0 20px; color: #fff7d0; font-size: 18px; line-height: 1.45; }.green-line { position: relative; z-index: 1; width: 76px; height: 6px; background: #208844; border-radius: 10px; }.school-year { color: #ffd746; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; font-size: 11px; }.sunburst { position: absolute; z-index: 0; right: 55px; top: 74px; width: 160px; height: 160px; border: 12px solid #ffd600; border-radius: 50%; opacity: .9; }.sunburst::before { content: ''; position: absolute; inset: 25px; background: #ffd600; border-radius: 50%; }.ray { position: absolute; left: 70px; top: -37px; width: 18px; height: 220px; background: #ffd600; transform-origin: center; }.ray-two { transform: rotate(30deg); }.ray-three { transform: rotate(60deg); }.ray-four { transform: rotate(90deg); }.ray-five { transform: rotate(120deg); }.ray-six { transform: rotate(150deg); }.book-mark { position: absolute; z-index: 1; inset: 48px; display: grid; place-items: center; color: #b90812; font-size: 36px; }
.login-card { max-width: 430px; width: 100%; }.login-heading { display: flex; align-items: center; gap: 14px; }.mini-seal { display: grid; place-items: center; position: relative; width: 48px; height: 48px; border: 4px solid #b90812; border-radius: 50%; background: #ffd600; color: #b90812; font: 800 22px 'Manrope', sans-serif; overflow: hidden; }.mini-seal img { position: absolute; width: 100%; height: 100%; object-fit: contain; }.eyebrow { color: #7b8881; margin: 0 0 5px; }.login-card h2 { margin: 0; color: #1f3028; font: 800 30px 'Manrope', sans-serif; letter-spacing: -.04em; }.login-subtitle { color: #75837b; font-size: 14px; margin: 20px 0 28px; }.login-card form { display: grid; gap: 17px; }.form-options { display: flex; justify-content: space-between; align-items: center; color: #75837b; font-size: 12px; }.form-options label { display: flex; gap: 7px; align-items: center; }.form-options input { accent-color: #b90812; }.forgot-button { border: 0; background: transparent; color: #b90812; font: 600 12px 'DM Sans', sans-serif; cursor: pointer; }.login-button { --background: #b90812; --background-hover: #93070e; --border-radius: 7px; text-transform: none; font-weight: 700; height: 48px; margin: 5px 0 0; }.demo-note { color: #9ba39e; font-size: 11px; text-align: center; margin-top: 24px; }
@media (max-width: 760px) { .login-shell { display: block; padding: 22px 18px 35px; }.school-panel { min-height: 300px; padding: 35px 30px; margin-bottom: 35px; border-radius: 14px; }.school-panel h1 { font-size: 34px; }.school-copy { margin: 20px 0 14px; font-size: 15px; }.sunburst { right: 20px; top: 30px; transform: scale(.68); transform-origin: top right; }.login-card { margin: auto; max-width: 480px; } }
.login-shell { grid-template-columns: 1fr; max-width: 720px; padding: 54px 30px; }
.school-panel { display: none; }
.login-error { color: #b90812; font-size: 12px; margin: -5px 0 0; }
.password-toggle { --color: #75837b; --padding-start: 8px; --padding-end: 8px; margin: 0; }
@media (max-width: 760px) { .login-shell { display: block; padding: 22px 18px 35px; } .login-card { margin: auto; max-width: 480px; } }
</style>
