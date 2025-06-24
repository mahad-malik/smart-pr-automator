import { ApiProperty } from '@nestjs/swagger';

// This DTO defines the expected input fields for a PR
export class CreatePrDto {
  @ApiProperty() // Author’s name
  author: string;

  @ApiProperty() // Role of the author (frontend, backend, etc)
  authorRole: string;

  @ApiProperty({ type: [String] }) // List of changed files in the PR
  filesChanged: string[];
}
