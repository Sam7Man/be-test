import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

// initialize Prisma Client
const prisma = new PrismaClient();

const roundsOfHashing = 10;

async function main() {
    // dummy data
    const passwordAdmin = await bcrypt.hash('admin123', roundsOfHashing);
    const passwordUser = await bcrypt.hash('asdf12345', roundsOfHashing);

    const workspace1 = await prisma.workspace.create({
        data: {
            name: 'Namanya Barulah2',
        }
    });

    const workspace2 = await prisma.workspace.create({
        data: {
            name: 'Keatas222',
        }
    });

    const user1 = await prisma.user.create({
        data: {
            email: 'admin2@insignia.com',
            emailVerified: '2023-01-15T12:00:00Z',
            name: 'Admin',
            password: passwordAdmin,
            workspaceId: workspace1.id,
            role: 'ADMIN',
        }
    });

    const user2 = await prisma.user.create({
        data: {
            email: 'user@insignia.com',
            emailVerified: '2023-01-15T12:00:00Z',
            name: 'User',
            password: passwordUser,
            workspaceId: workspace2.id,
            role: 'USER',
        }
    });

    console.log({ workspace1, workspace2, user1, user2 });
}

// eksekusi main function
main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        // diperlukan untuk mengakhiri koneksi Prisma Client
        await prisma.$disconnect();
    });
