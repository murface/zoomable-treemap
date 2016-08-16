
'use strict';

var $       = require('./../node_modules/jquery/dist/jquery.min.js');
var Treemap = require('./Treemap');

// Main data structure
var treemapConfig = {
    
    // CSS selector for the DOM element in which the treemap will be
    containerSelector : '#treemap-container',
    
    // width and height of the treemap
    width             : '100%',
    height            : '500px',
    
    // animations' duration in msec
    animationDuration : 350,
    
    // tile options
    tiles: {
        
        // Minimal size for each tile. If tiles can be small, leave undefined.
        minWidth         : 150,
        minHeight        : 105,
        
        /**
         * How much squares should be forced to be similar to each other in size
         * 0 - no flattening (default)
         * 1, 2, 5, 10 ... - the higher the number, the more tiles will be forced to be similar to each other
         */
        flatteningFactor : 2,
        
        // CSS selector for the DOM element containing the Handlebars tile template
        templateSelector : '#treemap-tile-template',
        
        // padding
        padding          : 5,
        
        // 'other' tile text label
        otherLabel       : 'Altro...'
    },
    
    // How to sort tiles
    sortCallback      : function(a, b){
        return null;                 // random
        //return b.value - a.value;  // descending
        //return a.value - b.value;  // ascending
    },
    
    // breadcumbs options
    breadCumbs        : {
        height    : '50px',
        separator : ' | '
    },
};

$(document).ready( function() {
    var treemap = new Treemap(treemapConfig);
});
