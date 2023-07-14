// note that Auth is top-level, whereas the API stuff is not
const awsmobile = {
	Auth: {
		region: 'eu-north-1',
		userPoolId: 'eu-north-1_zNLiOUNKU',
		userPoolWebClientId: '7e3tn6hnusu6f5b5tsu1f53ov',
		//userPoolWebClientId: '6vstsucid387qyiry59360',
        //userPoolWebClientId: '6vstsuciYOURCLIENTID',
		identityPoolId: 'eu-north-1:2cce83c7-ccd0-48db-aaec-ab070c27d906',
		
	},
	Storage: {
		AWSS3: {
			bucket: 'amplify-front-dev-123621-deployment',
			region: 'eu-north-1',
		},
	},
	aws_project_region: 'eu-north-1',
	aws_appsync_graphqlEndpoint:'https://2xomdu6tizhu5a2skogvasco5e.appsync-api.eu-north-1.amazonaws.com/graphql',
	aws_appsync_region: 'eu-north-1',
	aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
}

export default awsmobile
