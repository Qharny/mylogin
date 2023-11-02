import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  transactions = [
    { transactionId: 1, Name: 'John', amount: 1000, transactionDate: '2018-05-01' },
    { transactionId: 2, Name: 'John', amount: 2000, transactionDate: '2018-05-02' },
    { transactionId: 3, Name: 'John', amount: 3000, transactionDate: '2018-05-03' },
    { transactionId: 4, Name: 'John', amount: 4000, transactionDate: '2018-05-04' },
    { transactionId: 5, Name: 'John', amount: 5000, transactionDate: '2018-05-05' },
    { transactionId: 6, Name: 'John', amount: 6000, transactionDate: '2018-05-06' },
    { transactionId: 7, Name: 'John', amount: 7000, transactionDate: '2018-05-07' },
    { transactionId: 8, Name: 'John', amount: 8000, transactionDate: '2018-05-08' },
    { transactionId: 9, Name: 'John', amount: 9000, transactionDate: '2018-05-09' },
    { transactionId: 10,Name: 'John', amount: 10000, transactionDate: '2018-05-09' }
  ];

}
