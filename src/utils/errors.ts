import { ValidationError } from 'express-validator';

export class HttpError extends Error {
    code: number;

    constructor(code: number, message: string) {
        super(message);
        this.code = code;
    }
}

export class ValidatorError extends HttpError {
    errors: ValidationError[];

    constructor(errors: ValidationError[]) {
        super(400, 'Bad Request');

        this.errors = errors;
    }
}
