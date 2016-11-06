if (document.documentElement.hidden === undefined) {
    Object.defineProperty(Element.prototype, "hidden", {
        set: function(value) {
            //this.setAttribute('hidden', value);
            if (value) {this.setAttribute('hidden', '');}
            else {this.removeAttribute('hidden');}
            return value;
        },
        get: function() {
            return this.getAttribute('hidden');
        }
    });
}