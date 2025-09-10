# Backend Projesi

Bu proje, **"Web Development Assignment"** ödevinin backend kısmını oluşturmaktadır.  
React tabanlı frontend uygulaması için gerekli olan kullanıcı ve post verilerini sağlayan bir **REST API**'dir.  
Proje, **NestJS** ve **TypeScript** kullanılarak geliştirilmiştir.

---

## 🚀 Teknolojiler
- **Node.js**: Sunucu çalışma ortamı
- **NestJS**: Ölçeklenebilir ve bakımı kolay backend çatısı
- **TypeScript**: Güçlü tip kontrolü
- **Express**: NestJS içinde yer alan temel API altyapısı

---

## ⚙️ Gereksinimler
Aşağıdaki yazılımların kurulu olması gerekmektedir:
- [Node.js (LTS sürümü)](https://nodejs.org/)
- [npm](https://www.npmjs.com/) veya [yarn](https://yarnpkg.com/)

---

## 📥 Kurulum
Proje dizininde **backend/backend** klasörüne gidin:

```bash
cd backend/backend
```

Gerekli bağımlılıkları yükleyin:
```bash
npm install
# veya
yarn install
```

▶️ Uygulamayı Çalıştırma
Geliştirme sunucusunu başlatmak için:

```bash
npm run start:dev
```

Uygulama varsayılan olarak:
👉 http://localhost:3000
 adresinde çalışacaktır.



 🔗 API Uç Noktaları
<h2>Kullanıcılar (Users)</h2>
<ul>
<li>GET /users → Tüm kullanıcıları listeler</li>

<li>GET /users/:id → Belirli bir kullanıcıyı getirir</li>

<li>POST /users → Yeni kullanıcı oluşturur</li>

<li>PUT /users/:id → Kullanıcı günceller</li>

<li>DELETE /users/:id → Kullanıcı siler</li>
</ul>


<h2>Postlar (Posts)</h2>
<ul>
<li>GET /posts → Tüm postları listeler</li>

<li>GET /posts/:id → Belirli postu getirir</li>

<li>GET /posts/user/:userId → Belirli kullanıcıya ait tüm postları listeler</li>

<li>POST /posts → Yeni post oluşturur</li>

<li>PUT /posts/:id → Post günceller</li>

<li>DELETE /posts/:id → Post siler</li>
</ul>



📂 Veri Kaynağı

Başlangıç verileri src/users/users.service.ts ve src/posts/posts.service.ts dosyalarının içerisine hardcoded olarak eklenmiştir.
Veritabanı kullanılmamaktadır.


🛠️ Git Entegrasyonu

Bu backend projesi, da-vinci-boardgamecafe-project adlı ana proje ile aynı repository içinde tutulmaktadır.

1. Ana dala geçiş yapın:

```bash
git checkout master
```

2. Uzak depodaki son değişiklikleri çekin:

```bash
git pull origin master
```


3. Backend değişikliklerini commit edin ve gönderin:

```bash
git add backend/
git commit -m "Add backend project"
git push origin master
```
