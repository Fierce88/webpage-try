# Lilla Butik — tanıtım sayfası

Tek sayfalık butik sitesi. Saf HTML, CSS ve JavaScript; derleme adımı yok, bağımlılık yok.

## Dosyalar

| Dosya | İçerik |
| --- | --- |
| `index.html` | Tüm sayfa: duyuru şeridi, başlık, giriş, kategoriler, vitrin, hakkımızda, Instagram, ziyaret, alt bilgi |
| `styles.css` | Renk ve boşluk değişkenleri + tüm yerleşim kuralları |
| `script.js` | Mobil menü, kaydırma gölgesi, menüde aktif bölüm, görünür olunca belirme, alt bilgi yılı |
| `images/` | 15 fotoğraf. Aynı adla değiştirin — kod değişmez. |
| `YAYINA-ALMA.md` | Fotoğraf değiştirme, yayına alma ve alan adı adım adım |

## Çalıştırma

```bash
python3 -m http.server 8000
# http://127.0.0.1:8000
```

`index.html` doğrudan çift tıklanarak da açılır.

## Yayına alma

Herhangi bir statik sunucu yeterli: Netlify, Vercel, GitHub Pages, Cloudflare Pages,
S3 veya sade bir nginx klasörü. Üç dosyayı yüklemek yeterli, sunucu tarafı kod yok.

## Sizden bekleyen bilgiler

Instagram profilinde yalnızca şu bilgiler görünüyordu: adresin başı
(**Menderes Mahallesi, 118. Sokak No:1-A, İzmir**), kategori (**ayakkabı, çanta,
aksesuar**), ortaklar (**Aylin Uluğ**, **Sahra Uluğ Duman**) ve takipçi sayısı
(~5.300). Geri kalanı uydurmamak için boş bıraktım. Sayfada `TODO` yorumlarıyla
işaretli yerler:

| Konu | Nerede | Ne yapmalı |
| --- | --- | --- |
| **Fotoğraflar** | `images/` klasörü | Şu an renkli yer tutucular. Dosyayı **aynı adla** değiştirmek yeterli; kod düzenlemek gerekmez. Ad ve boyut listesi `YAYINA-ALMA.md` içinde. |
| **Ziyaret saatleri** | `#ziyaret` → "Ziyaret saatleri" | `TODO` yorumunun olduğu satırı gerçek saatlerle değiştirin. |
| **Telefon / WhatsApp** | `#ziyaret` → `info-list` | `TODO` yorumundaki örneği açıp numarayı yazın. |
| **Fiyatlar** | `#yeni` → `.product-note` | Şu an "Fiyat ve beden için DM". Fiyat yazacaksanız `₺1.250` gibi değiştirin. |
| **Ürün adları** | `#yeni` → `.product h3` | "Deri babet" gibi adlar örnek; gerçek ürünlerle değiştirin. |
| **Sosyal önizleme** | `<head>` → `og:url`, `og:image` | Alan adı ve 1200×630 bir görsel ekleyin. |

Adresin tamamı (semt/ilçe sonu) profil metninde kesikti; yalnızca görünen kısmı
yazdım. Tam adresi `#ziyaret` ve `.footer-brand` içinde güncelleyin. Adres
`application/ld+json` içinde de geçiyor — orayı da düzeltin, Google için önemli.

## İçerik düzenleme

Metinlerin hepsi `index.html` içinde düz yazı:

- **Marka adı** — başlıkta, alt bilgide ve `<title>` içinde `Lilla` / `Butik` olarak ikiye ayrılmış.
- **Menü** — `<nav class="site-nav">`; bağlantılar sayfa içi bölümlere gider.
- **Instagram adresi** — `https://www.instagram.com/lilla._butik/` tüm sayfada aynı; hesap adı değişirse hepsini birden değiştirin.
- **Bölüm sırası** — `<main>` içindeki `<section>` bloklarını sıralamak yeterli; menü bağlantıları kimliklere (`#yeni`, `#kategoriler`, `#hakkimizda`, `#ziyaret`) gittiği için bozulmaz.

## Renkler ve yazı tipi

`styles.css` başındaki değişkenler:

```css
--brand: #6f4e79;      /* lila vurgu: butonlar, bağlantılar */
--brand-deep: #523a5c; /* üzerine gelince */
--ink: #251f28;        /* başlıklar */
--bg: #fdfbf9;         /* sayfa zemini */
--bg-alt: #f6f0ea;     /* dönüşümlü bölüm zemini */
```

Başlıklar sistemdeki serif yazı tipiyle (Hoefler/Iowan/Georgia) çiziliyor, ayrıca
font indirilmiyor. Belirli bir yazı tipi isterseniz `--font-serif` değerini değiştirin
ve `@font-face` ekleyin.

## Zaten halledilmiş olanlar

- 360 px'e kadar duyarlı: 1000 px'te tek sütun, 860 px'te hamburger menü, 620 px'te tek ürün sütunu. 390 ve 768 px'te iframe içinde test edildi.
- Klavye erişimi: "içeriğe geç" bağlantısı, görünür odak halkaları, menüde `aria-expanded` / `aria-controls`.
- JavaScript yoksa sayfa tamamen görünür kalır (belirme animasyonu `.js` sınıfına bağlı).
- `prefers-reduced-motion` açıksa animasyon ve yumuşak kaydırma kapanır.
- Lighthouse: erişilebilirlik 100, en iyi uygulamalar 100, SEO 100.
- `ClothingStore` yapılandırılmış verisi (adres + Instagram) `<head>` içinde.

## Yayından önce

Ayrıntılı adım adım anlatım: **`YAYINA-ALMA.md`**

1. `images/` klasöründeki 15 dosyayı gerçek fotoğraflarla değiştirin.
2. `TODO` yorumlarını temizleyin (sayfada görünmezler, kaynakta kalmaları zararsız).
3. Alan adını `og:url` ve `index.html` başlığına işleyin.
4. Gizlilik/çerez metni gerekiyorsa ekleyin — sayfa şu an çerez kullanmıyor, form yok.
