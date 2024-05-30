import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  
  private todos: Todo[] = [
    {id:1, title:'Developer', yearsOfExperience:5, modality:'remote', type:'nose', salary:500, hiringDate:'15/02/50' }
  ];

  create({title, yearsOfExperience, modality, type, salary, hiringDate}: CreateTodoDto): Todo{
    
    const todo = new Todo;
    todo.id = Math.max( ...this.todos.map(todo => todo.id), 0) + 1;
    todo.title = title;
    todo.yearsOfExperience = yearsOfExperience;
    todo.modality = modality;
    todo.type = type;
    todo.salary = salary;
    todo.hiringDate = hiringDate; 

    this.todos.push(todo);

    return todo;
  }

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: number): Todo {
    const todo = this.todos.find( todo => todo.id === id );

    if(!todo) throw new NotFoundException(`Todo with #${id} not found`);

    return todo;
  }

  update(id: number, updateTodoDto: UpdateTodoDto): Todo {
    
    const {title, yearsOfExperience, modality, type,salary, hiringDate} = updateTodoDto;

    const todo = this.findOne( id );

    if(title) todo.title = title;
    if(yearsOfExperience) todo.yearsOfExperience = yearsOfExperience;
    if(modality) todo.modality = modality;
    if(type) todo.type = type;
    if(salary) todo.salary = salary;
    if(hiringDate) todo.hiringDate = hiringDate;

    
    this.todos = this.todos.map( dbTodo => {
      if(dbTodo.id === id) return todo;
      return dbTodo;
    })

    return todo;
  }

  remove(id: number) {

    this.findOne( id );

    this.todos = this.todos.filter(todo => todo.id !== id);

  }
}
