import { sideNavMenu } from "../constants/menuConstants";
class MenuHelper {
  static getActiveMenu = () => {
    const menu = sideNavMenu;
    const currentPath = window.location.pathname.split("/");
    const res = [].concat.apply(
      [],
      menu
        .filter(({ link, parentKey }) => {
          if (parentKey) return link === `/${currentPath[1]}/${currentPath[2]}`;
          else return link === `/${currentPath[1]}`;
        })
        .map(({ key, parentKey }) => {
          if (parentKey) parentKey.push(key);
          else return key;
          return parentKey;
        })
    );
    return res.length ? res : ["10"]; // ['10'] is default key of the dashboard
  };
}

export default MenuHelper;
