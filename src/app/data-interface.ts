
export interface Schema {
    name: string;
    iconClass: string
}

export interface List {
    rows: ListItem[],
    schema: Schema
}

export interface ListItem {
    id: string;
    type: string;
    columns: ItemComponents[]
}
export interface ItemComponents {
    id: string;
    components: ItemComponent[]
}
export interface ItemComponent {
    id: string;
    title: string;
    URL: string;
    icon: string
}