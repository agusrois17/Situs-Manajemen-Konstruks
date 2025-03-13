const express = require("express");
const router = express.Router();

// Simulasi data statistik proyek
let stats = {
    projects_active: 25,
    projects_completed: 10,
    documents_processed: 150,
    projects_pending: 5
};

// API untuk mendapatkan statistik proyek
router.get("/stats", (req, res) => {
    res.json(stats);
});

// API untuk memperbarui statistik proyek
router.post("/stats/update", (req, res) => {
    const { projects_active, projects_completed, documents_processed, projects_pending } = req.body;
    if (projects_active !== undefined) stats.projects_active = projects_active;
    if (projects_completed !== undefined) stats.projects_completed = projects_completed;
    if (documents_processed !== undefined) stats.documents_processed = documents_processed;
    if (projects_pending !== undefined) stats.projects_pending = projects_pending;
    
    res.json({ message: "Statistik diperbarui", stats });
});

module.exports = router;
