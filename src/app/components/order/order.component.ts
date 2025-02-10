import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OrderModel } from '../../models/order.model';
import { HttpService } from '../../services/http.service';
import { SwalService } from '../../services/swal.service';
import { NgForm } from '@angular/forms';
import { SharedModule } from '../../modules/shared.module';
import { OrderPipe } from '../../pipes/order.pipe';
import { CustomerModel } from '../../models/customer.model';
import { ProductModel } from '../../models/product.model';
import { OrderDetailModel } from '../../models/order-detail.model';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [SharedModule,OrderPipe],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {
orders:OrderModel[]=[];
customers : CustomerModel[]=[];
products : ProductModel[]=[];
detail : OrderDetailModel = new OrderDetailModel();
search:string="";

@ViewChild("createModalCloseBtn") createModalCloseBtn: ElementRef<HTMLButtonElement> | undefined;
@ViewChild("updateModalCloseBtn") updateModalCloseBtn: ElementRef<HTMLButtonElement> | undefined;


createModel:OrderModel=new OrderModel();
updateModel:OrderModel=new OrderModel();


constructor(
  private http:HttpService,
  private swal:SwalService
) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.http.post<OrderModel[]>("Orders/GetAll",{},(res)=>{
      this.orders = res;
    });
  }

  create(form:NgForm){
    if(form.valid){
      this.http.post<string>("Orders/Create",this.createModel,(res)=>{
        this.swal.callToast(res);
        this.createModel = new OrderModel();
        this.createModalCloseBtn?.nativeElement.click();
        this.getAll();
      })
    }
  }

  deleteById(model:OrderModel){
    const number : string = "BE" + model.orderNumberYear + model.orderNumber;
    this.swal.callSwall("Siparişi Sil?",`${model.customer.name} - ${number} numaralı siparişi silmek istiyor musunuz?`,()=>{
      this.http.post<string>("Orders/DeleteById",{id:model.id},(res)=>{
        this.getAll();
        this.swal.callToast(res,"info");
      })
    })
  }

  get(model:OrderModel){
    this.updateModel = {...model};
  }

  update(form:NgForm){
    if(form.valid){
      this.http.post<string>("Orders/Update",this.updateModel,(res)=>{
        this.swal.callToast(res,"info");
        this.updateModalCloseBtn?.nativeElement.click();
        this.getAll();
      })
    }
  }
}

