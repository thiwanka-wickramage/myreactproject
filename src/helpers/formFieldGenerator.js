import React, { Fragment } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from "antd";

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const { TextArea } = Input;
const { RangePicker } = DatePicker;

const makeField = (Component, customProps = []) => ({
  input,
  meta,
  children,
  hasFeedback,
  label,
  ...rest
}) => {
  const hasError = meta.touched && meta.invalid;
  console.log("cudisabled  >>>>>>>>>>>> ", input);
  return (
    <Fragment>
      <FormItem
        label={label}
        validateStatus={hasError ? "error" : "success"}
        hasFeedback={hasFeedback && hasError}
        help={hasError && meta.error}
      >
        <Component {...input} {...rest} children={children} />
      </FormItem>
    </Fragment>
  );
};

const AInput = makeField(Input);
const ARadioGroup = makeField(RadioGroup);
const ASelect = makeField(Select);
const ATextarea = makeField(TextArea);
const ARangePicker = makeField(RangePicker);

const getField = () => {
  console.log(" >>>>>>>>>>>> getField");
  const Cnput = <Input disabled={true} />;
  return makeField(Cnput);
};

export { AInput, ARadioGroup, ASelect, ATextarea, ARangePicker, getField };
