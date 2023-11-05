const fs = require('fs/promises')
const path = require('path')

const { UPLOADS_DIR } = require('./constants')
const { deleteFileError } = require('../services/errorService')

const deletePhoto = async (imgName) => {
    try {
        const imgPath = path.join(__dirname, '..', '..', UPLOADS_DIR, imgName)
        console.log(imgPath);

        try {
            await fs.access(imgName)
        } catch {
            return
        }

        await fs.unlink(imgPath)


    } catch (error) {
        console.error(error);
        deleteFileError
    }
}

module.exports = deletePhoto