const { compare } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const auth = require("../../../config/auth");
const prisma = require("../../../database/prismaClient");
const AppError = require("../../../utils/AppError");

class UserAuthenticateUseCase {
  async execute({ email, password }) {
    if (!email || !password) {
      throw new AppError("All fields must be filled.");
    }

    const user = await prisma.users.findFirst({
      where: {
        email
      }
    });

    if (!user) {
      throw new AppError("Email or password is Invalidaaaaaa.");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Email or password is Invalid.");
    }

    const token = sign(
      { user_id: user.id, email, is_admin: user.is_admin },
      auth.jwt.secretUser,
      {
        expiresIn: auth.jwt.expiresIn
      }
    );

    return { user, token };
  }
}

module.exports = UserAuthenticateUseCase;
