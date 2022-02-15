import * as yup from 'yup';
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

export class ValidateError extends HttpError {
    errors: { property: string | undefined; message: string | undefined }[];

    constructor(error: yup.ValidationError) {
        super(400, 'Validation Error');

        this.errors = error.inner.map(err => {
            return { property: err.path, message: err.type };
        });
    }
}

export class ValidatorError extends HttpError {
    errors: ValidationError[];

    constructor(errors: ValidationError[]) {
        super(400, 'Bad Request');

        this.errors = errors;
    }
}
