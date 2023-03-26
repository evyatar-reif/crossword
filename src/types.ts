export type cell = {
    value: string;
    x: number;
    y: number;
    type: null | definition;
};

export type valueGrid = Array<any>;

export type colCell = cell[];
export type coordinate = {
    x: number;
    y: number;
};

export type definition = {
    type: 'str' | 'img';
    direction: 'up' | 'down' | 'left' | 'right';
    length: number[];
};
