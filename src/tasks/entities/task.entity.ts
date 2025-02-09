import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tasks', schema: 'technical_test'})
export class Task {
    @PrimaryGeneratedColumn({type: 'integer'})
    id: string

    @Column({type: 'character varying', length: 255})
    title: string

    @Column({type: 'text'})
    description: string

    @Column({type: 'boolean', default: false})
    completed: boolean
}
