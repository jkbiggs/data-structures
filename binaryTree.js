// Binary Trees and Tree Traversal

// Binary trees are trees whose nodes can only have up to 2 children

function createBinaryNode(key) {
    return { 
        key,
        left: null,
        right: null,
        addLeft(leftKey) {
            const newLeft = createBinaryNode(leftKey)
            this.left = newLeft
            return newLeft
        },
        addRight(rightKey) {
            const newRight = createBinaryNode(rightKey)
            this.right = newRight
            return newRight
        }
    }
}

const TRAVERSAL = {
    IN_ORDER:
    PRE_ORDER:
    POST_ORDER:
}

function createBinaryTree(rootKey) {
    const root = createBinaryNode(rootKey)

    return { 
        root
    }
}