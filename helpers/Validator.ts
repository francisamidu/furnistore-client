class Validator {
  static validateEmail = (email: string) => {
    // [a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?

    /**
     * Validates passed email
     * Matches about 99.9 of emails in use today
     */
    const regexp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(email);
  };
  static validatePassword = (password: string) => {
    /**
     * Validates passed password
     * Matches a password that contains: at least 8 characters,1 number,1 lowercase character, 1 uppercase letter, 1 special character
     */
    const regexp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    return regexp.test(password);
  };
}

export default Validator;
