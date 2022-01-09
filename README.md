# Devise

https://johnofsydney.github.io/notes/rails/rails_new_project_with_devise.html

gem 'devise'
$ bundle
$ rails g devise:install

Follow devise instructions to add config.action_mailer.default_url_options = { host: 'localhost', port: 3000 } to config/environments/development.rb

Set root in routes.rb

$ rails g devise:views
$ rails g devise User name:string
$ rails db:create
$ rails db:migrate

users/sign_in

# Bootstrap

yarn add bootstrap@latest-4
application.js:
require("bootstrap")

application.css
//= require bootstrap

OR

application.scss

@import "~bootstrap/scss/bootstrap.scss";

See Popper below in environment.js

# Bootstrap Icons

https://stackoverflow.com/questions/60727460/using-bootstrap-icons-in-rails-6-with-webpacker/65975214?noredirect=1#comment122864627_65975214

yarn add bootstrap-icons

application.js:
import 'bootstrap-icons/font/bootstrap-icons.css'

<i class="bi bi-plus-circle"></i>

# jQuery

yarn add jquery

environment.js:

const { environment } = require('@rails/webpacker')
const webpack = require('webpack')

environment.plugins.prepend('Provide',
  new webpack.ProvidePlugin({
    $: 'jquery/src/jquery',
    jQuery: 'jquery/src/jquery',
    Popper: ['popper.js', 'default']
  })
)
module.exports = environment

# Coffsescript

rails webpacker:install:coffee

environment.js:
const coffee =  require('./loaders/coffee')
environment.loaders.prepend('coffee', coffee)

https://stackoverflow.com/questions/66574613/i-get-this-getoptions-is-not-a-function-error-when-using-coffee-loader-on-rail

Downgrade to "coffee-loader": "1.0.1", in package.json

# SASS

sass-rails gem is there by default
mkdir -p app/javascript/css
touch app/javascript/css/application.scss

application.js:
import("css/application")

# Easy AutoComplete

https://joelc.io/dynamic-autocomplete-rails-6

