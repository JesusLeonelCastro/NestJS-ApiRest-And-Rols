import { IsString, MinLength, IsNotEmpty, IsEmail, Matches } from "class-validator";


export class CreateUserDto {


    @IsString()
    @MinLength(4)
    @IsNotEmpty({message : "El nombre es requerido"})
    name : string;

    @IsEmail()
    @IsNotEmpty({message : "El email es requerido"})
    email : string;

    @IsString()
    @IsNotEmpty({message : "La contraseña es requerida"})
    @MinLength(6, {message : "La contraseña debe tener al menos 6 caracteres"})
    @Matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
        {message : "La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial"}
    )
    password : string;
}
