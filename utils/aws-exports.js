const awsExports = {
    Auth: {
      region: process.env.NEXT_PUBLIC_AWS_COGNITO_REGION,
      userPoolId: process.env.NEXT_PUBLIC_AWS_USER_POOLS_ID,
      userPoolWebClientId: process.env.NEXT_PUBLIC_AWS_USER_POOLS_WEB_CLIENT_ID,
    },
  };
  
  export default awsExports;
  