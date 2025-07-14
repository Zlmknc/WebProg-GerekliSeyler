# WebProg-GerekliSeyler
A website clone project with Quasar + Firebase & Pinia entegration

Bu proje, bir eğitim ve portföy çalışması olarak **web programlama kapsamında @CaglaOkmen(https://github.com/CaglaOkmen) ile tamamlanan 2 kişilik bir ekip olarak geliştirilmiştir.** 
Gerekli Şeyler sitesinin Quasar Framework kullanılarak yeniden oluşturulmuş versiyonudur. Temel amacımız, modern web teknolojilerini (Vue 3, Quasar, Firebase, Pinia) gerçek dünya senaryolarına yakın bir örnek üzerinde pekiştirmektir.

**Proje ekip arkadaşları tarafından iki ayrı reposito şeklinde yayınlanmıştır.**
##Part2 ile Gelen Yenilikler

Projenin ilk bölümünde sitenin kullanıcı arayüzü klonlanırken, ikinci repoda dinamik veri yönetimi ve kullanıcı etkileşimleri için Firebase (Authentication & Firestore) ve Pinia entegrasyonları ile tam işlevsel bir yapıya sahip olması amaçlanmıştır. Sepet fonksiyonelliği de bu entegrasyonları(sepet firebase ile firebase okuma yazmaları da pinia store içinden yapıldı) önemli bir parçasıdır.

## Proje Yapısı

Projenin ana dizini;
├── src/                          # Quasar kaynak kodları, proje içeriğinin oluşturulduğu yer
│   ├── layouts/                  # Uygulama düzenleri| MyMainLyout site klonunun bulunduğu düzen iken diğer layotlar örnektir
│   ├── pages/                    # Uygulama sayfaları
│   ├── components/               # Yeniden kullanılabilir bileşenler
│   ├── stores/                   # Pinia mağazaları
│   │   ├── StoreForPinia         # Diğer Pinia store'ları örnektir
│   ├── router                    # router ile layout içinde bağlantı verdiğimiz componente yönlendirir
│   └── ...

**Not:** Firebase ile yapılan tüm okuma ve yazma işlemleri, uygulama durumunun merkezi ve tutarlı bir şekilde yönetilmesi için `src/stores` dizini altındaki ilgili Pinia store'ları (StoreForPinia.ts) üzerinden gerçekleştirilir. Bu yaklaşım, veri akışını düzenler ve uygulamanın bakımı ile ölçeklenebilirliğini artırır.

## Kullanılan Teknolojiler

* **Quasar Framework**
* **Vue 3**
* **Firebase**
* **Pinia**
* Node.js
* Yarn

##KURULUM
# zlm (zlm)
zlm

## Install the dependencies
```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
yarn lint
# or
npm run lint
```

### Format the files
```bash
yarn format
# or
npm run format
```

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
