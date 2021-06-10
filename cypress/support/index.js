import './iframe';

Cypress.on('uncaught:exception', (err, runnable) => false);

const commands = [];

Cypress.on('test:after:run', (attributes) => {
  /* eslint-disable no-console */
  console.log('Test "%s" has finished in %dms',
    attributes.title, attributes.duration);
  console.table(commands);
  commands.length = 0;
});

Cypress.on('command:start', (c) => {
  commands.push({
    name: c.attributes.name,
    started: +new Date(),
  });
});

Cypress.on('command:end', (c) => {
  const lastCommand = commands[commands.length - 1];

  if (lastCommand.name !== c.attributes.name) {
    throw new Error('Last command is wrong');
  }

  lastCommand.endedAt = +new Date();
  lastCommand.elapsed = lastCommand.endedAt - lastCommand.started;
});
