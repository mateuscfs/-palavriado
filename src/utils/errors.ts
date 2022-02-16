import { ValidationError } from 'express-validator';

export class HttpError extends Error {
    code: number;

    constructor(code: number, message: string) {
        super(message);
        this.code = code;
    }
}


interface InactivationErrors {
    id: string;
    description: string;
}

export class InactivationError extends HttpError {
    message: string;

    errors: InactivationErrors[];

    constructor(message: string, data: InactivationErrors[]) {
        super(400, message);

        this.message = message;
        this.errors = data.map(({ id, description }) => {
            return { id, description };
        });
    }
}
