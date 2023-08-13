import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObject';
import { Pet } from '../models/pet';

export const home = (req: Request, res: Response) => {
    let list = Pet.getAll();

    res.render('pages/page', {
        menu: createMenuObject('todos'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list
    });
};

export const cachorros = (req: Request, res: Response) => {
    let list = Pet.getFromType('dog');
    res.render('pages/page', {
        menu: createMenuObject('cachorro'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        list
    });
};

export const gatos = (req: Request, res: Response) => {
    let list = Pet.getFromType('cat');
    res.render('pages/page', {
        menu: createMenuObject('gato'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        list
    });
};

export const peixes = (req: Request, res: Response) => {
    let list = Pet.getFromType('fish');
    res.render('pages/page', {
        menu: createMenuObject('peixe'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        list
    });
};