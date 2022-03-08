import { AbstractControl, ValidatorFn } from "@angular/forms";

export class ConfirmValidators {
    static confirm(ac: string): ValidatorFn {
        return (control: AbstractControl): { [key: string]: boolean } | null => {
            const fc = control.parent?.get(ac);
            if(control.value && fc?.value && (control.value !== fc?.value)){
                return { confirm: true };
            }
            return null;
        };
    }
}