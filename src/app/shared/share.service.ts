import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormGroup } from '@angular/forms';
import {validationMessages} from './validation-messages'

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor(private firebaseStore: AngularFirestore) { }

  storeCredetials(){
  }

  getCredetials(){
  }

  processMessages(container: FormGroup): { [key: string]: string } {
    const messages = {} as any;
    for (const controlKey in container.controls) {
      if (container.controls.hasOwnProperty(controlKey)) {
        const control = container.controls[controlKey];
        if (control instanceof FormGroup) {
          console.log(controlKey, control);
          const childMessages = this.processMessages(control);
          Object.assign(messages, childMessages);
        } else {
          if (validationMessages[controlKey]) {
            messages[controlKey] = '';
            if ((control.dirty || control.touched) && control.errors) {
              Object.keys(control.errors).map(messageKey => {
                console.log(controlKey, messageKey);
                if (validationMessages[controlKey][messageKey]) {
                  messages[controlKey] += validationMessages[controlKey][messageKey] + ' ';
                }
              });
            }
          }
        }
      }
    }
    return messages;
  }
}
