import app from 'flarum/common/app';

app.initializers.add('junaid/hello', () => {
  console.log('[junaid/hello] Hello, forum and admin!');
});
