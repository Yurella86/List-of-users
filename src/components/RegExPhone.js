
export default function RegExpPhone(phone) {
    let regExPhone = phone.match(/^.*(?=x)/g)
    let phoneNumber = !regExPhone ? phone : String(regExPhone);
    let numericOnly = phoneNumber.replace(/\D/g, '');
    return numericOnly
} 