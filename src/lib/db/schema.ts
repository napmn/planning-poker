import { mysqlTable, serial, text, timestamp, uniqueIndex, varchar } from 'drizzle-orm/mysql-core'
import { InferModel } from 'drizzle-orm'

export const UsersTable = mysqlTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull()
})

export type User = InferModel<typeof UsersTable>
export type NewUser = InferModel<typeof UsersTable, 'insert'>

export const RoomTable = mysqlTable(
  'room',
  {
    id: serial('id').primaryKey(),
    token: varchar('token', { length: 36 }).notNull()
  },
  (table) => ({
    uniqueTokenIdx: uniqueIndex('unique_token_idx').on(table.token)
  })
)

export type Room = InferModel<typeof RoomTable>
export type NewRoom = InferModel<typeof RoomTable, 'insert'>
