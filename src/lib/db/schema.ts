import { mysqlTable, serial, text, timestamp, uniqueIndex } from 'drizzle-orm/mysql-core'
import { InferModel } from 'drizzle-orm'

export const UsersTable = mysqlTable(
  'users',
  {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull(),
    createdAt: timestamp('createdAt').defaultNow().notNull()
  }
)

export type User = InferModel<typeof UsersTable>
export type NewUser = InferModel<typeof UsersTable, 'insert'>
