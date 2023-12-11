import { CategoriaWhereInput } from "./CategoriaWhereInput";
import { CategoriaOrderByInput } from "./CategoriaOrderByInput";

export type CategoriaFindManyArgs = {
  where?: CategoriaWhereInput;
  orderBy?: Array<CategoriaOrderByInput>;
  skip?: number;
  take?: number;
};
