import { Button } from "antd";
import React from "react";
import {
  ExportOutlined,
  PlusCircleOutlined,
  DeleteOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import "../../../assets/css/components/common/actionBar.css";
import { Link } from "react-router-dom";

const ActionBar = (props) => {
  return (
    <div className={"action-bar"}>
      <div className={"left"}>
        <Link to={"/asset-management/create"}>
          <Button type="primary" icon={<PlusCircleOutlined />} size={"default"}>
            New
          </Button>
        </Link>
        <Button type="danger" icon={<DeleteOutlined />} size={"default"}>
          Delete All
        </Button>
      </div>
      <div className={"right"}>
        <Button type="default" icon={<FilterOutlined />} size={"default"}>
          Filters
        </Button>
        <Button type="default" icon={<ExportOutlined />} size={"default"}>
          Export
        </Button>
      </div>
    </div>
  );
};

export default ActionBar;
