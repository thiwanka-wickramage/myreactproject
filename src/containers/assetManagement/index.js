import React, { Component } from "react";
import { Table, Tag } from "antd";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { getAssetsAction } from "./actions";
import { getAssetsSelector } from "./selectors";

import ActionBar from "../../components/common/actionBar";

class AssetManagement extends Component {
  componentDidMount() {
    this.getAssets();
  }

  getAssets() {
    this.props.getAssets();
  }

  render() {
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: (text) => <a>{text}</a>,
      },
      {
        title: "Age",
        dataIndex: "age",
        key: "age",
      },
      {
        title: "Address",
        dataIndex: "address",
        key: "address",
      },
      {
        title: "Tags",
        key: "tags",
        dataIndex: "tags",
        render: (tags) => (
          <span>
            {tags.map((tag) => {
              let color = tag.length > 5 ? "geekblue" : "green";
              if (tag === "loser") {
                color = "volcano";
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </span>
        ),
      },
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <span>
            <a style={{ marginRight: 16 }}>Invite {record.name}</a>
            <a>Delete</a>
          </span>
        ),
      },
    ];

    const data = [
      {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
        tags: ["nice", "developer"],
      },
      {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
        tags: ["loser"],
      },
      {
        key: "3",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
      },
    ];
    return (
      <div>
        <ActionBar />
        {console.log("users map -- -->>>>>>>>>>>> ", this.props.getAssets_data)}
        <Table dataSource={data} columns={columns} />;
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  getAssets_data: getAssetsSelector(),
});

const mapDispatchToProps = (dispatch) => ({
  getAssets: () => dispatch(getAssetsAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AssetManagement);
