export default {

    /**
     * Takes a form node, and returns the form data as an array of name/value pairs:
     * identical to what jQuery's $.serializeArray() returns.
     *
     * @param form
     * @returns {{}}
     */
    serializeForm: function(form) {
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
    jsonEncodeArray: function(obj) {
        if( obj instanceof Object) {
            return JSON.stringify(obj);
        } else {
            console.log('cant serialize parameter not an object');
            return false;
        }
    }
}
