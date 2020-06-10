Сайт для отображения подробной статистики по игрокам вашего сервера ![https://img.shields.io/badge/Realese-No-red](https://img.shields.io/badge/Realese-No-red) ![https://img.shields.io/badge/React-v16.13.1-blue](https://img.shields.io/badge/React-v16.13.1-blue) ![https://img.shields.io/badge/FireBase-v7.14.3-yellow](https://img.shields.io/badge/FireBase-v7.14.3-yellow)
-----------------------------------------------------------------------------------------------------------------------------------
___________________________________________________________________________________________________________________________________
Для использования вам необходим профиль на firebase и созданное там приложение. Первым делом в файле fireBaseApp.jsx необходимо вставить информацию о своём приложении. В последнем обязательно иметь RealTimeDatabase, в которой будет храниться информация о вашем сервере в формате:
```
	{
		"dict": {
			...
		},
		"players" : {
			"eeb8ea31-b5c9-4a69-baee-8ba8c22f04a9" : {
				...
			}
		}
	}
```
Причём инофрмация об игроках берётся из файлов в папке сервера, а словарь (dict) представлен в исходниках проекта. После чего можно собрать проект и разместить на вашем хосте..
