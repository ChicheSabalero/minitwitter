const fs = require('fs/promises')
const path = require('path')
const sharp = require('sharp')
const uuid = require('uuid')

const { UPLOADS_DIR } = require('./constants')
const { saveFileError } = require('../services/errorService')

const savePhoto = async (img, width) => {
    try {
        const uploadsPath = path.join(__dirname, '..', '..', UPLOADS_DIR)

        try {
            await fs.access(uploadsPath)
        } catch {
            await fs.mkdir(uploadsPath)
        }

        const sharpImg = sharp(img.data)

        sharpImg.resize(width)

        const imgName = `${uuid.v4()}.jpg`

        const imgPath = path.join(uploadsPath, imgName)

        await sharpImg.toFile(imgPath)
        return imgName

    } catch (error) {
        console.error(error);
        saveFileError()
    }
}

module.exports = savePhoto