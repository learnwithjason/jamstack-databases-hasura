exports.handler = async (event) => {
  console.log(event);

  // TODO respond to Hasura
  return {
    statusCode: 200,
    body: 'OK',
  };
};
