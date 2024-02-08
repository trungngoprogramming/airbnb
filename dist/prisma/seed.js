"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const auth_util_1 = require("../libs/share/src/core/utils/auth.util");
const prisma = new client_1.PrismaClient();
async function main() {
    const admin = await prisma.nguoiDung.findFirst({ where: { email: 'airbnb@gmail.com' } });
    const params = {
        email: 'airbnb@gmail.com',
        name: 'airbnb',
        role: 'admin',
        phone: '033333333333',
        gender: 'male',
        birthday: new Date(),
        password: (0, auth_util_1.sha3512)('Aa@123456'),
    };
    await prisma.nguoiDung.upsert({
        where: { id: admin?.id || 0 },
        create: params,
        update: params,
    });
}
main().then(async () => await prisma.$disconnect()).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});
//# sourceMappingURL=seed.js.map