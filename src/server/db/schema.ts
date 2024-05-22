

import { sql } from "drizzle-orm";
import {
  index,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `t3gallery_${name}`);

export const images = createTable(
  "image",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }).notNull(),
    url: varchar("url", {length: 1024}).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt", { withTimezone: true }),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  })
);
