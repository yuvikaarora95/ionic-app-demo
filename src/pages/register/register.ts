import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginResponse } from '../../models/login/login-response.interface';
import { NativeStorage } from '@ionic-native/native-storage';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private toast: ToastController, public nativeStorage: NativeStorage) {
  }

  
  register(event) {
    if(!event.error){
      
      this.toast.create({
        message: `Account created: ${event.result.user.email}`,
        duration: 3000
      }).present();
    }
    else{
      this.toast.create({
        message: `Account not created. ${event.error.message}`,
        duration: 3000
      }).present();
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
