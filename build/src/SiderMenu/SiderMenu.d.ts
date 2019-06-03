/// <reference types="react" />
export interface IMenuItem {
    name: string;
    to: string;
    title: string;
    icon: string;
    children?: IMenuItem[];
}
export interface ISiderMenuProps {
    menus: IMenuItem[];
    [propName: string]: any;
}
declare const SiderMenu: {
    (props: ISiderMenuProps): JSX.Element;
    displayName: string;
    __docgenInfo: {
        "description": string;
        "displayName": string;
        "props": {
            "menus": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
        };
    };
};
export default SiderMenu;
