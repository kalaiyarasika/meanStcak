import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['date', 'description', 'amount'];
  public userData:any ={
      id:'123',
      name:'Kalai',
      last_login: '04 Feb 2018',
      balance:'3000',
      transaction:[{
        date:"03 Feb 2018",
        description:'Room rent',
        amount:'700'
      },
      {
        date:"02 Feb 2018",
        description:'Electricity Bill',
        amount:'900'
      },
      {
        date:"01 Feb 2018",
        description:'WIFI Bill',
        amount:'800'
      }
    ]
  }

  public displayedCol: string[]=['date','description','amount']
  public tableHeader=['Date','Description','Amount']
  public arr=['SMS Alert','Marketing Newsletter','Flyers']
  public twoWayData:string;
  public checekedElemnt;
  public tableData;
  constructor(public appService:AppService) { 
    this.tableData = this.userData.transaction;
  
    this.appService.getUserInformation().subscribe(obj=>{
      if(obj.success){
      this.userData = obj.customer;     
      }
      else{

      }
    })
    console.log("user data...",this.userData.id);
    
  }

  ngOnInit(): void {
  }

  onSubmitButton(){
    if(this.twoWayData){
      let val = this.checekedElemnt ? this.arr[this.checekedElemnt]:""
      alert(val+"  :"+this.twoWayData)
    }
    else{
      alert("please enter value")
    }
    
    
  }
  onCheckBox(e){
    this.checekedElemnt = Number(e)-1;
    console.log(e,this.checekedElemnt);
    
  }
  
}