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
    const { user_id, email, is_admin } = verify(token, auth.jwt.secretUser);

    request.user = {
      user_id,
      email,
      is_admin
    };

    return next();
  } catch (error) {
    return response.status(401).json({ message: "Invalid token" });
  }
}

module.exports = ensureAuthenticateUser;
