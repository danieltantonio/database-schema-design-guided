# Track Food AKA Menu Items

#### Commonly used migration commands:
- npx knex migrate:make name... <!-- Creates a new migration file -->
- npx knex migrate:latest <!-- Run pending migrations to update the database -->

`menu_items` table:
- `id`: Primary key, unsigned (not negative number) integer.
- `name`: **[REQUIRED]** STRING (NOT NULL), unique, make searching by name fast!
- `price`: FLOAT, not required.
- `available`: BOOLEAN, false on default.

`clients` table:
- `id`: pk, uuid, string
- `email`: string, unique, indexed
- `name`: string, indexed