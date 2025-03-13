const express = require("express");
const cors = require("cors");
const documentRoutes = require("./controllers/documentController");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", documentRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`));
