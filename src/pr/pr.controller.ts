import { Controller, Post, Body } from '@nestjs/common';
import { PrService } from './pr.service';

@Controller('pr')
export class PrController {
  constructor(private readonly prService: PrService) {}

  @Post()
  async processPr(@Body() createPrDto: { title: string; description: string; author: string }) {
    return this.prService.processPr(createPrDto);
  }
}
