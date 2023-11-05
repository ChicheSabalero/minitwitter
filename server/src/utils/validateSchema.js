const validateSchema = async (schema, data) => {
    try {
        await schema.validateAsync(data)
    } catch (error) {
        error.status = 400
        throw error
    }
}

module.exports = validateSchema