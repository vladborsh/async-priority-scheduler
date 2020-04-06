import { Color } from './color.enum';

export interface Node<T> {
    value: T;
    left: Node<T> | null;
    right: Node<T> | null;
    parent: Node<T> | null;
    color: Color;
    key: number;
}
