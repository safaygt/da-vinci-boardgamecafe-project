# Da Vinci Boardgame Cafe Project

Bu proje, hem frontend hem de backend becerilerini sergilemek amacıyla geliştirilmiş, **tam yığın (full stack)** bir web uygulamasıdır. Proje, kullanıcı ve post verilerini yönetebilen basit bir web uygulamasını hayata geçirmeyi hedeflemektedir. Uygulama, modern bir kullanıcı arayüzü ile güçlü bir API altyapısını bir araya getirir.

---

## 🚀 Proje Genel Bakışı

Bu proje, iki ana aşamadan oluşmaktadır:

1. **React + Vite Frontend**  
   Kullanıcıların ve postların listelendiği, **CRUD** (Oluşturma, Okuma, Güncelleme, Silme) işlemlerinin yapılabildiği bir ön yüz uygulaması. Başlangıçta **JSONPlaceholder**'dan alınan örnek verilerle çalışmaktadır.

2. **NestJS Backend Entegrasyonu**  
   Verilerin statik olmaktan çıkarılıp, **NestJS** ile geliştirilmiş bir backend API'sinden çekildiği aşama. Tüm CRUD işlemleri artık backend üzerinden yönetilir.

---

## 💻 Kullanılan Teknolojiler

### Frontend
- **React**: Kullanıcı arayüzü için.  
- **TypeScript**: Kod kalitesi ve tip güvenliği için.  
- **Vite**: Hızlı geliştirme ortamı için.  
- **ESLint**: Kod standartlarını korumak için.  
- **Tailwind CSS**: Modern ve hızlı stil yönetimi için.  
- **react-router-dom**: Uygulama içi yönlendirme için.  

### Backend
- **Node.js**: Sunucu ortamı.  
- **NestJS**: API geliştirmesi için.  
- **Express**: Temel API altyapısı için.  

---

## ⚙️ Kurulum ve Çalıştırma

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

### 1. Klonlama
```bash
git clone https://github.com/safaygt/da-vinci-boardgamecafe-project.git
cd da-vinci-boardgamecafe-project
```

2. Backend Kurulumu

Backend API'sini çalıştırmak için:

```bash
cd backend
npm install
npm run start:dev
```

API varsayılan olarak http://localhost:3000
adresinde çalışacaktır.


3. Frontend Kurulumu
Yeni bir terminal penceresi açın ve frontend dizinine gidin:

```bash
cd frontend
npm install
npm run dev
```

Uygulama varsayılan olarak http://localhost:5173
adresinde çalışacaktır.


🤝 Katkıda Bulunma
Geri bildirimleriniz ve katkılarınız için teşekkür ederiz!
Lütfen pull request oluşturmaktan çekinmeyin.
