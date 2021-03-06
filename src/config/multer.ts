import * as multer from 'multer';
import path from 'path';
import crypto from 'crypto';
import * as AWS from "aws-sdk";
import { StorageEngine } from "multer";
import multerS3 from 'multer-s3';


const storageTypes = {
    local: multer.diskStorage({
        destination: (req, file, cb )=>{
            cb(null, path.resolve(__dirname, "..", "..", "tmp", "uploads"))
        },
        filename: (req, file, cb)=>{
            crypto.randomBytes(16, (err, hash)=>{
                if(err) cb(err,"erro")

                const fileName = `${hash.toString('hex')}-${file.originalname}`;
                cb(null,fileName)
            })
        }
    }),
    s3: multerS3({
        s3: new AWS.S3(),
        bucket: 'biocateste',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl:'public-read',
        key: (req, file, cb):void => {
            crypto.randomBytes(16, (err, hash)=>{
                if(err) cb(err,"erro")
                const fileName = `${hash.toString('hex')}-${file.originalname}`;
                cb(null,fileName)
            })
        },
    }),
}


export default {
    dest: path.resolve(__dirname, "..", "..", "tmp", "uploads"),
    storage: storageTypes['s3'],
    limits:{
        fileSize: 2 * 1024 * 1024,
    },
    fileFilter:(req: any , file:any, cb:any)=>{
        const allowedMimes = [
            "image/jpeg",
            "image/pjpeg",
            "image/png",
            "image/gif"
        ];

        if(allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error("Invalid file type."));
        }
    }

}