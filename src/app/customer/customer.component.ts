import { Component, OnInit, Input } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  customers: Customer[] = []
  selectedCustomer: Customer;
  
  //üst component'ten değer çekme için @Input() kullanılır
  @Input() city: string;

  ngOnInit() {
    this.customers = [
      { id: 1, firstName: "Çağlar", lastName: "Durmuş", age: 29 },
      { id: 2, firstName: "Songül", lastName: "Şahin", age: 25 },
      { id: 1, firstName: "Damla", lastName: "Durmuş", age: 32 }
    ]
  }

  selectCustomer(customer: Customer) {
    this.selectedCustomer = customer
  }

}
