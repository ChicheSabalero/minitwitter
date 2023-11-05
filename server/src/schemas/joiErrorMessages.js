const joiErrorMessages = {
    'any.required': 'The field "{#key}" is required',
    'any.only': 'Only JPEG or PNG images are allowed',
    'number.base': 'The value of "{#key}" must be a number',
    'number.integer': 'The value of "{#key}" must be an integer',
    'number.max': 'The file must not exceed 5 MB',
    'number.min': 'The value of "{#key}" must be greater than or equal to 1',
    'object.base': 'The value of "{#key}" must be an object',
    'object.unknown': 'No additional fields are allowed in this object',
    'string.base': 'The value of "{#key}" must be a string',
    'string.email': 'You must provide a valid email for "{#key}"',
    'string.empty': 'The field "{#key}" must not be empty',
    'string.max': 'The field "{#key}" must not exceed {#limit} characters',
    'string.min': 'The field "{#key}" must have at least {#limit} characters',
    'string.pattern.base': 'The password must contain at least one uppercase letter, one lowercase letter, one number, and one punctuation symbol for "{#key}"',
};

module.exports = joiErrorMessages;