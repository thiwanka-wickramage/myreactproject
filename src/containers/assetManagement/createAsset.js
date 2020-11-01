import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { submit } from "redux-form";

import FormActionBar from "../../components/common/formActionBar";
import "../../assets/css/containers/assetManagement.css";
import SignInForm from "./form/CreateForm";
import { getAssetsAction } from "./actions";

const CreateAsset = (props) => {
  const [componentSize, setComponentSize] = useState("small");
  const onFormLayoutChange = () => {
    setComponentSize(componentSize === "small" ? "middle" : "small");
  };

  const handleSubmit = (data) => {
    console.log("handleSubmit >>>>>>>>>>>> ", data);
  };

  const commonBtnSubmit = (data) => {
    console.log("commonBtnSubmit >>>>>>>>>>>> ");
    props.handleSubmit(data);
  };

  return (
    <div>
      <FormActionBar
        onFormLayoutChange={onFormLayoutChange}
        handleSubmit={commonBtnSubmit}
      />
      <SignInForm
        componentSize={componentSize}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: () => dispatch(submit("signIn")),
});

export default connect(null, mapDispatchToProps)(CreateAsset);
