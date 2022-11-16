import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storange.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit{
  // @Output() featureSelected = new EventEmitter<string>();

  // onSelect(feature: string) {
  //   this.featureSelected.emit(feature);
  // }
  private userSub: Subscription;
  isAuthenticate = false;
  constructor(private dataStorageService: DataStorageService, private authService: AuthService){}     //inject sercice
  ngOnInit(){
   this.userSub = this.authService.user.subscribe(user =>{
    this.isAuthenticate = !!user ;
    console.log(!user);
    console.log(!!user);
    
    
   });
  }
  onSaveData(){
    this.dataStorageService.storeRecipes();
  }
  onFetchData(){
    this.dataStorageService.fetchRecipes().subscribe();
  }
  onLogout(){
    this.authService.logout()
  }
  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
}
