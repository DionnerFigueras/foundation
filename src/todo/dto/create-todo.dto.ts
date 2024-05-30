import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTodoDto {
    @IsString()
    @IsNotEmpty()
    title: string;
    @IsNumber()
    @IsNotEmpty()
    yearsOfExperience: number;
    @IsString()
    @IsNotEmpty()
    modality: string;
    @IsString()
    @IsNotEmpty()
    type: string;
    @IsNumber()
    @IsNotEmpty()
    salary: number;
    @IsString()
    @IsNotEmpty()
    hiringDate: string;
}

