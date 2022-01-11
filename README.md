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

# Heroku

Got an error with webpacker 4.3.0 on Heroku deploy:

```
       /app/.node-gyp/16.13.1/include/node/node.h:821:43: warning: cast between incompatible function types from ‘void (*)(Nan::ADDON_REGISTER_FUNCTION_ARGS_TYPE)’ {aka ‘void (*)(v8::Local<v8::Object>)’} to ‘node::addon_register_func’ {aka ‘void (*)(v8::Local<v8::Object>, v8::Local<v8::Value>, void*)’} [-Wcast-function-type]
         821 |       (node::addon_register_func) (regfunc),                          \
             |                                           ^
       /app/.node-gyp/16.13.1/include/node/node.h:855:3: note: in expansion of macro ‘NODE_MODULE_X’
         855 |   NODE_MODULE_X(modname, regfunc, NULL, 0)  // NOLINT (readability/null_usage)
             |   ^~~~~~~~~~~~~
       ../src/binding.cpp:358:1: note: in expansion of macro ‘NODE_MODULE’
         358 | NODE_MODULE(binding, RegisterModule);
             | ^~~~~~~~~~~
       make: *** [binding.target.mk:133: Release/obj.target/binding/src/binding.o] Error 1
```

Proposed solution, use newer webpacker:

yarn upgrade @rails/webpacker --latest
