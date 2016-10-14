/**
 * EMCA6 Babel Helpers to do the everyday stuff you do jQuery in pure Javascript
 */
export default {

    /**
     * Takes a form node, and returns the form data as an array of name/value pairs:
     * identical to what jQuery's $.serializeArray() returns.
     *
     * @param form
     * @returns {{}}
     */
    serializeForm: function(form)
    {
        var obj = {};
        var elements = form.querySelectorAll("input, select, textarea");
        for (var i = 0; i < elements.length; ++i) {
            var element = elements[i];
            var name = element.name;
            var value = element.value;

            if (name) {
                obj[name] = value;
            }
        }
        return obj;
    },

    /**
     * stringify's an array to json object or returns false;
     *
     * @param obj
     * @returns {boolean}
     */
    jsonEncodeObject: function(obj)
    {
        if(obj instanceof Object) {
            return JSON.stringify(obj);
        } else {
            console.log('cant serialize parameter not an object');
            return false;
        }
    },

    /**
     * Encodes an object to a query string
     * Identical to jQuery $.param()
     *
     * @param obj
     * @returns {string}
     */
    queryStringEncodeObj: function( obj )
    {
        return '?'+Object.keys(obj).reduce(function(a,k){a.push(k+'='+encodeURIComponent(obj[k]));return a},[]).join('&')
    },

    /**
     * Parse's a json string and return it as an object
     * Identical to jQuery $.parseJSON
     *
     * @param json
     */
    parseJsonToObject: function(json)
    {
        if(typeof json === 'string') {
            return JSON.stringify(obj);
        } else {
            console.log('cant serialize parameter not an object');
            return false;
        }
    },

    /**
     * hides a html element
     * Identical to jQuery $.hide()
     *
     * @param el
     */
    hide: function(el)
    {
        el.style.display = 'none';
    },

    /**
     * Shows a hidden html element
     * Identical to jQuery $.show()
     *
     * @param el
     * @param value
     */
    show: function(el, value)
    {
        el.style.display = value;
    },

    /**
     * Toggles display of a html element
     * Identical to jQuery $.toggle()
     *
     * @param el
     * @param value
     */
    toggle:function(el, value)
    {
        var display = (window.getComputedStyle ? getComputedStyle(el, null) : el.currentStyle).display;
        if (display == 'none') el.style.display = value;
        else el.style.display = 'none';
    },

    /**
     * fade an element from the current state to full opacity in "duration" ms
     *
     * @param el
     * @param duration
     */
    fadeOut: function(el, duration)
    {
        var s = el.style, step = 25/(duration || 300);
        s.opacity = s.opacity || 1;
        (function fade() { (s.opacity -= step) < 0 ? s.display = "none" : setTimeout(fade, 25); })();
    },

    /**
     * fade out an element from the current state to full transparency in "duration" ms
     * display is the display style the element is assigned after the animation is done
     *
     * @param el
     * @param duration
     * @param display
     */
    fadeIn: function(el, duration, display)
    {
        var s = el.style, step = 25/(duration || 300);
        s.opacity = s.opacity || 0;
        s.display = display || "block";
        (function fade() { (s.opacity = parseFloat(s.opacity)+step) > 1 ? s.opacity = 1 : setTimeout(fade, 25); })();
    },

    /**
     * Sets the css style of a html element
     * Identical to jQuery $.css()
     *
     * @param el
     * @param styles
     */
    css: function(el, styles)
    {
        for (var property in styles)
            el.style[property] = styles[property];
    },

    /**
     * trims whitespace from string
     * Identical to jQuery $.trim
     * @param el
     */
    trim: function(el)
    {
        return el.replace(/^\s+|\s+$/g, '');
    },

    /**
     * Gets a cookie
     *
     * @param name
     * @returns {null}
     */
    getCookie: function(name)
    {
        var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return v ? v[2] : null;
    },

    /**
     * Sets a cookie
     *
     * @param name
     * @param value
     * @param days
     */
    setCookie: function(name, value, days)
    {
        var d = new Date;
        d.setTime(d.getTime() + 24*60*60*1000*days);
        document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
    },

    /**
     * Delete a cookie
     *
     * @param name
     */
    deleteCookie: function(name)
    {
        setCookie(name, '', -1);
    },

    /**
     * Merges an array
     * like php array_merge()
     *
     * @param obj
     * @param src
     * @returns {*}
     * @constructor
     */
    ArrayMerge: function(obj, src)
    {
        for (var key in src) {
            if (src.hasOwnProperty(key)) obj[key] = src[key];
        }
        return obj;
    },

    /**
     * checks if array contains value
     * like php in_array()
     *
     * @param needle
     * @param haystack
     * @returns {number}
     */
    inArray: function(needle, haystack) {
        var length = haystack.length;
        for(var i=0; i<length; i++) {
            if(haystack[i] == needle) return i;
        }
        return -1;
    },
}
