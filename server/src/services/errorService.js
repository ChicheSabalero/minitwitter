module.exports = {
    deleteFileError() {
        throw {
            httpStatus: 500, // Internal server error
            code: 'FILE_DELETE_FAILED',
            message: 'Error deleting file from disk',
        };
    },
    emailAlreadyRegisteredError() {
        throw {
            httpStatus: 409, // Conflict
            code: 'EMAIL_ALREADY_REGISTERED',
            message: 'The email is already registered',
        };
    },
    invalidCredentialsError() {
        throw {
            httpStatus: 401, // Unauthorized
            code: 'INVALID_CREDENTIALS',
            message: 'Invalid credentials',
        };
    },
    invalidTokenError() {
        throw {
            httpStatus: 401, // Unauthorized
            code: 'INVALID_TOKEN',
            message: 'Invalid Token',
        };
    },
    likeAlreadyExistsError() {
        throw {
            httpStatus: 409, // Conflict
            code: 'LIKE_ALREADY_EXISTS',
            message: 'You cannot like the same element more than once.',
        };
    },
    dislikeAlreadyExistsError() {
        throw {
            httpStatus: 409, // Conflict
            code: 'DISLIKE_ALREADY_EXISTS',
            message: 'No se puede dar dislike más de una vez al mismo elemento',
        };
    },
    notAuthenticatedError() {
        throw {
            httpStatus: 401, // Unauthorized
            code: 'NOT_AUTHENTICATED',
            message: "You must send a token in the 'Authorization' header",
        };
    },
    notFoundError(resource = '') {
        throw {
            httpStatus: 404, // Not found
            code: 'RESOURCE_NOT_FOUND',
            message: `The required resource "${resource}" does not exist`,
        };
    },
    saveFileError() {
        throw {
            httpStatus: 500, // Internal server error
            code: 'FILE_SAVE_FAILED',
            message: 'Error saving file to disk',
        };
    },
    unauthorizedUserError() {
        throw {
            httpStatus: 403, // Forbbiden
            code: 'UNAUTHORIZED',
            message: 'The user is not authorized to do this operation',
        };
    },
    userAlreadyRegisteredError() {
        throw {
            httpStatus: 409, // Conflict
            code: 'USER_ALREADY_REGISTERED',
            message: 'Username is already registered',
        };
    },

    missingFieldsError() {
        throw {
            httpStatus: 400,
            code: "MISSING_FIELDS",
            message: "Missing fields"
        }

    }
}