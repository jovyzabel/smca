import { PrismaClient } from "@/generated/prisma/client/client";
import MembersRepository from "../repository/members.repository";
import { prisma } from "../lib/prisma";

export default class PrismaMemberRepository implements MembersRepository {
  
    private prisma: PrismaClient;

    constructor(prismaClient: PrismaClient) {
        this.prisma = prismaClient;
    }

    async findById(id: string) {
    return this.prisma.adherent.findUnique({
        where: { id: Number(id) }
    });
  }

  async findAll() {
    return this.prisma.adherent.findMany();
  }

  async create(data: any) {
    return this.prisma.adherent.create({
      data
    });
  }

  async update(id: string, data: any) {
    return this.prisma.adherent.update({
      where: { id: Number(id) },
      data
    });
  }

  async delete(id: string) {
    await this.prisma.adherent.delete({
      where: { id: Number(id) }
    });
    return true;
  }

}