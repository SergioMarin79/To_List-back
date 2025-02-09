import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateStatusTaskDto } from './dto/update-status-task';

@Injectable()
export class TasksService {

  constructor(
    @InjectRepository(Task)
    private taskRepostiry: Repository<Task>
  ){}

  create(createTaskDto: CreateTaskDto) {
    const taskCreate = this.taskRepostiry.create(createTaskDto)
    return this.taskRepostiry.save(taskCreate)
  }

  findAll() {
    const getAllTask = this.taskRepostiry.find()
    return getAllTask;
  }

  findOne(id: any){
    return this.taskRepostiry.findOne({where: {id: id}})
  }

  findToCompletTasks(completed: boolean) {
    return this.taskRepostiry.find({ where: { completed: completed } });
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.taskRepostiry.update(id,updateTaskDto)
  }

  remove(id: number) {
    return this.taskRepostiry.delete(id)
  }
}
