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

export type file = {
    name: string;
    height: number;
    width: number;
    grid: valueGrid;
} | null;
