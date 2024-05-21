export interface Action {
    type: string;
    [key: string | number]: any;
}
