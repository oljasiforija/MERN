const AuthorsController = require("../controllers/authors.controller");
module.exports = app => {
    app.get("/api/authors/all",AuthorsController.findAllAuthors);
    app.get("/api/authors/:_id",AuthorsController.getSingleAuthor);
    app.post("/api/authors/new",AuthorsController.createAuthor);
    app.patch("/api/authors/:_id/update",AuthorsController.updateAuthor);
    // app.patch("/api/authors/:_id/update",AuthorsController.findOneAndUpdateAuthor);
    app.delete("/api/authors/:_id/delete",AuthorsController.deleteAuthor);
}
