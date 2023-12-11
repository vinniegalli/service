import { Module } from "@nestjs/common";
import { CategoriaModuleBase } from "./base/categoria.module.base";
import { CategoriaService } from "./categoria.service";
import { CategoriaController } from "./categoria.controller";
import { CategoriaResolver } from "./categoria.resolver";

@Module({
  imports: [CategoriaModuleBase],
  controllers: [CategoriaController],
  providers: [CategoriaService, CategoriaResolver],
  exports: [CategoriaService],
})
export class CategoriaModule {}
