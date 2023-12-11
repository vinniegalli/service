import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CategoriaService } from "./categoria.service";
import { CategoriaControllerBase } from "./base/categoria.controller.base";

@swagger.ApiTags("categorias")
@common.Controller("categorias")
export class CategoriaController extends CategoriaControllerBase {
  constructor(protected readonly service: CategoriaService) {
    super(service);
  }
}
