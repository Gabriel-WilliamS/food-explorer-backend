const { verify } = require("jsonwebtoken");
const auth = require("../config/auth");

function ensureAuthenticateUser(request, response, next) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      message: "Token missing"
    });
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(token, auth.jwt.secret);

    request.user_id = sub;

    return next();
  } catch (error) {
    return response.status(401).json({ message: "Invalid token" });
  }
}

module.exports = ensureAuthenticateUser;
