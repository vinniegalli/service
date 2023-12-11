/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CategoriaWhereInput } from "./CategoriaWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CategoriaOrderByInput } from "./CategoriaOrderByInput";

@ArgsType()
class CategoriaFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CategoriaWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CategoriaWhereInput, { nullable: true })
  @Type(() => CategoriaWhereInput)
  where?: CategoriaWhereInput;

  @ApiProperty({
    required: false,
    type: [CategoriaOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CategoriaOrderByInput], { nullable: true })
  @Type(() => CategoriaOrderByInput)
  orderBy?: Array<CategoriaOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CategoriaFindManyArgs as CategoriaFindManyArgs };
