import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';

export class UpdateStatusTaskDto extends PartialType(CreateTaskDto) {
    completed: boolean;
}
