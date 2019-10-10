import { init } from '@rematch/core';
import createLoadingPlugin from '@rematch/loading';
import * as models from '@/models';

const loading = createLoadingPlugin();

const store = init({
  plugins: [loading],
  models
});

export default store;
