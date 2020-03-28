# Angular-and-Django-Restful-API
Angular with Django REST Framework JWT
Integrating Angular (v8) with DjangoRestframework (v3) and Django(v3), this project uses the concept of JSON web token based authentication for User session management. The project is still under development.

Stack

Angular (4.3.1)
DjangoRestframework ( 3.11.0)
Django(3.0.3)



Angular CLI: 8.3.5
Node: 10.15.3
OS: win32 x64
Angular:
...

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.803.5
@angular-devkit/core         8.3.5
@angular-devkit/schematics   8.3.5
@schematics/angular          8.3.5
@schematics/update           0.803.5
rxjs                         6.4.0


To Run the project

pip install -r requirements.txt
python manage.py runserver
My djangular way of development
Open two terminals:

For angular

cd angular/
npm install # one time installation of dependencies
ng build -op=../backend/templates/angular/ -w
For Django

python manage.py runserver
Notes:

npm install angular-cookie --save
