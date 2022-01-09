// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("jquery")
require("easy-autocomplete")
require("popper.js")

import "css/application"
import "packs/hello_coffee"
import "bootstrap"
import 'bootstrap-icons/font/bootstrap-icons.css'

// Import the specific modules you may need (Modal, Alert, etc)
import { Tooltip, Popover } from "bootstrap"

document.addEventListener("turbolinks:load", function() {
    console.log('Hello easyautocomplete');
    var options = {
        data: ["John", "Paul", "George", "Ringo"]
    };
    $('.typeahead').easyAutocomplete(options);
});

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
