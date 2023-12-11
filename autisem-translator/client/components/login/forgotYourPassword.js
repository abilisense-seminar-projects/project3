import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import GenericForm from "../shared/form";
import axios from "axios";
import validations from "../../config/validations";

const fields = [
  {
    name: "User Name",
    state: "username",
    placeholder: "Enter your email",
    type: "text",
    rules: validations.email,
  },
];

export default function ForgotYourPassword() {
  const navigation = useNavigation();

  const randomNum = () => {
    let newNumbers = "";
    // Generate 6 random numbers
    while (newNumbers.length < 6) {
      const randomNumber = Math.floor(Math.random() * 9) + 1; // Adjust the range as needed
      newNumbers = newNumbers + randomNumber;
      console.log(newNumbers);
    }
    return newNumbers;
  };

  const onSubmit = (formData) => {
    //send email
    handleSendEmail(formData);
    //clear form?
    //Handle form submission logic
    //save the data in db
    //did all data go through validations / wran user
    //save data / send to server
    console.log("Form data:", data);

    navigation.navigate("New Password");
  };

  return (
    <View>
      <GenericForm
        fields={fields}
        onSubmit={onSubmit}
        submitButton="Reset Password"
      ></GenericForm>
    </View>
  );
}
