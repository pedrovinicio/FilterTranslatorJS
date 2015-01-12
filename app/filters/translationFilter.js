demoApp.filter('translate', function ($rootScope) {
         var tables = {
             'en': {
                'WELCOME': 'Welcome',
                'MESSAGE' : 'This demo app shows how to use an angular filter to manage internacionalization.',
				'ENGLISH' : 'English',
				'PORTUGUESE' : 'Portuguese',
            },
             'pt': {
                'WELCOME': 'Bem-vindo',
                'MESSAGE' : 'Esta � uma aplicacao de exemplo que mostra como usar um filtro de angular para gerenciar internacionalizacao.',
				'ENGLISH' : 'Ingl�s',
				'PORTUGUESE' : 'Portugu�s',
			}
         };
		 
         return function (label) {
             return tables[$rootScope.currentLanguage][label];
         };
     }
);


