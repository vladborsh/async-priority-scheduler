import { Node } from './node.interface';
import { Color } from './color.enum';

export function getParent<T>(node: Node<T> | null): Node<T> | null {
    return !node ? node : node.parent;
}

export function getGrandParent<T>(node: Node<T> | null): Node<T> | null {
    return getParent(getParent(node));
}

export function getSibling<T>(node: Node<T> | null): Node<T> | null {
    const parent: Node<T> | null = getParent(node);

    if (!parent) {
        return null;
    }

    return node === parent.left ? parent.right : parent.left;
}

export function getUncle<T>(node: Node<T> | null): Node<T> | null {
    return getSibling(getParent(node));
}

export function maybe<T>(value: T | null, callback: (value: T) => void): void {
    if (value) {
        callback(value);
    }
}

export function isOnLeft<T>(node: Node<T> | null): boolean {
    return node?.parent?.left === node;
}

export function hasRedChild<T>(node: Node<T> | null): boolean {
    return node?.left?.color === Color.RED || node?.right?.color === Color.RED;
}

export function swapValues<T>(firstNode: Node<T>, secondNode: Node<T>): void {
    const temp = firstNode.value;
    firstNode.value = secondNode.value;
    secondNode.value = temp;
}
