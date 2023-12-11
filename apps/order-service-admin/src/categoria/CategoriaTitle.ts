import { Categoria as TCategoria } from "../api/categoria/Categoria";

export const CATEGORIA_TITLE_FIELD = "id";

export const CategoriaTitle = (record: TCategoria): string => {
  return record.id?.toString() || String(record.id);
};
