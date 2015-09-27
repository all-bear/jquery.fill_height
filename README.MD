# JQuery Fill Height

### Overview

JQuery plugin that allows you to stretch an element height to fill all available space of parent.

### Usage

For default you need add 'fill-height' class to the element ... and that's all :)

### Advanced usage
Plugin default options:
```
$.fn.fillHeight.defaults = {
        autoRun: true,
        selector: '.fill-height',
        updateEvent: 'fill-height-update'
    }
```
* autoRun - if true fillHeight will be applied at document ready to all elements with selector
* selector - see autoRun option
* updateEvent - plugin observe resize event for window and this event on element for updating height

License
----

MIT
