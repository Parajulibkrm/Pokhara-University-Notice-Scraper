const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { getNotices, getNoticeContent } = require("./notices");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/notices/:category?", async (req, res) => {
  const baseUrl = "https://pu.edu.np/";
  const url = req.params.category
    ? baseUrl + `noticetype/${req.params.category}`
    : baseUrl + "notice";
  console.log(url);
  getNotices(url, (notices) => {
    res.json({
      timeStamp: Date.now(),
      notices: notices,
    });
  });
});

app.post("/notice/", async (req, res) => {
  const { body } = req;
  const { url } = body;
  getNoticeContent(url, (notice) => {
    // console.log(notice);
    res.json({
      timeStamp: Date.now(),
      notice: notice,
    });
  });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
