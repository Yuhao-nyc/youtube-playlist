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
            output += "<p class='playlistDesc'>"+ linkifyNote +"</p>";
            output += "</div>";

		});
        $('#youtube-playList').append(output);
        $('#youtube-playList > div').slice(-6).addClass("hidden-vid");

	}, $('.spinner').fadeOut(400));

    request.execute(function(response) {

		var output = '';
		$.each( response.items, function( key, val ) {

			var video_id = val.snippet.resourceId.videoId;
            var note = val.snippet.description;
            var title = val.snippet.title;
            var linkifyNote = linkify(note);

            output += "<div class='playListEntry col-sm-1'>";
            output += "<img onclick='cueIframe(this)' id='"+ video_id +"' class='responsive-img video-thumbnail' width='100%' height='134px' src='https://img.youtube.com/vi/"+ video_id +"/maxresdefault.jpg'>";
            output += "<h5 class='playlistDesc'><b>"+ title +"</b></h5>";
            output += "<p class='playlistDesc'>"+ linkifyNote +"</p>";
            output += "</div>";

		});
        //console.log(output[0]);
        $('#youtube-playList-img').append(output);

        $("#youtube-player").attr('src', 'https://www.youtube.com/embed/?list='+ player_id +'&amp;showinfo=0?enablejsapi=1');

	}, $('.spinner-img').fadeOut(400));
}

function cueIframe(clickedFrame) {
    var videoframeId = clickedFrame.id;
    $("#youtube-player").attr('src', 'https://www.youtube.com/embed/'+ videoframeId +'?list='+ playlistframeId +'&amp;showinfo=0?enablejsapi=1');
};

$("#load-more").click(function () {
    $(this).toggleClass('open');

    if ($(this).hasClass('open')) {
        $('.playListEntry.hidden-vid').fadeIn(230);
        $(this).html("Hide&nbsp;&nbsp;<i class='fa fa-angle-up'></i>");
    } else {
        $('.playListEntry.hidden-vid').fadeOut(230);
        $(this).html("View More&nbsp;&nbsp;<i class='fa fa-angle-down'></i>");
    }
});