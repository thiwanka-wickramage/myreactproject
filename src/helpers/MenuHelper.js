import { sideNavBarMenuItems, componentRoutes } from "../constants";
class MenuHelper {
  static menu = sideNavBarMenuItems;
  static currentPath = window.location.pathname;
  static getActiveMenu = () => {
    let activeKeys = [{ activeKey: ["10"] }]; // ['10'] is default key of the dashboard
    const res = this.menu
      .filter(({ link, sub, key }) => {
        if (sub) {
          activeKeys = sub
            .filter(({ link }) => this.currentPath.startsWith(link))
            .map((m) => ({ activeKey: m.key, parentKeys: key }));
        } else return this.currentPath.startsWith(link);
      })
      .map((menu) => ({ activeKey: menu.key, parentKeys: [] }));
    if (res.length) activeKeys = res;
    return activeKeys.length ? activeKeys[0] : { activeKey: ["10"] };
  };

  static getActiveScreenTitle = () => {
    let title = "";
    componentRoutes.map((item) => {
      if (item.subs) {
        item.subs.map((sub) => {
          const path = `${item.path}${sub.path}`;
          if (this.currentPath === path) title = sub.title;
        });
      }
      if (this.currentPath === item.path) return (title = item.title);
    });
    return title;
  };
}

export default MenuHelper;
