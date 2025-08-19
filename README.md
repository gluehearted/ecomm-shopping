## Belanja Web

Aplikasi e-commerce fullstack berbasis Next.js 15 dengan Prisma (PostgreSQL), Lucia Auth, Supabase Storage untuk gambar, dan integrasi pembayaran Xendit. Proyek ini memiliki 2 area utama: Dashboard Admin dan Web Customer.

### Fitur Utama
- **Dashboard Admin**: CRUD Brand, Kategori, Lokasi, Produk; manajemen pesanan; login/logout.
- **Web Customer**: Katalog produk dengan filter (brand, kategori, lokasi, harga, stok), keranjang, checkout, status pesanan; autentikasi.
- **Autentikasi**: Lucia + Prisma Adapter, session cookie.
- **Gambar**: Upload, hapus, dan ambil URL via Supabase Storage bucket `belanja`.
- **Pembayaran**: SDK `xendit-node` terpasang (endpoint status pembayaran tersedia).

### Teknologi
- Next.js 15, React 19, TypeScript
- Prisma 6 (PostgreSQL)
- Lucia Auth + Prisma Adapter
- Supabase JS SDK (Storage)
- TanStack Query + TanStack Table
- Tailwind CSS 4

### Struktur Proyek (ringkas)
- `src/app/(admin)/dashboard` — halaman admin (brands, categories, locations, products, orders)
- `src/app/(customer)/(index)` — halaman customer (home, katalog, detail, cart, rewards, testimonials)
- `src/app/api` — route API (mis. `catalog`, `order/status`)
- `src/lib` — util umum (`auth.ts`, `supabase.ts`, `xendit.ts`, `utils.ts`)
- `prisma/schema.prisma` — skema database

## Prasyarat
- Node.js 20+ dan npm
- PostgreSQL (lokal atau managed)
- Akun Supabase (untuk Storage)
- Akun Xendit (opsional saat dev; diperlukan untuk pembayaran riil)

## Konfigurasi Lingkungan
Buat file `.env` atau `.env.local` di root proyek. Jangan commit file `.env` ke GitHub (sudah di-ignore oleh `.gitignore`). Gunakan template berikut:

```bash
cp .env.example .env.local
```

Variabel yang perlu diisi:
- `DATABASE_URL`
- `DIRECT_URL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_KEY`
- `NEXT_PUBLIC_XENDIT_KEYS` (untuk produksi, pindahkan ke server-only secret, mis. `XENDIT_SECRET_KEY`)

Catatan:
- Kode saat ini membaca `NEXT_PUBLIC_XENDIT_KEYS` dari client. Untuk produksi, pindahkan ke secret server (mis. `XENDIT_SECRET_KEY`) dan gunakan hanya di server action/route.
- Supabase: siapkan Storage bucket bernama `belanja` dan pastikan path `public/brands` dan `public/products` dapat diakses publik.

## Setup & Pengembangan
1) Install dependensi:
```bash
npm install
```

2) Generate Prisma Client dan migrasi database:
```bash
npx prisma generate
npx prisma migrate dev
# (opsional) Buka Prisma Studio
npx prisma studio
```

3) Jalankan pengembangan (Turbopack):
```bash
npm run dev
```
Lalu buka `http://localhost:3000`.

## Build & Production
```bash
npm run build
npm start
```

## Skrip NPM
- `dev`: Next dev (Turbopack)
- `build`: Build produksi
- `start`: Menjalankan server produksi
- `lint`: Menjalankan linter
- `postinstall`: `prisma generate`

## Database & Model
Skema utama (ringkas): `User`, `Session`, `Brand`, `Category`, `Location`, `Product`, `Order`, `OrderDetail`, `OrderProduct` dan enum `RoleUser`, `ProductStock`, `StatusOrder`.

Untuk akses admin, buat user dengan `role = superadmin` via Prisma Studio/SQL.

## Supabase Storage
Digunakan di `src/lib/supabase.ts`:
- Upload: disimpan ke `belanja/public/{brands|products}/filename.ext`
- Hapus: remove path terkait
- Ambil URL publik: `getPublicUrl`

## Autentikasi
Konfigurasi ada di `src/lib/auth.ts` menggunakan Lucia + Prisma Adapter. Session disimpan pada tabel `Session` dan cookie aman di production.

## API
- `src/app/api/catalog/route.ts`
- `src/app/api/order/status/route.ts`

## Deployment (Vercel direkomendasikan)
Set environment variable di Project Settings sesuai `.env`. Pastikan database PostgreSQL dan Supabase Storage siap. Setelah deploy, jalankan migrasi (bila perlu) via job/CLI terpisah.

## Catatan Keamanan
- Hindari mengekspos secret pembayaran di client. Gunakan server-only environment variable.
- Pastikan rule bucket Supabase sesuai (publik hanya untuk direktori yang diperlukan).

---
Dikembangkan dengan Next.js 15, React 19, dan Prisma. Kontribusi dan saran sangat dihargai.
