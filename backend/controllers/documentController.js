const express = require("express");
const router = express.Router();
const cors = require("cors");

router.use(cors());

let documents = [];

router.get("/documents", (req, res) => {
    res.json(documents);
});

router.post("/documents", (req, res) => {
    const { name, category, status, date } = req.body;
    documents.push({ name, category, status, date });
    res.json({ message: "Dokumen berhasil ditambahkan", documents });
});

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
