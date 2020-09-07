# Django + Vue JS + Materialize CSS

![Vue Logo](/frontend/src/assets/logo-vue.png "Vue Logo")
![Django Logo](/frontend/src/assets/logo-django.png "Django Logo")

This template is a minimal example for an application using Vue and Django.

It's setup to have a clear separation: use Vue to handle all frontend logic and assets bundling,
and use Django with Django REST framework to manage a Data Models, Web API, and serve static files.

While it's possible to add endpoints to serve django-rendered html responses, the intention is to use Django primarily for the backend, and have view rendering and routing and handled by Vue + Vue Router as a Single Page Application (SPA).

#### Alternatives

If this setup is not what you are looking for, you might want look at other similar projects:

* [ariera/django-vue-template](https://github.com/ariera/django-vue-template)
* [vchaptsev/cookiecutter-django-vue](https://github.com/vchaptsev/cookiecutter-django-vue)
* [sobolevn/django-vue-template](https://github.com/sobolevn/django-vue-template)

### Includes

* Django
* Django REST framework
* Vue CLI 3
* Vue Router
* Vuex

### Template Structure


| Location                  |  Content                                   |
|---------------------------|--------------------------------------------|
| `/auth_project`           | Django Project & Backend Config            |
| `/auth_project/api`       | Django App (`/api`)                        |
| `frontend/src`            | Vue App .                                  |
| `frontend//src/main.js`   | JS Application Entry Point                 |
| `/public/index.html`      | Html Application Entry Point (`/`)         |

## Prerequisites

Before getting started you should have the following installed and running:

- [X] Vue CLI 3 - [instructions](https://cli.vuejs.org/guide/installation.html)
- [X] Python 3 - [instructions](https://wiki.python.org/moin/BeginnersGuide)
- [X] Pipenv - [instructions](https://pipenv.readthedocs.io/en/latest/install/#installing-pipenv)

## Setup Template

```
$ git clone https://github.com/vzvanov/django_vue_auth
$ cd django_vue_auth
```

Setup
```
$ python -m venv env_auth
$ env_auth\Scripts\activate.bat
$ pip install -r requirements.txt
$ python manage.py migrate
$ python manage.py createsuperuser
```

## Running Development Servers

```
$ python manage.py runserver
```

The Vue application will be served from [`localhost:8080`](http://localhost:8080/) and the Django API
and static files will be served from [`localhost:8000`](http://localhost:8000/).

The dual dev server setup allows you to take advantage of
webpack's development server with hot module replacement.
Proxy config in [`vue.config.js`](/vue.config.js) is used to route the requests
back to django's API on port 8000.

If you would rather run a single dev server, you can run Django's
development server only on `:8000`, but you have to build build the Vue app first
and the page will not reload on changes.

```
$ npm run serve
$ python manage.py runserver
```