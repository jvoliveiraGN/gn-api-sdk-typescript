/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../config';

const body = {
    items: [
        {
            name: 'Carnet Item 1',
            value: 1000,
            amount: 2,
        },
    ],
    customer: {
        name: 'Gorbadoc Oldbuck',
        email: 'oldbuck@gerencianet.com.br',
        cpf: '94271564656',
        birth: '1977-01-15',
        phone_number: '5144916523',
    },
    repeats: 12,
    split_items: false,
    expire_at: '2022-01-05',
};

const gerencianet = Gerencianet(options);

gerencianet.createCarnet({}, body).then(console.log).catch(console.log).done();
