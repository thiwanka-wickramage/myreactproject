import React, { useState } from "react";
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
import FormActionBar from "../../../components/common/formActionBar";

const AMCreateForm = () => {
  const [componentSize, setComponentSize] = useState("small");
  const onFormLayoutChange = () => {
    setComponentSize(componentSize === "small" ? "middle" : "small");
  };
  return (
    <div>
      <FormActionBar onFormLayoutChange={onFormLayoutChange} />
      <Form
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 5 }}
        layout="horizontal"
        initialValues={{ name: "test" }}
        size={componentSize}
      >
        <Form.Item label="Input" name={"name"}>
          <Input />
        </Form.Item>
        <Form.Item label="Select">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="TreeSelect">
          <TreeSelect
            treeData={[
              {
                title: "Light",
                value: "light",
                children: [{ title: "Bamboo", value: "bamboo" }],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="Cascader">
          <Cascader
            options={[
              {
                value: "zhejiang",
                label: "Zhejiang",
                children: [
                  {
                    value: "hangzhou",
                    label: "Hangzhou",
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item label="InputNumber">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Switch">
          <Switch />
        </Form.Item>
        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AMCreateForm;
