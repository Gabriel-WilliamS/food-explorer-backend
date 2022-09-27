const { hash } = require("bcrypt");
const prisma = require("../../../../database/prismaClient");
const AppError = require("../../../../utils/AppError");

class CreateAdminUseCase {
  async execute({ name, email, password }) {
    if (!name || !email || !password) {
      throw new AppError("All fields must be filled.");
    }

    const userExists = await prisma.users.findFirst({
      where: {
        email
      }
    });

    if (userExists) {
      throw new AppError("email address already registered.");
    }

    const passwordHashed = await hash(password, 10);
    const user = await prisma.users.create({
      data: {
        name,
        email,
        password: passwordHashed,
        is_admin: true
      }
    });

    return user;
  }
}

module.exports = CreateAdminUseCase;
