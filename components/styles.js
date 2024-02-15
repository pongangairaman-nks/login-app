import { StyleSheet } from "react-native";

export const colors = {
  primary: "#FFFFFF",
  secondary: "#075eec",
  lightBackground: "#075eec",
  textInput: "#222222",
  black: "#000000",
  grey: "#929292",
  darkGrey: "#1e1e1e",
};

export const loginScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
    padding: 24,
  },
  header: {
    marginVertical: 36,
  },
  headerImage: {
    width: 80,
    height: 80,
    alignSelf: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
    marginTop: 10,
    textAlign: "center",
    color: colors.darkGrey,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
    color: colors.grey,
  },
  form: {
    flex: 1,
  },
  inputContainer: {
    marginVertical: 12,
  },
  inputLabel: {
    fontSize: 14,
    marginBottom: 10,
  },
  input: {
    backgroundColor: colors.primary,
    paddingVertical: 6,
    paddingHorizontal: 12,
    fontSize: 15,
    color: colors.textInput,
    height: 42,
    borderRadius: 6,
  },
  formAction: {
    marginTop: 30,
  },
  actionBtn: {
    backgroundColor: colors.lightBackground,
    paddingVertical: 14,
    borderRadius: 5,
  },
  btnFont: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
  },
  formFooter: {
    marginTop: 150,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  formFooterText: {
    fontSize: 16,
    alignItems: "center",
    alignContent: "center",
  },
  formFooterBtnText: {
    color: colors.secondary,
    fontSize: 15,
    fontWeight: "500",
    textDecorationLine: "underline",
    marginBottom: -15,
  },
});

export const signUpScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    padding: 24,
  },
  header: {
    marginVertical: 36,
  },
  headerImage: {
    width: 80,
    height: 80,
    alignSelf: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
    marginTop: 10,
    textAlign: "center",
    color: colors.darkGrey,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
    color: colors.grey,
  },
  form: {
    flex: 1,
  },
  inputContainer: {
    marginVertical: 12,
  },
  inputLabel: {
    fontSize: 14,
    marginBottom: 10,
  },
  input: {
    backgroundColor: colors.primary,
    paddingVertical: 6,
    paddingHorizontal: 12,
    fontSize: 15,
    color: colors.textInput,
    height: 42,
    borderRadius: 6,
  },
  formAction: {
    marginTop: 30,
  },
  actionBtn: {
    backgroundColor: colors.lightBackground,
    paddingVertical: 14,
    borderRadius: 5,
  },
  btnFont: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
  },
  formFooter: {
    marginTop: 90,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 30,
  },
  formFooterText: {
    fontSize: 16,
    alignItems: "center",
    alignContent: "center",
  },
  formFooterBtnText: {
    color: colors.secondary,
    fontSize: 15,
    fontWeight: "500",
    textDecorationLine: "underline",
    marginBottom: -15,
  },
});

export const welcomeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    marginVertical: 36,
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
    marginTop: 10,
    textAlign: "center",
    color: colors.primary,
  },
});
