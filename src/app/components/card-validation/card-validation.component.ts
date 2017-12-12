import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BuyService} from '../../services/buy.service';
import {validateExpiration} from '../../validators/expirationValidator';
import {validateNumbers} from '../../validators/luhnAlgorithmValidator';
import {Card} from '../../models/Card';
import {Message} from '../../models/Message';

@Component({
  selector: 'app-card-validation',
  templateUrl: './card-validation.component.html',
  styleUrls: ['./card-validation.component.css']
})
export class CardValidationComponent implements OnInit {
  form: FormGroup;
  message: Message;
  card: Card;
  charsPattern = new RegExp(/^[a-zA-Z\s]*$/);
  cvvPattern = new RegExp(/^[0-9]*$/);

  constructor(private fb: FormBuilder, private buyService: BuyService) {
    /* Initialize form */
    this.form = this.fb.group({
      owner: ['', [Validators.required, Validators.pattern(this.charsPattern)]],
      number: ['', [Validators.required, validateNumbers]],
      expiration: ['', [Validators.required, validateExpiration]],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.pattern(this.cvvPattern)]]
    });
  }

  submitForm(): void {
    const form = this.form;
    if (form.valid) {
      form.disable();
      this.card = {
        owner: form.get('owner').value,
        number: +(form.get('number').value.replace(/\s/g, '')),
        expire: form.get('expiration').value,
        cvv: +form.get('cvv').value
      };
      this.buyService.buyAttempt(this.card).subscribe((result: Message) => {
        this.showMessage(result);
      });
    }
  }

  private showMessage(result: Message): void {
    this.message = result;
  }
  ngOnInit() {
  }

}


