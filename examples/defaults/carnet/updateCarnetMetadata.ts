/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../config';

const params = {
    id: 1004,
};

const body = {
    notification_url: 'http://yourdomain.com',
    custom_id: 'my_new_id',
};

const gerencianet = Gerencianet(options);

gerencianet.updateCarnetMetadata(params, body).then(console.log).catch(console.log).done();
