const componentRoutes = [
  {
    path: "/dashboard",
    component: "Comp1",
    title: "Dashboard",
  },
  {
    path: "/asset-management",
    component: "AssetManagement",
    title: "Asset Management",
    subs: [
      {
        path: "/create",
        component: "AMCreateForm",
        title: "Create Asset",
      },
    ],
  },
  {
    path: "/md/master-data",
    component: "Comp2",
    title: "Master Data",
  },
];

export default componentRoutes;
