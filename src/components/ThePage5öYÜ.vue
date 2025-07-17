<template>
  <div class="sayfa bg-black">
    <div class="q-pa-md bg-white" style="max-width: 1560px">
      <div class="row bg-white justify-center">
        <div class="line col-4"></div>
        <div class="bg-white col-3 q-px-md justify-center">
          <div class="title q-ma-md text-white">Yeni Üyelik</div>
        </div>
        <div class="line col-4"></div>
      </div>

      <q-card-section>
        <form @submit.prevent="submitForm">
          <div class="row">
            <div class="col-0">Adı</div>
            <q-input
              class="col-11"
              style="width: 40%; margin-left: 30%"
              outlined
              v-model="user.firstName"
              required
            />
          </div>

          <div class="row">
            <div class="col-0">Soyadı</div>
            <q-input
              class="col-11"
              style="width: 40%; margin-left: 30%"
              v-model="user.lastName"
              outlined
              required
            />
          </div>

          <div class="row">
            <div class="col-0">Email</div>
            <q-input
              class="col-11"
              style="width: 40%; margin-left: 30%"
              v-model="user.email"
              outlined
              type="email"
              required
            />
          </div>

          <div class="row">
            <div class="col-0">Şifre</div>
            <q-input
              class="col-11"
              style="width: 40%; margin-left: 30%"
              v-model="user.password"
              outlined
              type="password"
              required
            />
          </div>

          <div class="row">
            <div class="col-0">Cinsiyet</div>
            <div class="col-11">
              <q-checkbox
                checked-icon="square"
                color="pink"
                :model-value="isGenderSelected('female')"
                @update:model-value="updateGender('female')"
                label="Kadın"
              />
              <q-checkbox
                checked-icon="circle"
                color="pink"
                :model-value="isGenderSelected('male')"
                @update:model-value="updateGender('male')"
                label="Erkek"
              />
              <q-checkbox
                checked-icon="square"
                color="pink"
                :model-value="isGenderSelected('others')"
                @update:model-value="updateGender('others')"
                label="Belirtmek İstemiyorum"
              />
            </div>
          </div>

          <div class="row">
            <div class="col-0">Cep Telefonu</div>
            <q-input
              class="col-11"
              style="width: 40%; margin-left: 30%"
              label="(5XX) XXX XX XX"
              v-model="user.phoneNumber"
              outlined
              type="tel"
              required
            />
          </div>

          <q-card-section
            class="column"
            style="margin-left: 30%; margin-right: 380px"
          >
            <q-checkbox
              checked-icon="square"
              color="pink"
              v-model="user.acceptTerms"
              label="Aydınlatma Metninde belirtilen ilkeler nezdinde Elektronik Ticaret İletisi almak istiyorum."
              required
            />

            <q-checkbox
              checked-icon="square"
              color="pink"
              style="text-decoration: underline; text-decoration-color: black"
              v-model="user.acceptPrivacy"
              label="Üyelik sözleşmesini kabul ediyorum."
              required
            />

            <q-checkbox
              checked-icon="square"
              color="pink"
              style="text-decoration: underline; text-decoration-color: black"
              v-model="user.readPrivacyText"
              label="Kişisel verilerin işlenmesine ilişkin Aydınlatma Metnini okudum."
              required
            />
            <div
              style="
                border: 1px solid grey;
                padding: 10px;
                background-color: #f2f1f1;
                height: 80px;

                width: 60%;

                display: flex;
                justify-content: space-between;
              "
            >
              <div style="display: flex; align-items: center">
                <input
                  type="checkbox"
                  id="robot"
                  name="robot"
                  style="margin-right: 10px"
                />
                <label class="cursor-pointer" for="robot"
                  >Ben robot değilim</label
                >
                <div>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/ad/RecaptchaLogo.svg"
                    style="height: 60%; width: 60%; margin-left: 40%"
                  />
                </div>
              </div>
            </div>
          </q-card-section>

          <q-card-actions align="right" style="margin-right: 30%">
            <q-btn
              label="İptal"
              text-color="grey"
              style="background-color: #eee; text-size-adjust: 12px"
              @click="cancelForm"
            />
            <q-btn
              type="submit"
              label="Kaydet"
              label-color="white"
              text-color="white"
              style="background-color: #f9ec11"
            />
          </q-card-actions>
        </form>
        <div class="bg" style="height: 388px" />
      </q-card-section>
    </div>
  </div>
</template>

<script>
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { useRouter } from 'vue-router';

const firebaseConfig = {
  apiKey: 'AIzaSyDUfS_Ibm942vBNJ82AXJAGCmSEcD-YEDo',
  authDomain: 'web2final-6c78b.firebaseapp.com',
  projectId: 'web2final-6c78b',
  storageBucket: 'web2final-6c78b.appspot.com',
  messagingSenderId: '407093912037',
  appId: '1:407093912037:web:d73d5ddcbc76c5401f4f0c',
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default {
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        gender: '',
        phoneNumber: '',
        acceptTerms: false,
        acceptPrivacy: false,
        readPrivacyText: false,
      },
    };
  },
  setup() {
    const router = useRouter(); // vue-router örneğini alın
    return { router }; // setup fonksiyonundan döndürün
  },

  methods: {
    isGenderSelected(gender) {
      return this.user.gender === gender;
    },
    updateGender(gender) {
      this.user.gender = gender;
    },
    async submitForm() {
      try {
        await setDoc(doc(db, 'users', new Date().toISOString()), {
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          email: this.user.email,
          gender: this.user.gender,
          phoneNumber: this.user.phoneNumber,
          password: this.user.password,
          acceptTerms: this.user.acceptTerms,
          acceptPrivacy: this.user.acceptPrivacy,
          readPrivacyText: this.user.readPrivacyText,
          createdAt: new Date(),
        });
        this.router.push('/GirisYap');
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
.sayfa {
  text-align: -webkit-center;
  display: block;
}
.title {
  background: url(https://ideacdn.net/shop/cd/03/themes/selftpl_5f290a69cb6bd/assets/images/products-header-bg.svg?revision=1658931379)
    no-repeat center;
  background-size: cover;
  font-size: 18px;
  height: 2.2em;
}
</style>
