import axios from "axios";
import { REACT_APP_BASE_URL } from "@env";

const codeFromTheEmailService = {
  createCodeFromEmail: (codeFromEmail) =>
    axios
      .post(`${REACT_APP_BASE_URL}/sendEmail/verify-code`, codeFromEmail)
      .then((response) => response.data),
};
export default codeFromTheEmailService;
