const auth = (request, response, next) => {
  if (request.isAuthenticated()) {
    next();
  } else {
    return response.sendStatus(401);
  }
};

const isAdmin = (request, response, next) => {
  if (request.user.role === "admin") {
    next();
  } else {
    console.log(`${request.user.name} trying reach admin panel`);
    return response.sendStatus(401);
  }
};

module.exports = { auth, isAdmin };
