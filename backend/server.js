const express = require("express");
const cors = require("cors");
const statsRoutes = require("./controllers/statsController");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", statsRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`));
