import { IsNotEmpty, IsString } from "class-validator";

export class UpdateDateDto {
    @IsNotEmpty()
    @IsString()
    datedCode?: string;
    @IsNotEmpty()
    @IsString()
    serviceCode?: string;
    @IsNotEmpty()
    @IsString()
    nameClient?: string;
}
