const sideNavMenu = [
  {
    key: "10",
    label: "Dashboard",
    link: "/dashboard",
  },
  {
    key: "20",
    label: "Master Data",
    link: "_",
  },
  {
    parentKey: ["20"],
    key: "201",
    label: "Master Program",
    link: "/md/master-data",
  },
  {
    parentKey: ["20"],
    key: "202",
    label: "Master Program Data",
    link: "/md/program-data",
  },
  {
    parentKey: ["20"],
    key: "203",
    label: "Vendor Management",
    link: "/md/vendor-management",
  },
  {
    parentKey: ["20"],
    key: "204",
    label: "User Info",
    link: "/md/user-info",
  },
  {
    key: "30",
    label: "Asset Management",
    link: "/asset-management",
  },
  {
    key: "40",
    label: "Process Management",
    link: "/process-management",
  },
  {
    key: "50",
    label: "Risk Management",
    link: "/risk-management",
  },
];
module.exports = { sideNavMenu: JSON.parse(JSON.stringify(sideNavMenu)) };
