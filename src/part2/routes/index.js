import express from "express"
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Welcome to Rentspree Node.js Assessment Test!!!")
});

export default router
