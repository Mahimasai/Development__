const User = {
  _email: "h@hc.com",
  _password: "abd",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};

const tea = Object.create(User);
console.log(tea.email); //but no property right how can we get the email ?????
