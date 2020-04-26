const sideNavBarMenuItems = [
  {
    key: "10",
    label: "Dashboard",
    link: "/dashboard",
  },
  {
    key: "20",
    label: "Master Data",
    link: "_",
    sub: [
      {
        key: "201",
        label: "Master Program",
        link: "/md/master-data",
      },
      {
        key: "202",
        label: "Master Program Data",
        link: "/md/program-data",
      },
      {
        key: "203",
        label: "Vendor Management",
        link: "/md/vendor-management",
      },
      {
        key: "204",
        label: "User Info",
        link: "/md/user-info",
      },
    ],
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

export default sideNavBarMenuItems;
