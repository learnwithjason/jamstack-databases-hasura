exports.handler = async (event) => {
  // the body contains something like this:
  // {"session_variables":{"x-hasura-role":"admin"},"input":{"numbers":[10,5]},"action":{"name":"add"}}
  const body = JSON.parse(event.body);

  const {
    numbers: [num1, num2],
  } = body.input;

  return {
    statusCode: 200,
    body: JSON.stringify({ sum: num1 + num2 }),
  };
};
