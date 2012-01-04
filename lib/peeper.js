var Peeper = (function() {
	var version = '1.0.0';
	
	function init() {
		var $peepers = $("[data-source]");
		
		$peepers.each(function(index, element) {
			var $peeper = $(element);
			var $source = $("#" + $peeper.attr('data-source'));
			
			initPeeper($peeper, $source);
		});
	}
	
	function initPeeper($peeper, $source) {
		if ($source.length == 1) {
			if ($source.is(":text")) {
				bind($peeper, $source);
			} else {
				raise("source type not supported " + selector);
			}
		} else {
			var error;
			
			if ($source.length == 0) {
				error = "source not found: " + selector;
			} else {
				error = "source is not unique: " + selector;
			}
			
			raise(error);
		}
	}
	
	function bind($peeper, $source) {
		$peeper.data("peeper-placeholder", $peeper.html());
		
		$source.bind('keyup', function(event) {
			var value = $source.val();
			
			if (!value || value == "")
				value = $peeper.data("peeper-placeholder");
			
			update($peeper, value);
		});
		
		if ($source.val())
			update($peeper, $source.val());
	}
	
	function update($peeper, value) {
		$peeper.text(value); // using text will escape html for us
	}
	
	function capitalize(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
	
	function raise(error) {
		throw "Peeper: " + error;
	}
	
	return {init: init, version: version};
})();

$(function() {
	Peeper.init();
});