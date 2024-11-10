import json
def lambda_handler(event, context):
    student_name = "Subhodeep Modak"
    message = f"Hello_{student_name}"
    return {
        'statusCode': 200,
        'body': message
    }
