import { ApiProperty } from '@nestjs/swagger';

// DTO (Data Transfer Object) is an object that defines how the data will be sent over the network.

// ApiProperty decorator makes the class properties visible to the
// SwaggerModule. see: https://docs.nestjs.com/openapi/types-and-parameters

// Define the shape of the request body
export class CreateArticleDto {
  @ApiProperty()
  title: string;

  @ApiProperty({ required: false })
  description: string;

  @ApiProperty()
  body: string;

  @ApiProperty({ required: false, default: false })
  published?: boolean = false;
}
