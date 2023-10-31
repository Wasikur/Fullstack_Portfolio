import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
const port = 5000;

// Enable CORS to allow requests from your React.js app
app.use(cors());

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root1",
  password: "",
  database: "projects",
});

// Create an API endpoint to retrieve data from the database
app.get("/", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Error connecting to the database" });
    }

    const query = "SELECT * FROM projectcarddetails";
    connection.query(query, (err, rows) => {
      connection.release(); // Release the connection when done
      if (err) {
        return res.status(500).json({ error: "Error querying the database" });
      }
      res.json(rows);
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
