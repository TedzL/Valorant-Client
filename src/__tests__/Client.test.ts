import { ValorantAPI } from 'uvaw/lib/lib/ValorantAPI';
import { ValorantClient } from '..';

const valClient = new ValorantClient(new ValorantAPI());

test('Account Test', async () => {
  expect((await valClient.getAccount({ name: 'KalilSparta', tag: '90210' })).request.status).toEqual(200);
});
