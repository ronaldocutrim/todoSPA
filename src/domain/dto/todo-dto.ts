export class TodoDto {
  descriptionDto: string;
  isCompletedDto: boolean;

  constructor(descriptionDto: string, isCompletedDto: boolean) {
    this.descriptionDto = descriptionDto;
    this.isCompletedDto = isCompletedDto;
  }
}
