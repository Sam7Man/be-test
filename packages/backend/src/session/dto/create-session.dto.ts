export class CreateSessionDto {
    token: string;
    expiredAt: Date;
    userId: string;
}
