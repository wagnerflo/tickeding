import type { Options } from "@mikro-orm/core";
import * as entities from "./entities";

const config: Options = {
    type: "sqlite",
    dbName: "db.sqlite3",
    entities: Object.values(entities),
};

export default config;
