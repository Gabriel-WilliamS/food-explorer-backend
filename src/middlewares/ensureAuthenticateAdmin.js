const { verify } = require("jsonwebtoken");
const auth = require("../config/auth");

function ensureAuthenticateAdmin(request, response, next) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      message: "Token missing"
    });
  }

  const [, token] = authHeader.split(" ");
  try {
    const { sub } = verify(token, auth.jwt.secretAdmin);

    request.user_id = sub;

    return next();
  } catch (error) {
    return response.status(401).json({ message: "Invalid token" });
  }
}

module.exports = ensureAuthenticateAdmin;
