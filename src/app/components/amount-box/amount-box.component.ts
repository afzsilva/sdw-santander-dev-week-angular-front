import { Component, OnInit } from '@angular/core';
import { AmountDataModel } from 'src/app/model/amountDataModel';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-amount-box',
  templateUrl: './amount-box.component.html',
  styleUrls: ['./amount-box.component.css']
})
export class AmountBoxComponent implements OnInit {
	accountDetails:AmountDataModel = {
		amountValue: 0,
		limit: 0,
		totalAmount: 0,
	}


	constructor(private accountService:AccountService){}


	ngOnInit(): void {
		this.getAmountValues();
	}


	getAmountValues(){
			this.accountService.getAccount().subscribe(data => {
				this.accountDetails.amountValue = data.account.balance
				this.accountDetails.limit = data.account.limit
				this.accountDetails.totalAmount = this.accountDetails.limit + this.accountDetails.amountValue
			})

			console.log(this.accountDetails);

	}




}
