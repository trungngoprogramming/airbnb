import { BadRequestException, PipeTransform } from "@nestjs/common";
import { Errors } from "../constants/error.constant";

export class ImgValidationPipe implements PipeTransform {
  transform(value: any) {
    const fiveMb = 5 * 1024 * 1024;
    if (value.size > fiveMb) throw new BadRequestException(Errors.Common.imgMaxSize(5));
    if (!value.mimetype.match(/\/(jpg|jpeg|png)$/)) throw new BadRequestException(Errors.Common.imgNotType);

    return 'data:image/png;base64,' + value.buffer.toString('base64');
  }
}
