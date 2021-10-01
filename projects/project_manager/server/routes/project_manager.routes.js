const ProductsController = require("../controllers/project_manager.controller");
module.exports = app => {
    app.get("/api/products/all",ProductsController.findAllProducts);
    app.get("/api/products/:_id",ProductsController.getSingleProduct);
    app.post("/api/products/new",ProductsController.createProduct);
    app.patch("/api/products/:_id/update",ProductsController.updateProduct);
    app.delete("/api/products/:_id/delete",ProductsController.deleteProduct);
}
