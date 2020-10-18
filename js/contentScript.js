$.get( "http://<JIRA_IP>:<JIRA_PORT>/secure/TempoUserBoard!timesheet.jspa", function( data ) {
		var $jQueryObject = $($.parseHTML(data));
		var loggedHours = $jQueryObject.find("tfoot th.tt-current-day").html();
		
		if(! loggedHours.length) {
			loggedHours = "0";
		}
		
		$("<style type='text/css'> progress[value]::-webkit-progress-bar {background-color: #eee;} </style>").appendTo("head");
	
		var hoursBar = '<progress value="' + loggedHours + '" max="8" style="width: 80px;"></progress>';
		var label = '<label>' + loggedHours + ' / 8h</label>'; 
		
		var navbar = $(".aui-header-primary .aui-nav").append(hoursBar);
		var navbar = $(".aui-header-primary .aui-nav").append(label);
});