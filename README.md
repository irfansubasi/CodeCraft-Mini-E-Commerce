# Mini E-Ticaret / Ürün Kataloğu Uygulaması

## Proje Özeti

Bu proje, jQuery ve AJAX kullanılarak dinamik bir ürün kataloğu ve e-ticaret sepeti uygulamasıdır. Tüm uygulama tek bir JavaScript dosyası (app.js) ile çalışır ve herhangi bir HTML sayfasının konsoluna yapıştırıldığında otomatik olarak çalışmaya başlar. Proje, temel e-ticaret işlevlerini ve jQuery'nin sunduğu modern web geliştirme tekniklerini örneklemektedir.

## Özellikler

- Ürünler, https://fakestoreapi.com/products adresinden AJAX ile çekilir.
- Ürün kartları dinamik olarak oluşturulur ve sayfada listelenir.
- Her ürün kartında "Sepete Ekle" ve "Favorilere Ekle" butonları bulunur.
- Sepete eklenen ürünler localStorage'da saklanır ve sayfa yenilense bile korunur.
- "Sepeti Temizle" butonu ile sepet hem DOM'dan hem localStorage'dan temizlenir.
- Favoriler bölümü ile ürünler favorilere eklenip çıkarılabilir.
- Ürün kartlarına tıklanınca detay modalı (jQuery UI Dialog) açılır.
- Ürünlerin üzerinde Swiper ile çalışan bir carousel bulunur.
- Arama kutusu ile ürünler anlık olarak filtrelenebilir (debounce ile optimize edilmiştir).
- jQuery ile animasyonlar ve hover efektleri uygulanmıştır.
- Gelişmiş DOM manipülasyonu, traversing, cloning ve event delegation teknikleri kullanılmıştır.
- Tüm gerekli CSS ve JS kütüphaneleri dinamik olarak eklenir, başka bir sayfada da sorunsuz çalışır.

## Gereksinimlerin Karşılanması

Aşağıdaki ödev gereksinimlerinin tamamı bu projede eksiksiz olarak karşılanmıştır:

- **Tek dosya:** Tüm uygulama tek bir JS dosyasında yazılmıştır. Konsola yapıştırıldığında otomatik olarak çalışır.
- **Ürün Listesi:** AJAX ile ürünler çekilir ve dinamik olarak listelenir.
- **Sepet ve Favoriler:** Sepete ve favorilere ekleme/çıkarma, localStorage ile kalıcılık sağlanır.
- **Detay Modalı:** Ürün detayları için modal açılır.
- **Carousel:** Ürünlerin üzerinde Swiper ile çalışan bir carousel bulunur.
- **Arama:** Ürünler, arama kutusu ile filtrelenebilir.
- **Animasyon ve Efektler:** fadeIn, hover, toggleClass gibi animasyonlar uygulanmıştır.
- **jQuery Plugin Kullanımı:** Swiper (carousel), jQuery UI (modal) gibi eklentiler kullanılmıştır.
- **Gelişmiş DOM İşlemleri:** Traversing, cloning, event delegation gibi ileri düzey işlemler uygulanmıştır.
- **Responsive ve sade tasarım:** Tasarım sade ve işlevsel tutulmuştur.

## Kullanım

1. Proje dosyasındaki `app.js` içeriğini kopyalayın.
2. Herhangi bir HTML sayfasının konsoluna yapıştırın ve çalıştırın.
3. Eğer sayfada #container id'li bir div yoksa, script otomatik olarak ekler ve uygulama sorunsuz başlar.

## Notlar

- Tüm gerekli CSS ve JS kütüphaneleri (jQuery, Swiper, Font Awesome, Google Fonts, jQuery UI, Fancybox) otomatik olarak eklenir.
- Kod, hem https://www.codetourguide.com/console ortamında hem de boş bir HTML sayfasında sorunsuz çalışır.
- Kodun tamamı jQuery ve vanilla JS ile yazılmıştır, modern tarayıcılarda çalışır.