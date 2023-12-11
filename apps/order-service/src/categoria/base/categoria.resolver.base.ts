/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Categoria } from "./Categoria";
import { CategoriaCountArgs } from "./CategoriaCountArgs";
import { CategoriaFindManyArgs } from "./CategoriaFindManyArgs";
import { CategoriaFindUniqueArgs } from "./CategoriaFindUniqueArgs";
import { DeleteCategoriaArgs } from "./DeleteCategoriaArgs";
import { CategoriaService } from "../categoria.service";
@graphql.Resolver(() => Categoria)
export class CategoriaResolverBase {
  constructor(protected readonly service: CategoriaService) {}

  async _categoriasMeta(
    @graphql.Args() args: CategoriaCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Categoria])
  async categorias(
    @graphql.Args() args: CategoriaFindManyArgs
  ): Promise<Categoria[]> {
    return this.service.categorias(args);
  }

  @graphql.Query(() => Categoria, { nullable: true })
  async categoria(
    @graphql.Args() args: CategoriaFindUniqueArgs
  ): Promise<Categoria | null> {
    const result = await this.service.categoria(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Categoria)
  async deleteCategoria(
    @graphql.Args() args: DeleteCategoriaArgs
  ): Promise<Categoria | null> {
    try {
      return await this.service.deleteCategoria(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}