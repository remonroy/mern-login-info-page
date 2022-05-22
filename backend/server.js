const app = require("./app");
const DatabaseConnect = require("./databaseConnect/databaseCon");

//config file.
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

// Database connection
DatabaseConnect();

//app listen or get url
const server = app.listen(process.env.PORT, () => {
  console.log(`Server is rung port = ${process.env.PORT}`);
});
