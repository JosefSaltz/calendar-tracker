import { drizzle } from 'drizzle-orm/libsql';
import { PRIVATE_DB_FILE_NAME } from "$env/static/private"

const db = drizzle(PRIVATE_DB_FILE_NAME!);

export { db };