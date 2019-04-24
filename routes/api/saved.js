const router = require("express").Router();
const savedController = require("../../controllers/savedController");

// Matches with "/api/books"
router.route("/")
  .get(savedController.findAll)
  .post(savedController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(savedController.findById)
  .delete(savedController.remove);

module.exports = router;
