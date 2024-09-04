import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email().label("Email"),
  password: Yup.string()
    .required("Password is required")
    .min(4)
    .label("Password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

const register = () => {
  return (
    <View>
      <Formik
        initialValues={{ email: "", password: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => (
          <View>
            <TextInput
              styles={styles.forms}
              placeholder="Email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              keyboardType="email-address"
            />

            {errors.email && touched.email && <Text>{errors.email}</Text>}

            <TextInput
              styles={styles.forms}
              placeholder="Password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              secureTextEntry
            />

            <TextInput
              styles={styles.forms}
              placeholder="Confirm Password"
              onChangeText={handleChange("confirmPassword")}
              onBlur={handleBlur("confirmPassword")}
              value={values.confirmPassword}
              secureTextEntry
            />

            {errors.confirmPassword && touched.confirmPassword && (
              <Text>{errors.confirmPassword}</Text>
            )}

            <TouchableOpacity onPress={handleSubmit}>
              <Text style={styles.buttons}>Register</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default register;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: 300, // Set a specific width
    height: 200, // Set a specific height
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    gap: 3,
  },
  buttons: {
    padding: 3,
    textAlign: "center",
    backgroundColor: "blue",
    color: "white",
  },
  forms: {
    border: 1,
    padding: 3,
    borderRadius: 5,
  },
});
