import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyDEifB-r5cd0N_WdVsOQ5bvqf5SKJzDMNc',
  authDomain: 'bcc-org-list.firebaseapp.com',
  databaseURL: 'https://bcc-org-list-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'bcc-org-list',
  storageBucket: 'bcc-org-list.firebasestorage.app',
  messagingSenderId: '757814369143',
  appId: '1:757814369143:web:cae38aeab6cf4516bd5f72',
  measurementId: 'G-YHW65561GL',
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export default app;
