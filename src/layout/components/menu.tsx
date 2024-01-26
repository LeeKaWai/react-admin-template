import { Menu } from 'antd'
import { routes } from '../../router';
import { Link } from 'react-router-dom';


const generateMenuItems: any = (routes: any, parentPath = "") => {
    const menuItems = [];

    for (const route of routes) {
        debugger;
        let fullKey = "";
        if (parentPath === "" && route.path.startsWith("/")) {
            fullKey = route.path;
        } else {
            fullKey = `${parentPath}/${route.path}`;
        }

        if (route.children && route.children.length > 0) {
            // Recursively process children
            const subMenuItems = generateMenuItems(route.children, fullKey);

            // If there is only one child, use it as the first-level menu
            if (subMenuItems.length === 1) {
                menuItems.push(...subMenuItems);
            } else {
                // Add parent menu item with children
                menuItems.push({
                    key: fullKey,
                    label: <Link to={fullKey}>{route.name}</Link>,
                    children: subMenuItems,
                });
            }

        } else {
            // Leaf node, add to menu
            if (route.path === "page1") {
                // Add page1 as a leaf node with a link
                menuItems.push({
                    key: fullKey,
                    label: <Link to={fullKey}>{route.name}</Link>,
                });
            } else {
                menuItems.push({
                    key: fullKey,
                    label: route.name,
                });
            }
        }
    }

    return menuItems;
};

const CustomMenu = () => {
    const items: any = generateMenuItems(routes)
    debugger;
    return (
        <Menu
            style={{ width: 256 }}
            items={items}
        />

    )
}


export default CustomMenu