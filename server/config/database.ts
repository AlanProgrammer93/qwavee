const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("database.db");

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS transactions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        type TEXT NOT NULL,
        category TEXT NOT NULL,
        amount REAL NOT NULL,
        date TEXT NOT NULL
    )`);

    // Insertar datos mock
    const stmt = db.prepare("INSERT INTO transactions (type, category, amount, date) VALUES (?, ?, ?, ?)");
    stmt.run("income", "Salario", 1500, "2024-01-10");
    stmt.run("expense", "Comida", 1000, "2024-01-15");
    stmt.run("income", "Salario", 1400, "2024-02-10");
    stmt.run("expense", "Comida", 1200, "2024-02-15");
    stmt.run("income", "Salario", 1200, "2024-03-01");
    stmt.run("expense", "Comida", 150, "2024-03-02");
    stmt.run("expense", "Transporte", 50, "2024-03-03");
    stmt.finalize();
});

export default db