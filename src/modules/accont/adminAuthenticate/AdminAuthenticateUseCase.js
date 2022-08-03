const { compare } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const auth = require("../../../config/auth");
const prisma = require("../../../database/prismaClient");
const AppError = require("../../../utils/AppError");

class AdminAuthenticateUseCase {
  async execute({ email, password }) {
    if (!email || !password) {
      throw new AppError("All fields must be filled.");
    }

    const user = await prisma.users.findFirst({
      where: {
        email,
        is_admin: true
      }
    });

    if (!user) {
      throw new AppError("Email or password is Invalid.");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Email or password is Invalid.");
    }

    const token = sign({ email }, auth.jwt.secretAdmin, {
      subject: String(user.id),
      expiresIn: auth.jwt.expiresIn
    });

    return { user, token };
  }
}

module.exports = AdminAuthenticateUseCase;
