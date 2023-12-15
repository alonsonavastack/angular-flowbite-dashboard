import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendPasswordResetEmail } from 'firebase/auth';
import { User } from './user.model';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore);
  router = inject(Router);
  // utilsService = inject(UtilsService);
  // dataRef: AngularFirestoreCollection<User>;


  getAuth() {
    return getAuth();
  }

  signIn(user: User) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  signUp(user: User) {
    return createUserWithEmailAndPassword(getAuth(),  user.email, user.password);
  }
  
  updateUser(displayName: any) {
    return updateProfile(getAuth().currentUser, {displayName} );
  }

  // setDocument(path: any, data: any) {
  //   return setDoc(doc(getFirestore(), path), data)
  // }

  // async getDocument(path: any) {
  //   return (await getDoc(doc(getFirestore(), path))).data()
  // }

  sendRecoveryEmail(email: string) {
    return sendPasswordResetEmail(getAuth(), email);
  }

  signOut() {
    getAuth().signOut();
    localStorage.removeItem('user');
    this.routerlink('/auth');
  }


  routerlink(url: any) {
    this.router.navigateByUrl(url)
  }
}
