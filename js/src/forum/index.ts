import app from 'flarum/forum/app';

app.initializers.add('junaid/hello', () => {
  console.log('[junaid/hello] Hello, forum!');
});
