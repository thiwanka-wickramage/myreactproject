import React, { useState } from "react";
import { reduxForm, Field } from "redux-form";
import { Col, Form, Radio, Row, Select, Collapse } from "antd";
import {
  AInput,
  ASelect,
} from "../../../helpers/formFieldGenerator";
import "../../../assets/css/containers/assetManagement.css";

const { Option } = Select;
const { Panel } = Collapse;

const labelWidth = "140px";
const AILabelWidth = "180px";

const validate = (values) => {
  const errors = {};
  if (!values.mainCategory) {
    errors.mainCategory = "Required";
  }

  return errors;
};
const doSub = () => {
  console.log("do sub >>>>>>>>>>>> ");
};

let SignInForm = (props) => {
  const { handleSubmit, componentSize } = props;
  return (
    <Row>
      <Col flex="auto">
        <Form
          onSubmit={handleSubmit}
          className="form"
          layout="horizontal"
          initialValues={{ firstName: "test" }}
          size={componentSize}
        >
          <Row>
            <Col flex={labelWidth}>
              <span className="input-title">Main Category</span>
            </Col>
            <Col span={3}>
              <Field name="mainCategory" component={AInput} hasFeedback />
            </Col>
          </Row>
          <Row>
            <Col flex={labelWidth}>
              <span className="input-title">Asset Category</span>
            </Col>

            <Col span={3}>
              <div className="form-group input-wrap">
                <Field name="assetCategory" component={AInput} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col flex={labelWidth}>
              <span className="input-title">Asset Code</span>
            </Col>
            <Col span={2}>
              <Field
                name="assetCode"
                component={AInput}
                props={{
                  disabled: true,
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col flex={labelWidth}>
              <span className="input-title">Asset Name</span>
            </Col>
            <Col span={5}>
              <Field name="assetName" component={AInput} />
            </Col>
          </Row>
          <Row>
            <Col flex={labelWidth}>
              <span className="input-title">Asset Owner</span>
            </Col>
            <Col span={3}>
              <Field name="assetOwner" component={AInput} />
            </Col>
          </Row>
          <Row>
            <Col flex={labelWidth}>
              <span className="input-title">Asset Custodian</span>
            </Col>
            <Col span={3}>
              <Field name="assetCustodian" component={AInput} />
            </Col>
          </Row>
          <Row>
            <Col flex={labelWidth}>
              <span className="input-title">Criminality</span>
            </Col>
            <Col span={3}>
              <Field
                name="criminality"
                component={ASelect}
                props={{ value: "internal" }}
              >
                <Option value="internal">Internal</Option>
                <Option value="public">Public</Option>
                <Option value="confidential">Confidential</Option>
                <Option value="strictlyConfidential">
                  Strictly Confidential
                </Option>
              </Field>
            </Col>
          </Row>
          <Row>
            <Col flex={labelWidth}>
              <span className="input-title">C</span>
            </Col>
            <Col span={1}>
              <Field name="c" component={AInput} />
            </Col>
            <Col span={1}>
              <span className="input-title">I</span>
            </Col>
            <Col span={1}>
              <Field name="i" component={AInput} />
            </Col>
            <Col span={1}>
              <span className="input-title">A</span>
            </Col>
            <Col span={1}>
              <Field name="a" component={AInput} />
            </Col>
          </Row>
          <Row>
            <Col flex={labelWidth}>
              <span className="input-title">Retained Period</span>
            </Col>
            <Col span={1}>
              <Field name="retainedPeriod" component={AInput} />
            </Col>
            <Col span={1}>
              <span className="input-guide">(Months)</span>
            </Col>
          </Row>
          <Row>
            <Col flex={labelWidth}>
              <span className="input-title">Backup Required ?</span>
            </Col>
            <Col span={1}>
              <Field
                name="backupRequired"
                component={ASelect}
                props={{ value: "yes" }}
              >
                <Option selected value="yes">
                  Yes
                </Option>
                <Option value="no">No</Option>
              </Field>
            </Col>
          </Row>
          <Row>
            <Col flex={labelWidth}>
              <span className="input-title">Issued ?</span>
            </Col>
            <Col span={1}>
              <Field name="issued" component={ASelect} props={{ value: "yes" }}>
                <Option selected value="yes">
                  Yes
                </Option>
                <Option value="no">No</Option>
              </Field>
            </Col>
          </Row>
          <Row>
            <Col flex={labelWidth}>
              <span className="input-title">Remark</span>
            </Col>
            <Col span={5}>
              <Field name="remark" component={AInput} />
            </Col>
          </Row>
          <Row>
            <Col flex={labelWidth}>
              <span className="input-title">Value</span>
            </Col>
            <Col span={2}>
              <Field name="value" component={AInput} />
            </Col>
          </Row>
          <Row>
            <Col flex={labelWidth}>
              <span className="input-title">Vendor</span>
            </Col>
            <Col span={3}>
              <Field name="vendor" component={AInput} />
            </Col>
          </Row>
          <Row>
            <Col flex={labelWidth}>
              <span className="input-title">Usage</span>
            </Col>
            <Col span={3}>
              <Field name="usage" component={AInput} />
            </Col>
          </Row>
          <Row>
            <Col flex={labelWidth}>
              <span className="input-title">IP Address</span>
            </Col>
            <Col span={2}>
              <Field name="ip" component={AInput} />
            </Col>
          </Row>
          <Row>
            <Col flex={labelWidth}>
              <span className="input-title">Location</span>
            </Col>
            <Col span={3}>
              <Field name="location" component={AInput} />
            </Col>
          </Row>
          <Collapse bordered={false}>
            <Panel header="Additional Info" key="1">
              <Row>
                <Col flex={AILabelWidth}>
                  <span className="input-title">Cryptography Key Usage</span>
                </Col>
                <Col span={1}>
                  <Field
                    name="cryptographyKeyUsage"
                    component={ASelect}
                    props={{ value: "yes" }}
                  >
                    <Option selected value="yes">
                      Yes
                    </Option>
                    <Option value="no">No</Option>
                  </Field>
                </Col>
              </Row>
              <Row>
                <Col flex={AILabelWidth}>
                  <span className="input-title">SSL/TLS Version</span>
                </Col>
                <Col span={3}>
                  <Field name="version" component={AInput} />
                </Col>
              </Row>
              <Row>
                <Col flex={AILabelWidth}>
                  <span className="input-title">Password Policy Enforced?</span>
                </Col>
                <Col span={1}>
                  <Field
                    name="passwordPolicyEnforced"
                    component={ASelect}
                    props={{ value: "yes" }}
                  >
                    <Option selected value="yes">
                      Yes
                    </Option>
                    <Option value="no">No</Option>
                  </Field>
                </Col>
              </Row>
              <Row>
                <Col flex={AILabelWidth}>
                  <span className="input-title">Justification</span>
                </Col>
                <Col span={5}>
                  <Field name="justification" component={AInput} />
                </Col>
              </Row>
              <Row>
                <Col flex={AILabelWidth}>
                  <span className="input-title">
                    Card Information Available ?
                  </span>
                </Col>
                <Col span={1}>
                  <Field
                    name="cardInformationAvailable"
                    component={ASelect}
                    props={{ value: "yes" }}
                  >
                    <Option selected value="yes">
                      Yes
                    </Option>
                    <Option value="no">No</Option>
                  </Field>
                </Col>
              </Row>
              <Row>
                <Col flex={AILabelWidth}>
                  <span className="input-title">
                    Installed Application/Component
                  </span>
                </Col>
                <Col span={3}>
                  <Field name="installApp" component={AInput} />
                </Col>
              </Row>
            </Panel>
          </Collapse>
        </Form>
      </Col>
    </Row>
  );
};

SignInForm = reduxForm({
  form: "signIn",
  validate,
})(SignInForm);

export default SignInForm;
