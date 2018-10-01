import {Injectable} from "@angular/core";
import * as firebase from 'firebase';

@Injectable()
export class ImageService{

  private storage;
  private storageRef;
  private profilePicsRef;

  constructor(){
    firebase.initializeApp({
      apiKey: "AIzaSyDoFlJ-6JalAjQMrk5p_A6tziCgTnyXGUI",
      authDomain: "chihiroskittehs.firebaseapp.com",
      databaseURL: "https://chihiroskittehs.firebaseio.com",
      projectId: "chihiroskittehs",
      storageBucket: "chihiroskittehs.appspot.com",
      messagingSenderId: "1064815788440"
    });
    this.storage = firebase.storage();
    this.storageRef = this.storage.ref('gs://chihiroskittehs.appspot.com');
    this.profilePicsRef = this.storageRef.child('profilepics');
  }

  public downloadProfilePic(firebaseApp){
    this.profilePicsRef.child('1.jpg').getDownloadURL().then((url) => {
      let xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = (event) => {
        let response = xhr.response;
        console.log(response);
        return response;
      };
      xhr.open('GET', url);
      xhr.send();
    }).catch((error) => {
      console.log(error);
    })
  }
}
