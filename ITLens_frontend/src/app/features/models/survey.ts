import {Owner} from './owner';
import {SurveyEdition} from './survey-edition';

export interface Survey {
    id: number;
    title: string;
    description: string;
    owner: Owner;
    surveyEditions: SurveyEdition[];
  }
