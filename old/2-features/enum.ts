
enum Index {
    s = 42,
    M = 48,
    XL = 52
}

enum UserAction {
    DELETE = '[USER MODULE] DELETE USER',
    CREATE = '[USER MODULE] CREATE USER',
    REMOVE = DELETE
}

function reducer(action: UserAction) {
    switch(action) {
        case UserAction.CREATE: {
            break;
        }
        case UserAction.DELETE: {
            break;
        }
        case UserAction.REMOVE: {
            break;
        }
    }
}