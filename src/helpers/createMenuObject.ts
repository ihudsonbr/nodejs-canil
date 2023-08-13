type MenuOptions = '' | 'todos' | 'cachorro' | 'gato' | 'peixe';

export const createMenuObject = (activeMenu: MenuOptions) => {
    let returnObject = {
        todos: false,
        cachorro: false,
        gato: false,
        peixe: false
    };

    if (activeMenu !== '') {
        returnObject[activeMenu] = true;
    }

    return returnObject;
};