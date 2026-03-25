import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;
const API_KEY = process.env.API_KEY;

// Root route
app.get("/", (req, res) => {
    res.send("🚀 Stock Backend is Running");
});

// Stock API
app.get("/api/stock/:symbol", async (req, res) => {
    try {
        const symbol = req.params.symbol;

        const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();

        console.log(data); // 👈 ADD THIS

        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Backend running on port ${PORT}`);
});