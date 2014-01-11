jQuery(document).ready(function() {

    function getVideoOfTheDay() {
        var data = false;
        var matches = false;
		var vids = [];
		
        var grabAll = function() {
            if(!data) {
                return $.ajax({
                    url: '/all_videos.json',
                    dataType: 'json',
                    success: function(resp) {
                        data = _(resp).chain()
                            .compact()
                            .map(function(p) {
                                p.words = (p.title.toLowerCase() +' '+ p.summary.toLowerCase()).match(/(\w+)/g);
                                return p;
                            })
                            .value();
                        grabAll();
                    }
                });
            }

		console.log(data);
           
		};
	};
    getVideoOfTheDay();
});