import {AbstractControl} from '@angular/forms';

export function validateNumbers(control: AbstractControl): { [key: string]: any } {
  const numsPattern = new RegExp(/^[\d\s]*$/);
  const value = control.value;
  /* Check if field contains only numbers */
  if (!numsPattern.test(value)) {
    return { 'number': true };
  }

  /* Check if card number can pass Luhn algorithm check */
  const cleanValue = value.replace(/\D/g, '');
  const prodArr = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]];
  let len = cleanValue.length,
      mul = 0,
      sum = 0;

    while (len--) {
      sum += prodArr[mul][parseInt(cleanValue.charAt(len), 10)];
      mul ^= 1;
    }

    return sum % 10 === 0 && sum > 0 ? null : { 'luhnAlgorithm': true };
}
