//Python code
import json
def lambda_handler(event, context):
    student_name = "Subhodeep Modak"
    message = f"Hello_{student_name}"
    return {
        'statusCode': 200,
        'body': message
    }

Q.10] Nodejs code

export const handler = async (event) => {
  // TODO implement
  const name = "    Subhodeep Modak"
  const response = {
    statusCode: 200,
    body: JSON.stringify(Hello ${name}),
  };
  return response;
};
