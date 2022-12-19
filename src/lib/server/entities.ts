import "reflect-metadata"
import { Entity, Property, PrimaryKey, Unique } from "@mikro-orm/core"

@Entity()
export class Event {
    @PrimaryKey()
    id!: number;

    @Property()
    @Unique()
    slug!: string;

    constructor (slug: string) {
	this.slug = slug;
    }
}
