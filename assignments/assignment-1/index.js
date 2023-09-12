const fs = require("fs");

class FinancialAnalytics {
    readFile() {
        const data = fs.readFile("data.json", "utf-8");
        const jsonData = JSON.parse(data);

        return jsonData;
    }
}
