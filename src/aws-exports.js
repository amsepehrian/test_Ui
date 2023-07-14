// note that Auth is top-level, whereas the API stuff is not
const awsmobile = {
	Auth: {
		region: 'eu-north-1',
		userPoolId: 'eu-north-1_wPxaUpdnH',
		userPoolWebClientId: '59vm5n9i86m8tn4kvsca9eenpc',
		//userPoolWebClientId: '6vstsucid387qyiry59360',
        //userPoolWebClientId: '6vstsuciYOURCLIENTID',
		identityPoolId: 'eu-north-1:cef88f62-52ba-4c88-990d-f79607afce40',
		
	},
	Storage: {
		AWSS3: {
			bucket: 'filestoragestack-s3bucket64cb25af-y5q4mf4snro5',
			region: 'eu-north-1',
		},
	},
	aws_project_region: 'eu-north-1',
	aws_appsync_graphqlEndpoint:'https://2xomdu6tizhu5a2skogvasco5e.appsync-api.eu-north-1.amazonaws.com/graphql',
	aws_appsync_region: 'eu-north-1',
	aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
}

export default awsmobile
