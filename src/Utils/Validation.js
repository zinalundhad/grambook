const emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;


//Email validation
const validateEmail = email => {
  if (!email) {
    return {
      status: false,
      msg: strings.thisFieldIsMandatory,
    };
  } else {
    return emailRegEx.test(email)
      ? {status: true, msg: ''}
      : {
          status: false,
          msg: strings.validEmail,
        };
  }
};