const express = require("express");
const {
  get_all,
  get_one,
  post_data,
  put_data,
  delete_data,
} = require("./crud");

const router = express.Router();

router.get("/get", get_all);
router.get("/get/:id", get_one);
router.post("/post", post_data);
router.put("/update/:id", put_data);
router.delete("/delete/:id", delete_data);

module.exports = router;

