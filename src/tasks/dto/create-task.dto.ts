import { IsString, MinLength, IsNotEmpty, IsEmail, Matches } from "class-validator";

export class CreateTaskDto {

    @IsString()
    @MinLength(4)
    @IsNotEmpty({message : "El título es requerido"})
    title : string;
    @IsString()
    @IsNotEmpty({message : "La descripción es requerida"})
    description : string;


    @IsString()
    @IsNotEmpty({message : "El estado es requerido"})
    @Matches(/^(pendiente|en progreso|completada)$/, {message : "El estado debe ser 'pendiente', 'en progreso' o 'completada'"})
    status : string;


}
