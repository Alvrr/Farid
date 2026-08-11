# Portfolio & Curriculum Vitae - Muhammad Farid Al Mustofa (Alvrr)

Project Web CV Interaktif & Modern berbasis **React + Vite**, siap di-deploy secara langsung ke **Vercel**.

## 🚀 Fitur Utama
- **Navigasi Lengkap & Smooth Scroll:** `About`, `Skills`, `Project`, `Certificate`, dan `Contact`.
- **Bilingual (2 Bahasa):** Tersedia tombol switch instan antara **Bahasa Indonesia (ID)** dan **English (EN)**.
- **Logo MF STUDIO:** Terintegrasi dengan logo `2.png` pada Navbar dan Favicon tab browser.
- **Proyek Unggulan Terintegrasi:**
  - **MANBIG (Web App):** Enterprise Warehouse, POS & Logistics System dengan 4 Peran Multi-Role RBAC:
    - 👑 **Admin / Manajemen:** Manajemen hak akses akun (Admin, Kasir, Gudang, Driver), analitik dashboard penjualan, ekspor laporan keuangan otomatis format Excel (.xlsx).
    - 🛒 **Kasir (POS):** Transaksi pembelian grosir/retail kilat, cetak struk belanja, dan pembuatan order pengiriman barang.
    - 🏢 **Gudang (Inventory):** Manajemen katalog produk & kategori, mutasi stok (in/out) presisi, dan peringatan *low stock alert*.
    - 🚚 **Driver / Logistik:** Penugasan rute logistik, titik koordinat pengantaran (latitude/longitude), estimasi jarak, dan update status pengantaran real-time.
  - **SafeRoute (Mobile App):** Smart Road Safety & Real-Time Hazard Reporting App (Flutter, Firebase, OpenStreetMap, Google Maps SDK, QR Code).
- **Profil Akademik Lengkap:**
  - Mahasiswa **D4 (Diploma 4 / Sarjana Terapan)** Universitas Logistik dan Bisnis Internasional (ULBI) Semester 7 (IPK: **3.43 / 4.00**).
  - Alumni **SMKN 11 Bandung** (Rekayasa Perangkat Lunak, 2020 - 2023).
- **Keahlian Utama (Core Skills):**
  - **Bahasa:** Go (Golang), Dart, JavaScript / TypeScript.
  - **Framework:** React.js, Flutter, Go Fiber, Tailwind CSS.
  - **Backend & DB:** MongoDB, Firebase, RESTful API & JWT, Swagger / OpenAPI.
  - **GIS & Tools:** GIS (Google Maps & OSM), QR Code System, Git & GitHub, Excelize.
- **Print / PDF Friendly:** Tombol cetak CV langsung yang diformat otomatis untuk ukuran kertas A4 (`Ctrl + P` / tombol Cetak).
- **Vercel Ready:** Sudah terkonfigurasi dengan `vercel.json` dan Vite build optimizer.

---

## 💻 Menjalankan Secara Lokal

```bash
# 1. Masuk ke direktori
cd cv

# 2. Install dependencies (jika belum)
npm install

# 3. Jalankan development server
npm run dev
```

Buka `http://localhost:5173` di browser Anda.

---

## 🌐 Cara Deploy ke Vercel

### Opsi 1: Lewat Dashboard Vercel (Rekomendasi)
1. Push project ini ke repositori GitHub Anda (misalnya `https://github.com/Alvrr/cv` atau `porto-cv`).
2. Buka [vercel.com](https://vercel.com) dan login dengan akun GitHub Anda.
3. Klik **"Add New..."** > **"Project"**.
4. Pilih repositori GitHub Anda.
5. Vercel akan otomatis mendeteksi konfigurasi:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Klik **"Deploy"**. Selesai! 🎉

### Opsi 2: Lewat Vercel CLI di Terminal
```bash
npm i -g vercel
vercel
```
Ikuti petunjuk di terminal untuk langsung mem-publish project.
