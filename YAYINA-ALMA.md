# Siteyi kendiniz nasıl yönetirsiniz

Bu sayfa üç dosyadan oluşuyor: `index.html` (yazılar), `styles.css` (görünüm),
`script.js` (menü ve küçük hareketler). Fotoğraflar `images/` klasöründe.
Sunucu, veritabanı, yönetim paneli yok — bu yüzden bakımı da basit.

---

## 1. Fotoğrafları değiştirmek

**Tek yapmanız gereken: `images/` klasöründeki dosyayı aynı adla değiştirmek.**
Kodda hiçbir şey değiştirmeniz gerekmiyor.

| Dosya | Nerede görünüyor | Önerilen boyut (en × boy) |
| --- | --- | --- |
| `vitrin-1.jpg` | Girişteki büyük kare (solda) | 900 × 1200 |
| `vitrin-2.jpg` | Girişte sağ üst | 700 × 700 |
| `vitrin-3.jpg` | Girişte sağ alt | 700 × 700 |
| `kategori-ayakkabi.jpg` | Kategoriler — Ayakkabı | 800 × 600 |
| `kategori-canta.jpg` | Kategoriler — Çanta | 800 × 600 |
| `kategori-aksesuar.jpg` | Kategoriler — Aksesuar | 800 × 600 |
| `urun-1.jpg` | Vitrin — 1. ürün (Deri babet) | 900 × 1200 |
| `urun-2.jpg` | Vitrin — 2. ürün | 900 × 1200 |
| `urun-3.jpg` | Vitrin — 3. ürün | 900 × 1200 |
| `urun-4.jpg` | Vitrin — 4. ürün | 900 × 1200 |
| `butik.jpg` | Hakkımızda bölümü | 1000 × 1250 |
| `instagram-1.jpg` … `instagram-4.jpg` | Instagram şeridi (4 kare) | 800 × 800 |

Şu an bu dosyalar geçici renk gradyanları. Sizinkiyle değiştirdiğiniz an
fotoğraf görünür.

**Sırayla yapılacaklar**

1. Fotoğrafı Instagram'dan indirin: gönderiyi açın → sağ üstteki **⋯** → *Kaydet*
   ya da bilgisayarda görsele sağ tıklayıp **Görseli farklı kaydet**.
   (Instagram'dan indirdiğiniz dosyanın adı farklı olur — adını tablodaki adla
   değiştirmeniz gerekir.)
2. Kırpın. Ürünler **dikey 3:4**, Instagram kareleri **1:1**, girişteki büyük
   kare **3:4**. Fotoğrafın ortası otomatik ortalanır ama en iyi sonuç için
   kendiniz kırpın. (`object-fit: cover` ortadan kırpar.)
3. Küçültün. Kısa kenar 900 px'den küçük olmasın, dosya 300 KB'ı geçmesin.
   Ücretsiz araç: [squoosh.app](https://squoosh.app) — kalite 75–80 yeterli.
4. `images/` klasörüne, tablodaki adla koyun. Eski dosyanın üzerine yazın.
5. Tarayıcıda sayfayı **Cmd + Shift + R** ile yenileyin.

**Dikkat**

- Dosya adlarını **küçük harf ve tire** ile yazın (`urun-1.jpg`, `URUN-1.JPG` değil).
  Türkçe karakter kullanmayın: `çanta.jpg` yerine `canta.jpg`.
- Eklemek istediğiniz fotoğraf JPG olmalı. PNG/HEIC kullanacaksanız önce JPG'ye
  çevirin.
- Fotoğrafı başka bir adla koyarsanız görünmez; `index.html` içindeki
  `src="images/..."` yolu da değişmeli.

**Alt metni (Google ve ekran okuyucular için)**

`index.html` içinde her fotoğrafın `alt="..."` değeri var, örnek:
`alt="Deri babet"`. Ürünün adı değişince bu metni de güncelleyin. Süsleme
amaçlı fotoğraflarda `alt=""` kalabilir.

---

## 2. Yazıları, adları, fiyatları değiştirmek

Tüm yazılar `index.html` içinde, normal metin olarak duruyor. Herhangi bir metin
düzenleyiciyle açabilirsiniz: macOS'te **TextEdit** ( Format → *Make Plain Text* ),
ya da ücretsiz **VS Code**.

Sık değişen yerler:

| Ne | `index.html` içinde ara |
| --- | --- |
| Marka adı | `Lilla` / `Butik` (başlık, menü, alt bilgi, `<title>`) |
| Ana başlık | `Butik küçük,` |
| Giriş paragrafı | `Menderes Mahallesi'nde, Aylin Uluğ` |
| Ürün adı | `Deri babet`, `Keten omuz çantası` … |
| Ürün fiyatı | `Fiyat ve beden için DM` → örn. `₺1.250` |
| Ziyaret saatleri | `Güncel saatler için DM'den yazın` |
| Telefon eklemek | `<!-- TODO: telefon / WhatsApp` yorumunun olduğu yer |

Kaydettikten sonra tarayıcıda **Cmd + Shift + R**.

> `index.html` dosyasının adını değiştirmeyin. Yayına aldığınızda sunucu ilk
> olarak bu dosyayı arar.

---

## 3. Kendi bilgisayarınızda açmak

**Kolay yol:** `index.html` dosyasına çift tıklayın. Tarayıcıda açılır.

**Doğru yol (fotoğraf yolları kesin çalışsın diye):** Terminal'de klasöre girin:

```bash
cd "/Users/mk/Documents/Varsayılan Proje"
python3 -m http.server 8000
```

Sonra tarayıcıda `http://127.0.0.1:8000` adresini açın. Kapatmak için Terminal'de
**Ctrl + C**.

Bu adres **sadece sizin bilgisayarınızda** görünür. Başkası açamaz — bunun için
aşağıdaki yayın adımı gerekir.

---

## 4. Siteyi yayına almak (aktif etmek)

Site statik: sunucu tarafı kod yok, veritabanı yok. Bu yüzden ücretsiz statik
barındırma yeterli. Üç seçenek, en kolaydan başlayarak:

### A) Netlify Drop — en hızlı, kod bilgisi gerekmez

1. [app.netlify.com/drop](https://app.netlify.com/drop) adresine gidin.
2. **`Varsayılan Proje` klasörünün tamamını** tarayıcı penceresine sürükleyin
   (`index.html`, `styles.css`, `script.js`, `images/`, `README.md` — hepsi).
3. 10–20 saniye içinde `https://rastgele-isim.netlify.app` gibi bir adres verir.
   **Site canlıdır**, bu adresi paylaşabilirsiniz.
4. Ücretsiz hesap açın (GitHub/Google ile), sonra **Site configuration → Change
   site name** ile `lilla-butik.netlify.app` gibi anlaşılır bir ad verin.

### B) GitHub Pages — değişiklik geçmişi tutmak isterseniz

1. [github.com](https://github.com) üzerinden yeni bir depo (repository) açın.
2. **Add file → Upload files** ile tüm dosyaları yükleyin, `images` klasörünü de.
3. **Settings → Pages → Source: Deploy from a branch → main / (root) → Save**.
4. Birkaç dakika sonra `https://kullaniciadi.github.io/depo-adi/` yayında olur.

### C) Vercel

Panelden içe aktarma ya da Terminal'de proje klasöründe `npx vercel`.

> Arayüz menüleri zamanla değişebilir; kelimeler birebir aynı olmasa da akış aynı:
> *klasörü yükle → yayınla → adres al*.

---

## 5. Kendi alan adınız (lillabutik.com gibi)

`netlify.app` adresi çalışır ama müşteri için `lillabutik.com` daha güvenilir.

1. **Alan adı alın:** Namecheap, Cloudflare Registrar veya Türkiye'de İsimtescil.
   `.com.tr` için belge/vergi levhası istenir; `.com` daha kolay ve yıllık
   yaklaşık 10–15 USD. Butik adınızın `.com`'u boşta mı, önce kontrol edin.
2. **Netlify'da bağlayın:** Site → **Domain management → Add a domain** →
   alan adını yazın. Netlify size iki seçenek sunar:
   - **Nameserver yöntemi (en kolay):** Netlify'ın verdiği 4 adresi alan adı
     firmanızın panelinde "Nameservers" alanına yazın. 1–24 saat içinde geçer.
   - **DNS kayıtları:** Alan adı firmanızın DNS panelinde `A` kaydını Netlify'ın
     IP'sine, `www` için `CNAME` kaydını site adresinize yönlendirin.
3. **HTTPS** (kilit simgesi) Netlify tarafından otomatik ve ücretsiz verilir
   (Let's Encrypt). Ekstra bir şey yapmanız gerekmez.

---

## 6. Sonradan değişiklik yapmak

- **Netlify Drop ile yayınladıysanız:** yine `Deploys` sayfasına girin, klasörü
  yeniden sürükleyin. Yeni sürüm 30 saniyede yayına girer, eski sürümler
  "Deploys" listesinde durur (gerekirse tek tıkla geri dönebilirsiniz).
- **GitHub ile yayınladıysanız:** dosyayı depoda düzenleyin veya yeniden yükleyin;
  sayfa kendiliğinden güncellenir.
- **Git ile bağladıysanız** (Netlify/Vercel): her `git push` otomatik yayına girer.

**Her değişiklikten önce** klasörün bir kopyasını alın (örn. `Yedek 2026-11-01`
adlı bir klasör). Yanlış bir düzenleme olursa geri dönmek kolay olur.

---

## 7. Yayına almadan önce kontrol listesi

- [ ] 15 fotoğrafın hepsi gerçek fotoğrafla değişti (`images/` klasörü)
- [ ] Ürün adları ve fiyatlar doğru
- [ ] Ziyaret saatleri ve telefon yazıldı (şu an bilerek boş)
- [ ] Adresin tamamı doğru (`#ziyaret`, alt bilgi ve `index.html` içindeki
      `application/ld+json` bölümü — üçü de aynı olmalı)
- [ ] Instagram adresi doğru: `https://www.instagram.com/lilla._butik/`
- [ ] Telefonda da açıp bakıldı (menü, fotoğraflar, kaydırma)
- [ ] Yedek alındı

---

## 8. Bilmenizde fayda olan iki şey

- **Instagram fotoğrafları doğrudan gömülemez.** Instagram dış sitelerde
  görsel gösterilmesine izin vermiyor; bu yüzden fotoğraflar indirilip
  `images/` klasörüne konuyor. Yeni ürün eklediğinizde aynı yolu izleyin.
- **Form, sepet, ödeme yok.** Sayfa bir vitrin: sipariş Instagram DM üzerinden.
  Sepet/ödeme isterseniz bu ayrı bir iş (Shopify, Ticimax, WooCommerce gibi bir
  altyapı gerekir) ve bu sayfa oraya yönlendirme sayfası olarak kalabilir.
