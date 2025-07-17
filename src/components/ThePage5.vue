<template>
  <div class="sayfa bg-black">
    <q-layout view="hHh lpR fFf" style="max-width: 1560px">
      <q-page-container class="bg-black-50 text-left">
        <q-scroll-area
          style="height: 100vh"
          class="bg-grey-3 round-borders shadow-2"
        >
          <q-page>
            <div class="giris q-pa-md">
              <div style="font-size: 20px; font-weight: bold">Hoş geldiniz</div>
              <div class="text-subtitle1">
                Hızlı ve güvenli alışverişe giriş yapın!
              </div>
              <q-form @submit.prevent="onSubmit" class="q-gutter-md q-mt-md">
                <q-input
                  v-model="email"
                  placeholder="E-mail adresiniz"
                  color="white"
                  style="border: 1px solid black"
                  :error="!isEmailValid && email !== ''"
                  error-message="E-mail adresiniz uygun formatta olmalıdır."
                  required
                />
                <q-input
                  v-model="password"
                  placeholder="Şifreniz"
                  color="white"
                  type="password"
                  style="border: 1px solid black"
                  required
                />
                <q-btn class="login" type="submit" @click="onSubmit"
                  >Giriş Yap</q-btn
                >
                <div class="row">
                  <q-checkbox
                    v-model="right"
                    class="col-8"
                    color="pink"
                    checked-icon="square"
                    label="Beni Hatırla"
                    required
                  />
                  <router-link to="" class="text-black col-4 q-my-md"
                    >Şifremi Unuttum</router-link
                  >
                </div>
              </q-form>
              <div class="line col-4"></div>
              <div class="text-subtitle1 text-bold q-mt-md">
                HENÜZ ÜYE DEĞİL MİSİNİZ?
              </div>
              <div class="text-subtitle1">Kolayca üye olabilirsiniz.</div>
              <q-btn
                class="buton q-mt-md q-dark"
                label="Hemen Üye Ol"
                to="/YeniUyelik"
              />
              <q-btn
                class="buton q-mt-md"
                label="Facebook İle Bağlan"
                color="blue-10"
              />
              <q-btn
                class="buton q-my-md"
                label="Google İle Bağlan"
                color="primary"
              />
            </div>
          </q-page>
        </q-scroll-area>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script lang="ts">
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'GirisYap',
  setup() {
    const email = ref<string>('');
    const password = ref<string>('');
    const remember = ref<boolean>(false);
    const router = useRouter();

    const isEmailValid = computed(() => {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email.value).toLowerCase());
    });

    async function onSubmit(e: Event) {
      e.preventDefault();
      const db = getFirestore();
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('email', '==', email.value));
      const querySnapshot = await getDocs(q);

      let loginSuccessful = false;
      querySnapshot.forEach((doc) => {
        if (doc.data().password === password.value) {
          console.log('Giriş başarılı!');
          loginSuccessful = true;
        }
      });

      if (loginSuccessful) {
        router.push('/anasayfa'); // Giriş başarılı olduğunda '/help' sayfasına yönlendir
      } else {
        console.log('Hatalı şifre!');
      }
    }

    return {
      email,
      password,
      onSubmit,
      right: ref(false),
      remember,
      isEmailValid,
    };
  },
};
</script>

<style scoped>
.sayfa {
  text-align: -webkit-center;
  display: block;
}
.bg-black-50 {
  background-color: rgba(0, 0, 0, 0.5);
}

.giris {
  width: 31%;
  background-color: white;
  padding-top: 50px;
  padding-right: 30px;
  padding-left: 30px;
  margin-left: auto;
  padding-bottom: 9%;
}
.buton {
  width: 100%;
  height: 40px;
  font-weight: bold;
  font-size: 16px;
}

.line {
  flex-grow: 1;
  height: 1px;
  margin-top: 32px;
  background: rgba(192, 192, 192, 0.473);
}

.login {
  width: 95%;
  background-color: rgb(240, 229, 26);
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-transform: capitalize;
}
</style>
