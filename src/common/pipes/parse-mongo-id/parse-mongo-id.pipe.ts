import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class ParseMongoIdPipe implements PipeTransform {

  transform(value: string, metadata: ArgumentMetadata) {
    //Validar de que sea un mongo ID

    if (!isValidObjectId(value)) {
      throw new BadRequestException(`${value} no es un MongoId valido.`)
    }

    return value;
  }
}
