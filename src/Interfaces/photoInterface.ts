export interface IPhoto extends  Express.Multer.File{
    key: boolean;
    location: number;
}