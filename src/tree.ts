import { Node } from './utils/node.interface';
import {
    getParent,
    getUncle,
    maybe,
    getGrandParent,
    getSibling,
    isOnLeft,
    swapValues,
    hasRedChild,
} from './utils/functions';
import { Color } from './utils/color.enum';

export class Tree<T> {
    private root: Node<T> | null = null;

    public insert(node: Pick<Node<T>, 'key' | 'value'>): void {
        const fullNode: Node<T> = {
            ...node,
            left: null,
            right: null,
            parent: null,
            color: Color.BLACK,
        };

        this.insertNode(this.root, fullNode);
        this.insertRepairTree(fullNode);
    }

    public drop(key: number): Node<T> | null {
        const node: Node<T> | null = this.findNode(this.root, key);

        if (node) {
            this.deleteNode(node);
        }

        return node;
    }

    private insertNode(root: Node<T> | null, node: Node<T>): void {
        if (!this.root) {
            this.root = node;

            return;
        }

        if (root) {
            if (node.key < root.key) {
                if (root.left) {
                    return this.insertNode(root.left, node);
                } else {
                    root.left = node;
                }
            } else {
                if (root.right) {
                    return this.insertNode(root.right, node);
                } else {
                    root.right = node;
                }
            }
        }

        node.parent = root;
        node.left = null;
        node.right = null;
        node.color = Color.RED;
    }

    private insertRepairTree(node: Node<T> | null): void {
        console.log('insertRepairTree');
        if (!getParent(node) && node) {
            node.color = Color.BLACK;
        } else if (getParent(node)?.color === Color.BLACK) {
            return;
        } else if (getUncle(node) && getUncle(node)?.color === Color.RED) {
            maybe(getParent(node), (node) => (node.color = Color.BLACK));
            maybe(getUncle(node), (node) => (node.color = Color.BLACK));
            maybe(getGrandParent(node), (node) => (node.color = Color.RED));
            this.insertRepairTree(getGrandParent(node));
        } else {
            const parent: Node<T> | null = getParent(node);
            const grand: Node<T> | null = getGrandParent(node);

            if (node === parent?.right && parent === grand?.left) {
                this.rotateLeft(parent);
                node = node && node.left;
            } else if (node === parent?.left && parent === grand?.right) {
                this.rotateRight(parent);
                node = node && node.right;
            }

            const parentOutside: Node<T> | null = getParent(node);
            const grandOutside: Node<T> | null = getParent(node);

            if (grandOutside) {
                if (node === parentOutside?.left) {
                    this.rotateRight(grandOutside);
                } else {
                    this.rotateLeft(grandOutside);
                }
            }

            if (parentOutside) {
                parentOutside.color = Color.BLACK;
            }

            if (grandOutside) {
                grandOutside.color = Color.RED;
            }
        }
    }

    private deleteNode(node: Node<T>): void {
        const toReplace: Node<T> | null = this.replace(node);
        const bothAreBlack =
            toReplace?.color === Color.BLACK && node.color === Color.BLACK;
        const parent: Node<T> | null = node.parent;

        if (!toReplace) {
            // toReplace is null therefor node is leaf
            if (node === this.root) {
                this.root = null;
            } else {
                if (bothAreBlack) {
                    // node and toReplace both are black and node is leaf, fix double black at node
                    this.fixDoubleBlack(node);
                } else {
                    const sibling = getSibling(node);

                    if (sibling) {
                        sibling.color = Color.RED;
                    }
                }

                // delete node from tree
                if (isOnLeft(node)) {
                    maybe(parent, (parent) => (parent.left = null));
                } else {
                    maybe(parent, (parent) => (parent.right = null));
                }
            }

            return;
        }

        if (!node.left && !node.right) {
            if (node === this.root) {
                // node is root, assign the value of toReplace to node, and delete toReplace
                node.value = toReplace.value;
                node.left = node.right = null;
            } else {
                // detach node from tree and mode toReplace up
                if (isOnLeft(node)) {
                    maybe(parent, (parent) => (parent.left = toReplace));
                } else {
                    maybe(parent, (parent) => (parent.right = toReplace));
                }

                toReplace.parent = parent;

                if (bothAreBlack) {
                    // node and toReplace both are black, fix double black at toReplace
                    this.fixDoubleBlack(toReplace);
                } else {
                    // toReplace or node red, color toReplace BLACK
                    toReplace.color = Color.BLACK;
                }
            }

            return;
        }

        // node has 2 children, swap values with toReplace and repeat recursively
        swapValues(node, toReplace);
        this.deleteNode(toReplace);
    }

    private fixDoubleBlack(node: Node<T> | null): void {
        if (node === this.root) {
            return;
        }

        const sibling: Node<T> | null = getSibling(node);
        const parent: Node<T> | null = node && node.parent;

        if (!sibling) {
            // no sibling, double black pushed up
            this.fixDoubleBlack(parent);
        } else {
            if (sibling && sibling.color === Color.RED) {
                // sibling is RED
                maybe(parent, (parent) => (parent.color = Color.RED));
                maybe(sibling, (sibling) => (sibling.color = Color.BLACK));
                if (isOnLeft(sibling)) {
                    // left case
                    this.rotateRight(parent);
                } else {
                    // right case
                    this.rotateLeft(parent);
                }
                this.fixDoubleBlack(node);
            } else {
                // sibling is BLACK
                if (hasRedChild(sibling)) {
                    // at least 1 red children
                    if (sibling.left?.color === Color.RED) {
                        if (isOnLeft(sibling)) {
                            // left left
                            sibling.left.color = sibling.color;
                            maybe(
                                parent,
                                (parent) => (sibling.color = parent.color)
                            );
                            this.rotateRight(parent);
                        } else {
                            // right left
                            maybe(parent, (parent) =>
                                maybe(sibling, (sibling) =>
                                    maybe(
                                        sibling.left,
                                        (left) => (left.color = parent.color)
                                    )
                                )
                            );
                            this.rotateRight(sibling);
                            this.rotateLeft(parent);
                        }
                    } else {
                        if (isOnLeft(sibling)) {
                            // left right
                            maybe(parent, (parent) =>
                                maybe(sibling, (sibling) =>
                                    maybe(
                                        sibling.right,
                                        (right) => (right.color = parent.color)
                                    )
                                )
                            );
                            this.rotateLeft(sibling);
                            this.rotateRight(parent);
                        } else {
                            // right right
                            maybe(
                                sibling.right,
                                (right) => (right.color = sibling.color)
                            );
                            maybe(
                                parent,
                                (parent) => (sibling.color = parent.color)
                            );
                            this.rotateLeft(parent);
                        }
                    }
                    maybe(parent, (parent) => (parent.color = Color.BLACK));
                } else {
                    // 2 black children
                    sibling.color = Color.RED;

                    if (parent?.color === Color.BLACK) {
                        this.fixDoubleBlack(parent);
                    } else {
                        maybe(parent, (parent) => (parent.color = Color.BLACK));
                    }
                }
            }
        }
    }

    /**
     * find node that replaces a deleted node in BST
     */
    private replace(node: Node<T>): Node<T> | null {
        if (node.left && node.right) {
            return this.getFirstNode(node);
        }

        if (!node.left && !node.right) {
            return null;
        }

        return node.left ? node.left : node.right;
    }

    private findNode(node: Node<T> | null, key: number): Node<T> | null {
        while (node && node.key !== key) {
            if (node.key <= key) {
                node = node.right;
            } else {
                node = node.left;
            }
        }

        return node;
    }

    private rotateLeft(node: Node<T> | null): void {
        console.log('rotateLeft');

        if (!node) {
            return;
        }

        const newNode: Node<T> | null = node.right;
        const parent: Node<T> | null = getParent(node);

        if (!newNode) {
            return;
        }

        node.right = newNode.left;
        newNode.left = node;
        node.parent = newNode;

        if (node.right) {
            node.right.parent = node;
        }

        if (parent) {
            if (node === parent.left) {
                parent.left = newNode;
            } else if (node === parent.right) {
                parent.right = newNode;
            }
        }

        newNode.parent = parent;
    }

    private rotateRight(node: Node<T> | null): void {
        console.log('rotateRight');

        if (!node) {
            return;
        }

        const newNode: Node<T> | null = node.left;
        const parent: Node<T> | null = getParent(node);

        if (!newNode) {
            return;
        }

        node.left = newNode.right;
        newNode.right = node;
        node.parent = newNode;

        if (node.left) {
            node.left.parent = node;
        }

        if (parent) {
            if (node === parent.left) {
                parent.left = newNode;
            } else if (node === parent.right) {
                parent.right = newNode;
            }
        }

        newNode.parent = parent;
    }

    private getFirstNode(node: Node<T> | null = this.root): Node<T> | null {
        while (node && node.left) {
            node = node.left;
        }

        return node;
    }
}
