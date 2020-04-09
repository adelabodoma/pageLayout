import { Type } from '@angular/core';

export interface Schema {
    name: string;
    iconClass: string
}

export interface List {
    rows: ListItem[],
    schema: Schema,
    components: ItemComponent[]
}

export interface ListItem {
    id: string;
    type: string;
    columns: ItemComponents[]
}
export interface ItemComponents {
    id: string;
    cssClass: string;
    components: ItemComponent[];
}
export interface ItemComponent {
    id: string;
    title: string;
    icon: string;
    component: Icomponent;
    setting: any
}


export interface Icomponent {
    component: Type<any>;
}