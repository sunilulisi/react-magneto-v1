const ComponentLibrary = require("./componentLibrary");
const ComponentGenerator = require("./componentGenerator");

const generateComponent = (masterLayout, componentData) => {
  const res = ComponentGenerator.generateComponent(masterLayout, componentData);
  return res;
};

const generateJSX = async (masterLayout) => {
  return new Promise((resolve, reject) => {
    let componentData = [];
    masterLayout.componentList.forEach((component) => {
      if (component.type === "TextInput") {
        componentData.push({ compName: "Paper", jsx: "" });
        componentData.push({ compName: "Grid", jsx: "" });
        componentData.push({
          compName: "TextField",
          jsx: ComponentLibrary.textInputComponent(component.attributes),
        });
      } else if (component.type === "RadioButton") {
        componentData.push({ compName: "FormLabel", jsx: "" });
        componentData.push({
          compName: "RadioGroup",
          jsx: ComponentLibrary.radioButtonComponent(component.attributes),
        });
        componentData.push({ compName: "FormControlLabel", jsx: "" });
        componentData.push({ compName: "Radio", jsx: "" });
      } else if (component.type === "DropDown") {
        componentData.push({
          compName: "InputLabel",
          jsx: ComponentLibrary.dropDownComponent(component.attributes),
        });
        componentData.push({ compName: "NativeSelect", jsx: "" });
      } else if (component.type === "CheckBox") {
        componentData.push({
          compName: "Checkbox",
          jsx: ComponentLibrary.checkBoxComponent(component.attributes),
        });
        componentData.push({ compName: "FormGroup", jsx: "" });
      } else if (component.type === "TextContainer") {
        componentData.push({
          compName: "Container",
          jsx: ComponentLibrary.textContainerComponent(component.attributes),
        });
        componentData.push({ compName: "Paper", jsx: "" });
        componentData.push({ compName: "Grid", jsx: "" });
      } else if (component.type === "Table") {
        componentData.push({
          compName: "Table",
          jsx: ComponentLibrary.tableComponent(component.attributes),
        });
      }
    });

    const jsxFile = generateComponent(masterLayout, componentData);
    resolve(jsxFile);
  });
};

module.exports = { generateJSX };
