class Validity {
  static validateEmail(text) {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return text.toLowerCase().trim().match(emailRegex);
  }
  static validateUsername(text) {
    return text.length >= 3;
  }
  static validatePassword(text) {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&\.])[A-Za-z\d@$!%*?&\.]{8,}$/;
    return text.length >= 8 && text.trim().match(passwordRegex);
  }
  static validatePhoneNumber(text) {
    const phoneNumberRegex =
      /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    return text.trim().match(phoneNumberRegex);
  }
}

export { Validity };
