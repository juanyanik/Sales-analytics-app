/*
 * Basic responsive mashup template
 * @owner Enter you name here (xxx)
 */
/*
 *    Fill in host and port for Qlik engine
 */
var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );
var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};
require.config( {
	baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources"
} );

require( ["js/qlik"], function ( qlik ) {
	qlik.on( "error", function ( error ) {
		$( '#popupText' ).append( error.message + "<br>" );
		$( '#popup' ).fadeIn( 1000 );
	} );
	$( "#closePopup" ).click( function () {
		$( '#popup' ).hide();
	} );

	//callbacks -- inserted here --
	//open apps -- inserted here --
	var app = qlik.openApp('[JuanY]Gestión de ventas.qvf', config);

	//get objects -- inserted here --
	
	
	
	
	app.getObject('QV04','RtZmE');
	app.getObject('QV03','vHCpJmf');
	app.getObject('QV02','mAyHDGp');
	app.getObject('QV06','upGcWGf');
	
	
	
	
	
	
	
	
	
	app.getObject('QV01','BgtuR');
	//create cubes and lists -- inserted here --

} );
