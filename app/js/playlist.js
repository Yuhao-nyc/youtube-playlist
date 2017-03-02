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
};

function addPlaylistToElement(playlist_id, element_id) {

	var player_id = playlist_id;
	var requestOptions = {
		playlistId: playlist_id,
		part: "snippet,contentDetails",
        maxResults: 10
	};
	var request = gapi.client.youtube.playlistItems.list(requestOptions); //all kinds of data API here using only playlistItems (search, playlist etc etc)
	request.execute(function(response) {

		var output = '';
		var output_img = '';
		$.each( response.items, function( key, val ) {

			var video_id = val.snippet.resourceId.videoId;
            var desc = val.snippet.description;
            var linkifyNote = linkify(desc);
            var title = val.snippet.title;
            var channelTitle = val.snippet.channelTitle;
            var publishedAt = val.snippet.publishedAt;
            var note = val.contentDetails.note;

            output_img += "<div class='playListEntry col-sm-1'>";
            output_img += "<img onclick='switchIframe(this)' id='"+ video_id +"' class='img-fluid img-playlist' width='100%' height='134px' src='https://img.youtube.com/vi/"+ video_id +"/maxresdefault.jpg'>";
            output_img += "<h4 class='playlistTitle'>"+ title +"</h4>";
            output_img += "<p class='playlistDesc'>"+ linkifyNote +"</p>";
            output_img += "<p class='playlistDesc'>published at: "+ publishedAt +"</p>";
            output_img += "</div>";

            output += "<div class='playListEntry col-sm-3'>";
            output += "<iframe class='embed-responsive-item' width='100%' height='133px' src='https://www.youtube.com/embed/"+ video_id +"?list=;"+ player_id +"="+ video_id +"&amp;showinfo=0' frameborder='0' allowfullscreen></iframe>";
            output += "<h4 class='playlistTitle'>"+ title +"</h4>";
            output += "<p class='playlistDesc'>by&nbsp;"+ channelTitle +"</p>";
            output += "</div>";
		});
        $('#youtube-playList-img').append(output_img);
        $('#youtube-playList').append(output);
        $('#youtube-playList > div').slice(-6).addClass("hidden-vid");

	}, $('.spinner, .spinner-img').fadeOut(360));
    $("#youtube-player").attr('src', 'https://www.youtube.com/embed/?list='+ player_id +'&amp;showinfo=0');
};

function switchIframe(clickedFrame) {
    var videoframeId = clickedFrame.id;
    $("#youtube-player").attr('src', 'https://www.youtube.com/embed/'+ videoframeId +'?list='+ playlistframeId +'&showinfo=0?enablejsapi=1');
    $('html, body').animate({
        scrollTop: $("#youtube-player").offset().top - 80
    }, 600);
};

$("#player-load-more").click(function () {
    $(this).toggleClass('open');
    if ($(this).hasClass('open')) {
        $('.playListEntry.hidden-vid').fadeIn(230);
        $(this).html("Hide&nbsp;&nbsp;<i class='fa fa-angle-up'></i>");
    } else {
        $('.playListEntry.hidden-vid').fadeOut(230);
        $(this).html("View More&nbsp;&nbsp;<i class='fa fa-angle-down'></i>");
    }
});