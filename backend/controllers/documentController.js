const express = require("express");
const router = express.Router();

// Simulasi daftar dokumen
let documents = [
    { name: "Shop Drawing - Struktur", category: "Struktur", status: "Disetujui", date: "2025-03-10" },
    { name: "Material Approval - Beton", category: "Material", status: "Menunggu", date: "2025-03-12" },
    { name: "Laporan Mingguan", category: "Laporan", status: "Dikirim", date: "2025-03-14" }
];

// API untuk mendapatkan daftar dokumen
router.get("/documents", (req, res) => {
    res.json(documents);
});

// API untuk menambahkan dokumen baru
router.post("/documents", (req, res) => {
    const { name, category, status, date } = req.body;
    documents.push({ name, category, status, date });
    res.json({ message: "Dokumen berhasil ditambahkan", documents });
});

// API untuk menghapus dokumen berdasarkan indeks
router.delete("/documents/:index", (req, res) => {
    const index = parseInt(req.params.index);
    if (index >= 0 && index < documents.length) {
        documents.splice(index, 1);
        res.json({ message: "Dokumen berhasil dihapus", documents });
    } else {
        res.status(400).json({ message: "Indeks tidak valid" });
    }
});

module.exports = router;
