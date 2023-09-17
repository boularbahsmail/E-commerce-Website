import React from "react";
import loadable from "@loadable/component";
import { IconBaseProps } from "react-icons/lib";

interface typesPropsIcon {
    title: string;
    props?: IconBaseProps;
}

export const Icon = ({ title, props }: typesPropsIcon): JSX.Element => {
    const lib = title
        .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
        .split(" ")[0]
        .toLocaleLowerCase();
    const ElementIcon: any = loadable(
        () => import(`react-icons/${lib}/index.js`),
        {
            resolveComponent: (el: JSX.Element) => el[title as keyof JSX.Element],
        }
    );

    return <ElementIcon {...props} />;
};