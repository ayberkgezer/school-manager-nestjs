export enum DtoPrefix {
    NAME = 'NAME',
    LAST_NAME = 'LAST_NAME',
    IDENTITY_NUMBER = 'IDENTITY_NUMBER',
}
export enum ValidationType {
    IS_NOT_EMPTY = 'IS_NOT_EMPTY',
    MUST_BE_STRING = 'MUST_BE_STRING',
    MUST_BE_NUMBER = 'MUST_BE_NUMBER',
    MAX_LENGTH = 'MAX_LENGTH',
}

export function getValidationMassage(prefix: DtoPrefix, validationType: ValidationType, ...arg: any) {
    const message = `${prefix}_${validationType}_${arg.length > 0 ? arg.join('_') : ''}`;
    return message;
}