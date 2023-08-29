import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService {
    // Create an instance of the Prisma client
    private prisma: PrismaClient = new PrismaClient();
    workspace: any;
    user: any;
    session: any;
    contactGroup: any;
    contactList: any;
    contact: any;
    apiToken: any;
    account: any;

    // Provide a method to access the Prisma client
    getClient() {
        return this.prisma;
    }

    // Close the Prisma client when the application shuts down
    async onApplicationShutdown() {
        await this.prisma.$disconnect();
    }
}
