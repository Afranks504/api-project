import 'module-alias/register';

import { readdirSync } from 'fs';

export default (app) => {
  // require all API endpoints
  readdirSync(`${__dirname}/api/`).forEach((file) => {
    require(`./api/${file.substr(0, file.indexOf('.'))}`)(app);
  });
};
