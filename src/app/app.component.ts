import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'requiz';
  showusr : boolean = false;
  showdel : boolean = false;
  userarr : {id : number , name : string, mnum : number , email : string} [] = [];
  getuser(userdata : any){
    let userob = {id : this.userarr.length,name : userdata.value.userName , mnum : userdata.value.mobile , email : userdata.value.email};
    this.userarr.push(userob);
    userdata.resetForm();
  }
  deluser(id : number){
    this.userarr = this.userarr.filter(userdata=>userdata.id !== id);
  }
  tglusers(){
    this.showusr = !this.showusr;
  }
  tgldelusers(){
    this.showdel = !this.showdel;
  }
}
