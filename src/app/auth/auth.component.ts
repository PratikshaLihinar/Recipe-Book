import { Component, ComponentFactory, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlacholderDirective } from '../shared/placeholder/placeholder.directive';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode=true;
  isLoading= false;
  error:string = null;
  @ViewChild(PlacholderDirective,{static:false}) alertHost: PlacholderDirective;
  // private closeSub: Subscription;
  constructor(private authService: AuthService, private router:Router, private componentFactoryResolver:ComponentFactoryResolver) { }

  ngOnInit(): void {
  }
  onSwithMode(){
    this.isLoginMode=!this.isLoginMode;
  }
  onSubmit(form: NgForm){
    if(!form.valid){
      return;
    }
    // console.log(form.value);
    const email = form.value.email;
    this.isLoading=true;
    const password = form.value.password;
    let authObs :Observable<AuthResponseData>;
    if (this.isLoginMode) {
      //..
      authObs=this.authService.login(email, password);
    }else {
      authObs=this.authService.signup(email, password);

    }
    authObs.subscribe(
      responseData =>{
        console.log(responseData);
        this.isLoading=false;
        this.router.navigate(['/recipes']);
      },
      errorMessage => {
        console.log(errorMessage);
        this.error =errorMessage;
        // this.showErrorAlert(errorMessage);
        this.isLoading=false;
      }
    )
    form.reset();
    
  }

  onCloseModal(){
    this.error = null;
  }
  // ngOnDestroy(): void {
  //  if(this.closeSub){
  //   this.closeSub.unsubscribe();
  //  }
  //}
//   //dynamic alert using programatic
//  private showErrorAlert(errorMessage:string){
//   // const alertComp = new AlertComponent();
//   const alertCompFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);//create component Factory
//   const hostViewContainerRef =this.alertHost.viewContainerRef;//store ref 
//   hostViewContainerRef.clear();//clear before rendering 
//   const componentRef = hostViewContainerRef.createComponent(alertCompFactory)//create new componet pass parameter alertCompFactory
//   componentRef.instance.message = errorMessage;
//   componentRef.instance.close.subscribe(()=>{
//     this.closeSub.unsubscribe();
//     hostViewContainerRef.clear();
//   });
//  }
 
}
