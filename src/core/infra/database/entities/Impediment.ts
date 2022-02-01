import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as createUuid } from "uuid";
import { IImpediment } from "../../../../features/impediments/domain/models/IImpediment";
import { IProject } from "../../../../features/projects/domain/model/project";
import { Project } from "./Projects";

@Entity()
export class Impediment implements IImpediment {
    @PrimaryColumn({
        type: "uuid",
    })
    uid: string;

    @Column({ length: 50 })
    name: string;

    @Column({ length: 50 })
    description: string;

    @Column()
    active: boolean;

    @ManyToOne((_) => Project)
    @JoinColumn({
        name: "project_uid",
    })
    project: IProject;

    constructor() {
        this.uid = createUuid();
    }
}
