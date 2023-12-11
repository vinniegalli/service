import * as graphql from "@nestjs/graphql";
import { CategoriaResolverBase } from "./base/categoria.resolver.base";
import { Categoria } from "./base/Categoria";
import { CategoriaService } from "./categoria.service";

@graphql.Resolver(() => Categoria)
export class CategoriaResolver extends CategoriaResolverBase {
  constructor(protected readonly service: CategoriaService) {
    super(service);
  }
}
