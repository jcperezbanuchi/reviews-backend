module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '96864c6faf4bc634dddb1c4f9029bf33'),
  },
});
