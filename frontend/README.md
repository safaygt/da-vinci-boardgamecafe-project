# Frontend Projesi

Bu proje, **"Web Development Assignment"** ödevinin frontend kısmını oluşturmaktadır.  
Proje, **Vite** ve **React** kullanılarak geliştirilmiş olup, dinamik verileri bir backend API'sinden (**NestJS**) çekmek ve kullanıcı arayüzünde görüntülemek için tasarlanmıştır.

---

## 🚀 Teknolojiler
- **React**: Kullanıcı arayüzü oluşturmak için JavaScript kütüphanesi  
- **TypeScript**: Güçlü tip kontrolü ve ölçeklenebilirlik için  
- **Vite**: Hızlı ve modern bundler  
- **ESLint**: Kod kalitesini ve stilini korumak için linting aracı  
- **react-router-dom**: Uygulama içi yönlendirme (routing)  
- **Tailwind CSS**: Hızlı ve esnek stil oluşturma  

---

## ⚙️ Gereksinimler
Aşağıdaki yazılımların kurulu olması gerekmektedir:
- [Node.js (LTS sürümü)](https://nodejs.org/)
- [npm](https://www.npmjs.com/) veya [yarn](https://yarnpkg.com/)

---

## 📥 Kurulum
Proje dizininde **frontend** klasörüne gidin:

```bash
cd frontend
```

Gerekli bağımlılıkları yükleyin:

```bash
npm install
# veya
yarn install
```

▶️ Uygulamayı Çalıştırma

Geliştirme modunu başlatın:

```bash
npm run dev
```

<p>Uygulama varsayılan olarak:
👉 http://localhost:5173
 adresinde çalışacaktır.</p>
 

<h2>🔗 API Entegrasyonu</h2>

Frontend uygulaması, kullanıcı ve post verilerini NestJS backend API'sinden çekmek için fetch veya axios kullanır.
Tüm CRUD işlemleri (Oluşturma, Okuma, Güncelleme, Silme) backend üzerinden yönetilir.


<h2>🛠️ Git Entegrasyonu</h2>

Bu frontend projesi, da-vinci-boardgamecafe-project adlı ana proje ile aynı repository içinde tutulmaktadır.

1. Ana dala geçiş yapın:
   
```bash
git checkout master
```

2. Uzak depodaki son değişiklikleri çekin:

```bash
git pull origin master
```

3. Frontend değişikliklerini commit edip gönderin:

```bash
git add frontend/
git commit -m "Add frontend project"
git push origin master
```
