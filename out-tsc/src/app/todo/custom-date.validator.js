export class CustomDateValidator {
    static dateValidator(form) {
        const startDate = form.get('startDate');
        const endDate = form.get('endDate');
        if (startDate.pristine || endDate.pristine) {
            return null;
        }
        if (new Date(startDate.value) > new Date(endDate.value)) {
            return { dateValidator: true };
        }
        return null;
    }
}
//# sourceMappingURL=custom-date.validator.js.map