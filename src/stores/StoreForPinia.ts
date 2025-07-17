import { defineStore } from 'pinia';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

interface Product {
  imgLink: string;
  yayinevi: string;
  name: string;
  price: number;
}

const firebaseConfig = {
  apiKey: 'AIzaSyDUfS_Ibm942vBNJ82AXJAGCmSEcD-YEDo',
  authDomain: 'web2final-6c78b.firebaseapp.com',
  projectId: 'web2final-6c78b',
  storageBucket: 'web2final-6c78b.appspot.com',
  messagingSenderId: '407093912037',
  appId: '1:407093912037:web:d73d5ddcbc76c5401f4f0c',
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    items: [] as Product[],
  }),
  onInit() {
    const storedCartItems = localStorage.getItem('cartItems');

    if (storedCartItems) {
      this.items = JSON.parse(storedCartItems);
    }
  },

  actions: {
    async fetchItems() {
      try {
        const snapshot = await db.collection('sepet').get();
        this.items = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            imgLink: data.imgLink,
            yayinevi: data.yayinevi,
            name: data.name,
            price: data.price,
          } as Product;
        });
      } catch (error) {
        console.error('Fetch Items Error:', error);
      }
    },
    async addToCart(product: Product) {
      try {
        await db.collection('sepet').add({
          imgLink: product.imgLink,
          yayinevi: product.yayinevi,
          name: product.name,
          price: product.price,
        });

        this.items.push({
          imgLink: product.imgLink,
          yayinevi: product.yayinevi,
          name: product.name,
          price: product.price,
        });

        localStorage.setItem('cartItems', JSON.stringify(this.items));
      } catch (error) {
        console.error('Add to Cart Error:', error);
      }
    },
    async removeFromCart(product: Product) {
      const productRef = db.collection('sepet').doc(product.name);
      await productRef.delete();

      this.items = this.items.filter(
        (item) => item.imgLink !== product.imgLink
      );
    },
  },
});
