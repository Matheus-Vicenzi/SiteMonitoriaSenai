SITE = new Object();

SITE.PATH = "/siteMonitoria/rest/";

$(document).ready(function (){
	
	$("footer").load("/siteMonitoria/pages/site/general/footer.html");
    $("header").load("/siteMonitoria/pages/site/general/header.html", function(){carregaNome()});
	
});

