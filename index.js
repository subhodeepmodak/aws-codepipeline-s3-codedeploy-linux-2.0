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

//Q.9] Lambda s3 bucket
import json


def lambda_handler(event, context):
    # Extract bucket name and object key from the event
    for record in event['Records']:
        bucket_name = record['s3']['bucket']['name']
        object_key = record['s3']['object']['key']
       
        # Log the message
        print(f"An object has been added to the bucket {bucket_name}: {object_key}")


    return {
        'statusCode': 200,
        'body': json.dumps('Log completed')
    }
