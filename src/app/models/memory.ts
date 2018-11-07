import { Location } from './location';
export class Memory {
  constructor(
    public title: string,
    public description: string,
    public location: Location,
    public imagePath: string,
    public imageDir: string,
    public fileName: string
  ) {}
}
