import { translationService } from "../services/translationService";
const validations = {
  email: {
    required: translationService.translate("email is required"),
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: translationService.translate("email is invalid"),
    },
  },
  name: {
    required: translationService.translate("name is required"),
    maxLength: {
      value: 50,
      message: translationService.translate(
        "name must not exceed 50 characters"
      ),
    },
  },
  phoneNumber: {
    required: translationService.translate("phone number is required"),
    pattern: {
      value: /^\d+$/,
      message: translationService.translate(
        "phone number must contain only numbers"
      ),
    },
    minLength: {
      value: 10,
      message: translationService.translate(
        "phone number must be at least 10 digits"
      ),
    },
    maxLength: {
      value: 15,
      message: translationService.translate(
        "phone number must not exceed 15 digits"
      ),
    },
  },
  password: {
    required: translationService.translate("password is required"),
    minLength: {
      value: 8,
      message: translationService.translate(
        "password must be at least 8 characters"
      ),
    },
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      message: translationService.translate(
        "password must include at least one letter, one number, and one symbolic character"
      ),
    },
  },

  repeatPassword: {
    required: translationService.translate("password is required"),
    validate: (value, { password }) => {
      if (value !== password) {
        return translationService.translate("passwords do not match");
      }
      return true;
    },
  },

  code: {
    client: {
      required: "code is required.",
      pattern: {
        value: /^\d+$/,
        message: "Code must contain only numbers.",
      },
      minLength: {
        value: 6,
        message: "Code number must be at least 6 digits.",
      },
      maxLength: {
        value: 6,
        message: "Code number must not exceed 6 digits.",
      },
    },

    server: {
      validate: (value) => {
        // Assume 'value' is the response from the server
        if (value === "Code is valid") {
          // Return true for a valid code
          return true;
        }
        // Return an error message for an invalid code
        return "Invalid code. Please try again.";
      },
    },
  },
};

export default validations;
