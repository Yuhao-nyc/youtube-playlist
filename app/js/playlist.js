function YouTubePlayList(id, entries) {
	this.id = id;
	this.entries = entries;
	this.currently_playing = 0;
	this.randomizer = false;
}

function linkify(text){
    if (text) {
        text = text.replace(
            /((https?\:\/\/)|(www\.))(\S+)(\w{2,4})(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/gi,
            function(url){
                var full_url = url;
                if (!full_url.match('^https?:\/\/')) {
                    full_url = 'http://' + full_url;
                }
                return '<a href="' + full_url + '" target="_blank">' + url + '</a>';
            }
        );
    }
    return text;
}

function addPlaylistToElement(playlist_id, element_id) {

	var player_id = playlist_id;
	var requestOptions = {
		playlistId: playlist_id,
		part: 'contentDetails, snippet',
        maxResults: 10
	};
	var request = gapi.client.youtube.playlistItems.list(requestOptions);
	request.execute(function(response) {

		var output = '';
		$.each( response.items, function( key, val ) {

			var video_id = val.snippet.resourceId.videoId;
            var note = val.snippet.description;
            var linkifyNote = linkify(note);

            output += "<div class='playListEntry col-sm-4'>";
            output += "<iframe class='embed-responsive-item' width='100%' height='184px' src='https://www.youtube.com/embed/"+ video_id +"?list=;"+ player_id +"="+ video_id +"&amp;showinfo=0' frameborder='0' allowfullscreen></iframe>";
            output += "<div class='playlistDesc'>"+ linkifyNote +"</div>";
            output += "</div>";

		});
        $('#youtube-playList').append(output);
        //$('#youtube-playList > div').slice(-3).addClass("hidden-vid");

	}, $('.spinner').fadeOut(400));
}