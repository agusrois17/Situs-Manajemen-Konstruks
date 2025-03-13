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

module.exports = router;
