import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  formContext: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 30,
    paddingHorizontal: 12,
  },
  form: {
    width: "100%",
  },
  formLabel: {
    color: "#242424",
    fontSize: 18,
    paddingLeft: 20,
  },
  input: {
    width: "100%",
    borderRadius: 50,
    backgroundColor: "#f6f6f6",
    height: 40,
    paddingLeft: 10,
  },
  textButtonCalculator: {
    fontSize: 20,
    color: "#ffffff",
  },
  buttonCalculator: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#ff0043",
    paddingTop: 14,
    paddingBottom: 14,
    marginTop: 20,
  },
  errorMessage: {
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
    paddingLeft: 20,
  },
  exibitionResultImc: {
    width: "100%",
    height: "50%",
  },
  listImcs: {
    marginTop: 20,
  },
  resultImcItem: {
    fontSize: 24,
    color: "red",
    height: 50,
    width: "100%",
  },
  textResultItemList: {
    fontSize: 16,
  }
});