import app from 'flarum/admin/app';

app.initializers.add('junaid/hello', () => {
  console.log('[junaid/hello] Hello, admin!');
});
