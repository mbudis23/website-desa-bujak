// components/organisms/DashboardGrid.tsx
import AdminNavCard from "@/components/molecules/AdminNavCard";

const navItems = [
  {
    title: "Beranda",
    description: "Edit konten halaman beranda",
    href: "/admin/beranda",
  },
  {
    title: "Kependudukan",
    description: "Edit data dan infografis kependudukan",
    href: "/admin/kependudukan",
  },
  {
    title: "Kebudayaan",
    description: "Kelola informasi kebudayaan desa",
    href: "/admin/kebudayaan",
  },
  {
    title: "Peta Interaktif",
    description: "Hubungkan data dengan tampilan peta",
    href: "/admin/peta",
  },
  {
    title: "Galeri",
    description: "Hubungkan data dengan tampilan peta",
    href: "/admin/galeri",
  },
];

export default function DashboardGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {navItems.map((item) => (
        <AdminNavCard key={item.href} {...item} />
      ))}
    </div>
  );
}
