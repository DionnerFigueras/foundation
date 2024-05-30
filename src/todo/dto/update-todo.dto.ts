import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './create-todo.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
    @IsString()
    @IsOptional()
    title?: string;
    @IsNumber()
    @IsOptional()
    yearsOfExperience?: number;
    @IsString()
    @IsOptional()
    modality?: string;
    @IsString()
    @IsOptional()
    type?: string;
    @IsNumber()
    @IsOptional()
    salary?: number;
    @IsString()
    @IsOptional()
    hiringDate?: string;
}
