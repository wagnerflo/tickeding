import orm from "$lib/server/database"
import { Event } from "$lib/server/entities"
import { serialize } from "@mikro-orm/core";

export const csr = false;

export async function load() {
    const em = orm.em.fork()
    let events = await em.find(Event, {})
    return {
        events: serialize(events),
    }
}
