import {AbstractControl} from '@angular/forms';

export function validateExpiration(control: AbstractControl): { [key: string]: any } {
  const expirationPattern = new RegExp(/^(0[1-9]|1[0-2])\/(20[0-9]{2}|[0-9]{2})$/),
    value = control.value;
  /* Check if field has correct format */
  if (!expirationPattern.test(value)) {
    return { 'pattern': true };
  }

  /* Check if card expire date does not expired */
  const dateValues = value.split('/'),
    month = parseInt(dateValues[0], 10),
    year  = parseInt(dateValues[1].length === 2 ? +dateValues[1] + 2000 : dateValues[1], 10),
    currentMonth = new Date().getMonth() + 1,
    currentYear  = new Date().getFullYear();

  if (year < currentYear || (year === currentYear && month <= currentMonth)) {
    return { 'expired': true };
  }
  return null;
}
