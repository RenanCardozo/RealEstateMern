const UsersController = require('../controllers/user.controller');
const { authenticate } = require('../configs/jwt.config')

module.exports = (app) => {
  app.post("/api/users/register", UsersController.register);
  app.post("/api/login", UsersController.login);
  app.get("/api/users", UsersController.getAllUsers);
  app.get("/api/cookie", UsersController.cookie);
  app.get("/api/users/logout", UsersController.logout);
  app.get("/api/users/:id", UsersController.getUser);
  app.put("/api/users/:id", UsersController.updateUsers);
};
