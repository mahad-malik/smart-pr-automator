import { Injectable } from '@nestjs/common';
import rules from './rules.json';

type Rule = {
  label: string;
  assignTo: string;
  comment: string;
};

@Injectable()
export class PrService {
  private rules: Rule[] = rules;

  async processPr(createPrDto: any): Promise<any> {
    console.log('Processing PR with data:', createPrDto);

    const title = createPrDto.title.toLowerCase();
    const description = createPrDto.description.toLowerCase();

    const matchedRules = this.rules.filter(rule =>
      title.includes(rule.label.toLowerCase()) ||
      description.includes(rule.label.toLowerCase())
    );

    return {
      message: 'PR processed successfully',
      data: createPrDto,
      appliedRules: matchedRules,
    };
  }
}
