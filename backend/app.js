var express = require("express");
var app = express();

app.get("/api/todo", function (req, res) {
  res.json([{ title: "吃饭" }, { title: "敲代码" }]);
});

app.listen(4000);
