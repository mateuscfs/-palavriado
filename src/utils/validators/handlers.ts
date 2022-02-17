import { Request } from 'express';
import { matchedData, validationResult } from 'express-validator';
import { ValidatorError } from '../errors';

export const throwsIfNotValid = (req: Request): void => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        throw new ValidatorError(errors.array());
    }
};

export const getValidData = (
    req: Request,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
): { body: any } => {
    throwsIfNotValid(req);

    const data = {
        body: getMatchedBody(req),
    };

    return data;
};

export const getMatchedBody = (req: Request): Record<string, unknown> => {
    const data = matchedData(req, {
        onlyValidData: true,
        includeOptionals: false,
        locations: ['body'],
    });

    return deleteCheckBodyKeys(data);
};

export const deleteCheckBodyKeys = (
    body: Record<string, unknown>,
): Record<string, unknown> => {
    const data = { ...body };

    delete data[''];

    return data;
};
