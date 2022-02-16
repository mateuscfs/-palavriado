import * as path from 'path';
import { connectionOptions } from './database/connection';

module.exports = {
    ...connectionOptions,
    entities: [
        'src/database/entities/*{.ts,.js}',
        'dist/database/entities/*{.ts,.js}'
    ],
    migrations: ['src/database/migrations/*{.ts,.js}'],
    cli: {
        migrationsDir: 'src/database/migrations',
    },
};
