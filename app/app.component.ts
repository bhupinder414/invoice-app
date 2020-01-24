import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
   item1:String;
   item2:String;
   price1:number;
   price2:number;
   tot:number;
   tax:number;
   total=[];
   totalWithTax=[];

   onClick()
   {
      if(this.price1>0 && this.price2>0 && this.item1.length>0 && this.item2.length>0)
      {
      this.tot=this.price1*1+this.price2*1;
      this.total.push(this.tot);
      console.log(this.total);
      }
   }

   onGenerateInvoice()
   { 
       this.tax=this.tot*0.25;
       this.totalWithTax.push(this.tot*1+this.tax);
       console.log(this.totalWithTax);
   }
}
