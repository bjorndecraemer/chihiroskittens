// export class UploadFileService {
//
//   private basePath = '/uploads';
//
//   constructor(private db: AngularFireDatabase) { }
//
//   pushFileToStorage(fileUpload: FileUpload) {
//     const storageRef = firebase.storage().ref();
//     storageRef.child(`${this.basePath}/${fileUpload.file.name}`).put(fileUpload.file);
//
//     fileUpload.url = downloadURL;
//     fileUpload.name = fileName;
//     this.saveFileData(fileUpload);
//   }
//
//   private saveFileData(fileUpload: FileUpload) {
//     this.db.list(`${this.basePath}/`).push(fileUpload);
//   }
//
//   getFileUploads(numberItems): AngularFireList<FileUpload> {
//     return this.db.list(this.basePath, ref =>
//       ref.limitToLast(numberItems));
//   }
//
//   deleteFileUpload(fileUpload: FileUpload) {
//     this.deleteFileDatabase(fileUpload.key)
//       .then(() => {
//         this.deleteFileStorage(fileUpload.name);
//       })
//       .catch(error => console.log(error));
//   }
//
//   private deleteFileDatabase(key: string) {
//     return this.db.list(`${this.basePath}/`).remove(key);
//   }
//
//   private deleteFileStorage(name: string) {
//     const storageRef = firebase.storage().ref();
//     storageRef.child(`${this.basePath}/${name}`).delete();
//   }
// }
