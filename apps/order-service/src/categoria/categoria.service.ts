import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CategoriaServiceBase } from "./base/categoria.service.base";

@Injectable()
export class CategoriaService extends CategoriaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
