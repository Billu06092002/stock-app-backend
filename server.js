import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());

const API_KEY = "TKU77K5C5YS98CF3";

// 📊 API Route
app.get("/api/stock/:symbol", async (req, res) => {
    try {
        const symbol = req.params.symbol;

        const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();

        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
});

app.listen(5000, () => console.log("🚀 Backend running on port 5000"));