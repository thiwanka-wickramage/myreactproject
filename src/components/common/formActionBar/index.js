import { Button, Tooltip } from "antd";
import React from "react";
import {
  SaveOutlined,
  FontSizeOutlined,
  ReloadOutlined,
  FormOutlined,
} from "@ant-design/icons";
import "../../../assets/css/components/common/formActionBar.css";
import { Link } from "react-router-dom";

const FormActionBar = (props) => {
  return (
    <div className={"action-bar"}>
      <div className={"left"}>
        <Link to={"/asset-management/create"}>
          <Button type="primary" icon={<SaveOutlined />} size={"default"}>
            Save
          </Button>
        </Link>
        <Button type="default" icon={<FormOutlined />} size={"default"}>
          Draft
        </Button>
        <Button type="default" icon={<ReloadOutlined />} size={"default"}>
          Reset
        </Button>
      </div>
      <div className={"right"}>
        <Tooltip placement="topLeft" title={"Toggle form size"}>
          <Button
            type="default"
            onClick={props.onFormLayoutChange}
            icon={<FontSizeOutlined />}
            size={"default"}
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default FormActionBar;
