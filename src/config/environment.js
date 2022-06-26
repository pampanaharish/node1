const environment = {
  port: parseInt(process.env.PORT) || 8080,
  nodeEnv: process.env.NODE_ENV || 'production',
  saltRounds: parseInt(process.env.SALT_ROUNDS) || 10,
  jwtAccessTokenSecret:
    process.env.JWT_ACCESS_TOKEN_SECRET ||
    '0029352a08d4205b821863a504dbf5c26dc85db3170b24b0d3c062bee7748393e429e86080128f04d5afc788089764c426307547ba6740079d60408ed30c3b86',
  jwtRefreshTokenSecret:
    process.env.JWT_REFRESH_TOKEN_SECRET ||
    '0029352a08d4205b821863a504dbf5c26dc85db3170b24b0d3c062bee7748393e429e86080128f04d5afc788089764c426307547ba6740079d60408ed30c3b86',
};

export default environment;
