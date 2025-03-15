import { sqliteTable, text, int } from 'drizzle-orm/sqlite-core';

// Define "events" table
export const events = sqliteTable('events', {
  id: text().primaryKey(),
  title: text('title').notNull(),
  created_at: text('date').notNull(),
  updated_at: text('date').notNull(),
  start_time: text('time').notNull(),
  end_time: text('time').notNull(),
  description: text(),
  category: text(),
  organizer: text()
});
