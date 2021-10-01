const JokesController = require("../controllers/jokes.controller");
module.exports = app => {
    app.get("/api/jokes/all",JokesController.findAllJokes);
    app.get("/api/jokes/:_id",JokesController.getSingleJoke);
    app.post("/api/jokes/new",JokesController.createJoke);
    app.patch("/api/jokes/:_id/update",JokesController.updateJoke);
    app.get("/api/jokes/:_id/delete",JokesController.deleteJoke);
}
