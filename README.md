da-vinci-boardgamecafe-project
!(https://www.google.com/search?q=https://placehold.co/800x400/31363F/EEEEEE%3Ftext%3DWeb%2BDevelopment%2BAssignment)

Bu proje, hem frontend hem de backend becerilerini sergilemek amacıyla geliştirilmiş, tam yığın (full stack) bir web uygulamasıdır. Proje, kullanıcı ve post verilerini yönetebilen basit bir web uygulamasını hayata geçirmeyi hedeflemektedir. Uygulama, modern bir kullanıcı arayüzü ile güçlü bir API altyapısını bir araya getirir.

🚀 Proje Genel Bakışı
Bu proje, iki ana aşamadan oluşmaktadır:

React + Vite Frontend: Kullanıcıların ve postların listelendiği, CRUD (Oluşturma, Okuma, Güncelleme, Silme) işlemlerinin yapılabildiği bir ön yüz uygulaması. Başlangıçta JSONPlaceholder'dan alınan örnek verilerle çalışmaktadır.

NestJS Backend Entegrasyonu: Verilerin statik olmaktan çıkarılıp, NestJS ile geliştirilmiş bir backend API'sinden çekildiği aşama. Bu aşamada, tüm CRUD işlemleri artık backend üzerinden yönetilir.

💻 Teknolojiler
Proje geliştirme sürecinde aşağıdaki teknolojiler kullanılmıştır:

Frontend
React: Kullanıcı arayüzü için.

TypeScript: Kod kalitesi ve tip güvenliği için.

Vite: Hızlı geliştirme ortamı için.

ESLint: Kod standartlarını korumak için.

Tailwind CSS: Modern ve hızlı stil yönetimi için.

react-router-dom: Uygulama içi yönlendirme için.

Backend
Node.js: Sunucu ortamı.

NestJS: API geliştirmesi için.

Express: Temel API altyapısı için.

⚙️ Kurulum ve Çalıştırma
Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları sırasıyla izleyin.

1. Klonlama
Öncelikle bu depoyu makinenize klonlayın:

git clone [https://github.com/da-vinci-boardgamecafe-project.git](https://github.com/da-vinci-boardgamecafe-project.git)
cd da-vinci-boardgamecafe-project

2. Backend Kurulumu
Backend API'sini çalıştırmak için backend dizinine gidin ve bağımlılıkları yükleyin:

cd backend
npm install
npm run start:dev

API varsayılan olarak http://localhost:3000 adresinde çalışacaktır.

3. Frontend Kurulumu
Yeni bir terminal penceresi açın, frontend dizinine gidin ve bağımlılıkları yükleyerek uygulamayı başlatın:

cd frontend
npm install
npm run dev

Uygulama varsayılan olarak http://localhost:5173 adresinde çalışacaktır.

🤝 Katkıda Bulunma
Geri bildirimleriniz ve katkılarınız için teşekkür ederiz! Lütfen pull request'ler oluşturmaktan çekinmeyin.
