// JavaScript Document

var backgroundImageURLArr = new Array('wallpaper01.jpg', 'wallpaper02.jpg','wallpaper03.jpg','wallpaper04.jpg','wallpaper05.jpg','wallpaper06.jpg','wallpaper07.jpg');


var switchAboutContentReq = null;
var aboutContentPath = './contents/'+'aboutcontent.html';
var switchProjectInfoContentReq = null;
var projectInfoContentPath = './contents/'+'projectinfocontent.html';
var switchTeamContentReq = null;
var	teamContentPath = './contents/'+'teamcontent.html';
var switchVideoContentReq = null;
var videoContentPath = './contents/'+'videocontent.html';
var switchGalleryContentReq = null;
var galleryContentPath = './contents/'+'gallerycontent.html';
var switchResourcesContentReq = null;
var resourcesContentPath = './contents/'+'resourcescontent.html';

var switchGeneralContentReq = null;
var generalContentPath = './contents/'+'generalcontent.html';
var switchDPatrikiosContentReq = null;
var dPatrikiosContentPath = './contents/'+'dpatrikioscontent.html';
var switchDChantzisContentReq = null;
var dChantzisContentPath = './contents/'+'dchantziscontent.html';
var switchSChenContentReq = null;
var sChenContentPath = './contents/'+'schencontent.html';
var switchMapContentReq = null;
var mapContentPath = './contents/'+'mapcontent.html';

var galleryIDArr = new Array;
var galleryImagesIDArr = new Array;

var videoIDArrPointer = new Array;
var videoIDArr = new Array;

var html = null;

window.addEvent('domready', function() {
	changeWallpaper(2);
	//generateRandomWallpaper();
	initializeMainNavigation();
});

function generateRandomWallpaper()
{
	$('wallpaperimg').src = './layout/images/wallpapers/' + backgroundImageURLArr[randomXToY(0,backgroundImageURLArr.length-1)];
}//generateRandomWallpaper()

function changeWallpaper(wallpaperID)
{
	$('wallpaperimg').src = './layout/images/wallpapers/' + backgroundImageURLArr[wallpaperID];
}//changeWallpaper

function randomXToY(minValue,maxValue,floatValue)
{
  var randVal = minValue+(Math.random()*(maxValue-minValue));
  return typeof floatValue=='undefined'?Math.round(randVal):randVal.toFixed(floatValue);
}

function resetValues()
{
	var galleryIDArr = new Array;
	var galleryImagesIDArr = new Array;
}resetValues()

function initializeMainNavigation()
{
	
	switchAboutContentReq = new Request.HTML({url:aboutContentPath, 
		onSuccess: function(html) {switchSiteContents('success',html);
			changeWallpaper(5);
			window.scroll(0,0);
			customLoader('fadeOut');
		}, 
		onFailure: function() {switchSiteContents('failure',html); customLoader('fadeOut');}
	});
	
	switchProjectInfoContentReq = new Request.HTML({url:projectInfoContentPath, 
		onSuccess: function(html) {switchSiteContents('success',html);
			changeWallpaper(1);
			window.scroll(0,0);
			initializeProjectInfoElements();
			customLoader('fadeOut');
		}, 
		onFailure: function() {switchSiteContents('failure',html); customLoader('fadeOut');}
	});
	
	switchTeamContentReq = new Request.HTML({url:teamContentPath, 
		onSuccess: function(html) {switchSiteContents('success',html);
			changeWallpaper(2);
			window.scroll(0,0);
			customLoader('fadeOut');
		}, 
		onFailure: function() {switchSiteContents('failure',html); customLoader('fadeOut');}
	});
	
	switchVideoContentReq = new Request.HTML({url:videoContentPath, 
		onSuccess: function(html) {switchSiteContents('success',html);
			changeWallpaper(4);
			window.scroll(0,0);
			resetValues();
			customLoader('fadeOut');
			initializeVideoNavigation();
			
		}, 
		onFailure: function() {switchSiteContents('failure',html); customLoader('fadeOut');}
	});
	
	switchGalleryContentReq = new Request.HTML({url:galleryContentPath, 
		onSuccess: function(html) {switchSiteContents('success',html);
			changeWallpaper(0);
			window.scroll(0,0);
			resetValues();
			customLoader('fadeOut');
			initializeGalleryNavigation();
			
		}, 
		onFailure: function() {switchSiteContents('failure',html); customLoader('fadeOut');}
	});
	
	switchResourcesContentReq = new Request.HTML({url:resourcesContentPath, 
		onSuccess: function(html) {switchSiteContents('success',html);
			changeWallpaper(3);
			window.scroll(0,0);
			customLoader('fadeOut');
		}, 
		onFailure: function() {switchSiteContents('failure',html); customLoader('fadeOut');}
	});


	if($('logo01'))
		{$('logo01').addEvent('click', function(e){e.stop(); location.href = ''+'./index.html'+''; });}
	if($('logo02'))
		{$('logo02').addEvent('click', function(e){e.stop(); location.href = ''+'./index.html'+''; });}
		
	if($('about_link')){$('about_link').addEvent('click', function(e){e.stop(); customLoader('fadeIn'); setTimeout('switchAboutContentReq.send()',1000); }); }
	if($('projectinfo_link')){ $('projectinfo_link').addEvent('click', function(e){e.stop(); customLoader('fadeIn'); setTimeout('switchProjectInfoContentReq.send()',1000); }); }
	if($('team_link')){ $('team_link').addEvent('click', function(e){e.stop(); customLoader('fadeIn'); setTimeout('switchTeamContentReq.send()',1000); }); }
	if($('video_link')){ $('video_link').addEvent('click', function(e){e.stop(); customLoader('fadeIn'); setTimeout('switchVideoContentReq.send()',1000); }); }
	if($('gallery_link')){ $('gallery_link').addEvent('click', function(e){e.stop(); customLoader('fadeIn'); setTimeout('switchGalleryContentReq.send()',1000); }); }
	if($('resources_link')){ $('resources_link').addEvent('click', function(e){e.stop(); customLoader('fadeIn'); setTimeout('switchResourcesContentReq.send()',1000); }); }
	

	
	//switchProductionLogContentReq.send();
}//initializeMainNavigation()

function customLoader(type)
{
	switch(type)
	{
		case 'fadeIn':
			$('customloader').fade(1);
			break;
		case 'fadeOut':
			$('customloader').fade(0);
			break;
		default:
			break;
	}//switch
}//customLoader(type)

function initializeProjectInfoElements()
{
	switchGeneralContentReq = new Request.HTML({url:generalContentPath, 
		onSuccess: function(html) {switchProjectInfoContents('success',html);
			window.scroll(0,0);
			customLoader('fadeOut');
		}, 
		onFailure: function() {switchProjectInfoContents('failure',html); customLoader('fadeOut');}
	});

	switchDPatrikiosContentReq = new Request.HTML({url:dPatrikiosContentPath, 
		onSuccess: function(html) {switchProjectInfoContents('success',html);
			window.scroll(0,0);
			customLoader('fadeOut');
		}, 
		onFailure: function() {switchProjectInfoContents('failure',html); customLoader('fadeOut');}
	});

	switchDChantzisContentReq = new Request.HTML({url:dChantzisContentPath, 
		onSuccess: function(html) {switchProjectInfoContents('success',html);
			window.scroll(0,0);
			customLoader('fadeOut');
		}, 
		onFailure: function() {switchProjectInfoContents('failure',html); customLoader('fadeOut');}
	});
	
	switchSChenContentReq = new Request.HTML({url:sChenContentPath, 
		onSuccess: function(html) {switchProjectInfoContents('success',html);
			window.scroll(0,0);
			customLoader('fadeOut'); 
		}, 
		onFailure: function() {switchProjectInfoContents('failure',html); customLoader('fadeOut');}
	});

	switchMapContentReq = new Request.HTML({url:mapContentPath, 
		onSuccess: function(html) {switchProjectInfoContents('success',html);
			window.scroll(0,0);
			customLoader('fadeOut');
		}, 
		onFailure: function() {switchProjectInfoContents('failure',html); customLoader('fadeOut');}
	});
	
	if($('documentationlink')){$('documentationlink').addEvent('click', function(e){e.stop(); customLoader('fadeIn'); setTimeout('switchGeneralContentReq.send()',1000); });}
	if($('maplink')){$('maplink').addEvent('click', function(e){e.stop(); customLoader('fadeIn'); setTimeout('switchMapContentReq.send()',1000); });}
	if($('dpatrikioslink')){$('dpatrikioslink').addEvent('click', function(e){e.stop(); customLoader('fadeIn'); setTimeout('switchDPatrikiosContentReq.send()',1000); });}
	if($('schenlink')){$('schenlink').addEvent('click', function(e){e.stop(); customLoader('fadeIn'); setTimeout('switchSChenContentReq.send()',1000); });}
	if($('dchantzislink')){$('dchantzislink').addEvent('click', function(e){e.stop(); customLoader('fadeIn'); setTimeout('switchDChantzisContentReq.send()',1000); });}
	
	//switchGeneralContentReq.send();
}//initializeProjectInfoElements()

function switchSiteContents(type,html){
	if(type=='success'){$('mainsubcontent').set('text', ''); $('mainsubcontent').adopt(html); $('mainsubcontent').fade(1);}//success
	else if(type=='failure') { $('mainsubcontent').set('text', 'Unable to load page.');}//failure
}//switchSiteContents()

function switchGalleryContents(type,html){
	if(type=='success'){$('gallerysubcontent').set('text', ''); $('gallerysubcontent').adopt(html); $('gallerysubcontent').fade(1);}//success
	else if(type=='failure') { $('gallerysubcontent').set('text', 'Unable to load page.');}//failure
}//switchGalleryContents()

function switchProjectInfoContents(type,html){
	if(type=='success'){$('projectinfosubcontent').set('text', ''); $('projectinfosubcontent').adopt(html); $('projectinfosubcontent').fade(1);}//success
	else if(type=='failure') { $('projectinfosubcontent').set('text', 'Unable to load page.');}//failure	
}//switchProjectInfoContents()

function initializeGalleryNavigation()
{
	firstStepToCreateLoadFullsizeImagesEventListeners();
}//initializeGalleryNavigation()

function initializeVideoNavigation()
{
	firstStepToCreateLoadVideosEventListeners();
}//initializeVideoNavigation

function firstStepToCreateLoadVideosEventListeners()
{
	if($('video'))
	{
		var ulArr = $('video').getElementsByTagName('ul');
		counter = 0;
		tempid = '';
		galleryIDArrPointer = '';

		for (var i=0; i<ulArr.length; i++)
			{tempid = ulArr[i].id.split('_'); if(tempid[0]=='entryphotos'){galleryIDArr[counter] = tempid[1]; counter++;}}//

		for (var i=0; i<galleryIDArr.length; i++)
			{
				galleryIDArrPointer = i;
				galleryID = galleryIDArr[galleryIDArrPointer];
				galleryImagesIDArr[galleryIDArrPointer] = new Array;
				
				var ulArr2 = $('entryphotos_'+galleryID).getElementsByTagName('img');
				innerCounter = 0;
				innerTempID = '';
				imagesIDArrPointer = '';
				
				for (var j=0; j<ulArr2.length; j++)
					{
						innerTempID = ulArr2[j].id.split('_'); 
						if(innerTempID[0]=='video')
							{galleryImagesIDArr[galleryIDArrPointer][innerCounter] = innerTempID[1];}
					}//
				for (var k=0; k<galleryImagesIDArr[galleryIDArrPointer].length; k++)
					{imagesIDArrPointer = k; createLoadFullsizeVideoEventListeners(galleryImagesIDArr[galleryIDArrPointer][imagesIDArrPointer], galleryID);}//
			}//for
		
	}//if
}//firstStepToCreateLoadVideosEventListeners

function firstStepToCreateLoadFullsizeImagesEventListeners()
{
	if($('imagegallery'))
	{
		//first get all the ul elements of the page
		//then from those get only the ones containing the image thumbnails
		var ulArr = $('imagegallery').getElementsByTagName('ul');
		counter = 0;
		tempid = '';
		galleryIDArrPointer = '';

		for (var i=0; i<ulArr.length; i++)
			{tempid = ulArr[i].id.split('_'); if(tempid[0]=='entryphotos'){galleryIDArr[counter] = tempid[1]; counter++;}}//

		for (var i=0; i<galleryIDArr.length; i++)
			{
				galleryIDArrPointer = i;
				galleryID = galleryIDArr[galleryIDArrPointer];
				galleryImagesIDArr[galleryIDArrPointer] = new Array;
				
				var ulArr2 = $('entryphotos_'+galleryID).getElementsByTagName('img');
				innerCounter = 0;
				innerTempID = '';
				imagesIDArrPointer = '';
				
				for (var j=0; j<ulArr2.length; j++)
					{
						innerTempID = ulArr2[j].id.split('_'); 
						if(innerTempID[0]=='image')
							{galleryImagesIDArr[galleryIDArrPointer][innerCounter] = innerTempID[1]; innerCounter++; $(galleryID+'imagesorder').innerHTML = $(galleryID+'imagesorder').innerHTML+innerTempID[1]+'::::'; }
					}//
				for (var k=0; k<galleryImagesIDArr[galleryIDArrPointer].length; k++)
					{imagesIDArrPointer = k; createLoadFullsizeGalleryImagesEventListeners(galleryImagesIDArr[galleryIDArrPointer][imagesIDArrPointer], galleryID);}//
			}//for
	}//if
}//firstStepToCreateLoadFullsizeImagesEventListeners()


function createLoadFullsizeVideoEventListeners(imageID, galleryID)
{
	if($('video_'+imageID))
	{
		$('video_'+imageID).addEvent('click', function(e){e.stop(); loadFullsizeVideo(imageID, galleryID); });
	}
}//createLoadFullsizeVideoEventListeners


function createLoadFullsizeGalleryImagesEventListeners(imageID, galleryID)
{
	if($('image_'+imageID))
	{
		$('image_'+imageID).addEvent('click', function(e){e.stop(); loadFullsizePortfolioImage(imageID, galleryID); });
	}
}//createLoadFullsizeGalleryImagesEventListeners


function loadFullsizeVideo(imageID, galleryID)
{
	//if there's already an image open, then destroy it and open the last clicked one!
	if($('gallerycontentwrapper')){$('gallerycontentwrapper').dispose();}
	
	galleryDescription = $(galleryID+'descriptiondetails').innerHTML;
	
	
	galleryContentWrapperElement = new Element('div', {'id': 'gallerycontentwrapper'});
	fullsizeGalleryContentElement = new Element('div', {'id': 'fullsizegallerycontent'});
	closeGalleryContentElement = new Element('div', {'id': 'closegallerycontent', 'html': 'close'});
	
	imageSrc = $('video_'+imageID).src;
	tempImageUrl = imageSrc.split('thumbs');
	imageSrc = tempImageUrl[0]+'thumbs'+tempImageUrl[1];
	someText = $(galleryID+'text').innerHTML;
	videoEmbedCode = $(galleryID+'embed').innerHTML;
	
	//fullsizeImageElement = new Element('img', {'id': 'fullsizeimage', 'class': 'fullsizeimages', 'height': '480', 'src': ''+imageSrc});

	fullsizeImageElement = new Element('span', {'id': 'fullsizeimage', 'class': 'fullsizevideos', 'height': '450', 'html': ''+videoEmbedCode});

	galleryTitleElement = new Element('div', {'id': 'gallerytitle'});
	theTitleElement = new Element('div', {'id': 'thetitle'});
	theTitleElementSpan = new Element('span', {'html': 'Video '+galleryID+':'});
	theDateElement = new Element('div', {'id': 'thesubtitle', 'html': ''});
	theDateElementSpan = new Element('span', {'html': ''+someText});
	theDescriptionElementSpan = new Element('div', {'id': 'thedescription', 'html': ''+galleryDescription});
	
	$('gallerysubcontent').grab(galleryContentWrapperElement);
	$('gallerycontentwrapper').grab(fullsizeGalleryContentElement);
	$('fullsizegallerycontent').grab(closeGalleryContentElement);
	
	//loadLoaderLayer();
	//$('loadnextimage').style.visibility = 'hidden';
	
	$('fullsizegallerycontent').grab(galleryTitleElement);
	$('gallerytitle').grab(theTitleElement);
	$('gallerytitle').grab(theDateElement);
	$('thetitle').grab(theTitleElementSpan);
	$('thesubtitle').grab(theDateElementSpan);
	$('gallerytitle').grab(theDescriptionElementSpan);
	
	$('fullsizegallerycontent').grab(fullsizeImageElement);
	if($('closegallerycontent')){$('closegallerycontent').addEvent('click', function(e){e.stop(); $('gallerycontentwrapper').dispose(); });}
	
	$('gallerysubcontent').fade(1);
}//loadFullsizeVideo

function loadFullsizePortfolioImage(imageID, galleryID)
{
	//if there's already an image open, then destroy it and open the last clicked one!
	if($('gallerycontentwrapper')){$('gallerycontentwrapper').dispose();}
	
	galleryImagesOrder = $(galleryID+'imagesorder').innerHTML;
	galleryImagesOrder = galleryImagesOrder.split('::::');
	currentGalleryImagesNumber = galleryImagesOrder.length-1;
	galleryDescription = $(galleryID+'descriptiondetails').innerHTML;
	
	
	for(i=0; i<currentGalleryImagesNumber; i++)
	{
		if(galleryImagesOrder[i]==imageID)
		{
			currentGalleryImagePointer = i+1;
		}//
	}//for
	
	
	galleryContentWrapperElement = new Element('div', {'id': 'gallerycontentwrapper'});
	fullsizeGalleryContentElement = new Element('div', {'id': 'fullsizegallerycontent'});
	closeGalleryContentElement = new Element('div', {'id': 'closegallerycontent', 'html': 'close'});
	previousGalleryImageElement = new Element('div', {'id': 'previousimage', 'class': 'gallerynavi', 'html': 'previous'});
	nextGalleryImageElement = new Element('div', {'id': 'nextimage', 'class': 'gallerynavi', 'html': 'next'});
	
	countElement = new Element('div', {'id': 'count', 'html': ''});
	currentGalleryImageElement = new Element('span', {'id': 'current', 'html': ''+currentGalleryImagePointer});
	countDashElement = new Element ('span', {'id': 'countdash', 'html': '/'});
	totalGalleryImagesElement = new Element('span', {'id': 'total', 'html': ''+currentGalleryImagesNumber});
	
	galleryIDday = galleryID.substring(0, 2);
	galleryIDmonth = galleryID.substring(2, 4);
	galleryIDdate = '2010'+'.'+galleryIDday+'.'+galleryIDmonth;
	
	imageSrc = $('image_'+imageID).src;
	tempImageUrl = imageSrc.split('thumbs');
	imageSrc = tempImageUrl[0]+'fullsize'+tempImageUrl[1];
	
	fullsizeImageElement = new Element('img', {'id': 'fullsizeimage', 'class': 'fullsizeimages', 'height': '480', 'src': ''+imageSrc});

	galleryTitleElement = new Element('div', {'id': 'gallerytitle'});
	theTitleElement = new Element('div', {'id': 'thetitle'});
	theTitleElementSpan = new Element('span', {'html': 'Gallery:'});
	theDateElement = new Element('div', {'id': 'thedate'});
	theDateElementSpan = new Element('span', {'html': ''+galleryIDdate});
	theDescriptionElementSpan = new Element('div', {'id': 'thedescription', 'html': ''+galleryDescription});
	
	$('gallerysubcontent').grab(galleryContentWrapperElement);
	$('gallerycontentwrapper').grab(fullsizeGalleryContentElement);
	$('fullsizegallerycontent').grab(closeGalleryContentElement);
	$('fullsizegallerycontent').grab(previousGalleryImageElement);
	$('fullsizegallerycontent').grab(nextGalleryImageElement);
	
	$('fullsizegallerycontent').grab(countElement);
	$('count').grab(currentGalleryImageElement);
	$('count').grab(countDashElement);
	$('count').grab(totalGalleryImagesElement);
	
	loadLoaderLayer();
	$('loadnextimage').style.visibility = 'hidden';
	
	$('fullsizegallerycontent').grab(galleryTitleElement);
	$('gallerytitle').grab(theTitleElement);
	$('gallerytitle').grab(theDateElement);
	$('thetitle').grab(theTitleElementSpan);
	$('thedate').grab(theDateElementSpan);
	$('gallerytitle').grab(theDescriptionElementSpan);
	
	$('fullsizegallerycontent').grab(fullsizeImageElement);
	if($('closegallerycontent')){$('closegallerycontent').addEvent('click', function(e){e.stop(); $('gallerycontentwrapper').dispose(); });}
	if($('previousimage'))
		{$('previousimage').addEvent('click', function(e){e.stop(); $('loadnextimage').style.visibility = 'visible'; navigateFullsizeImages('previous',imageID,galleryID); });}
	if($('nextimage'))
		{$('nextimage').addEvent('click', function(e){e.stop(); $('loadnextimage').style.visibility = 'visible'; navigateFullsizeImages('next',imageID,galleryID); });}
	
	$('gallerysubcontent').fade(1);
}//loadFullsizePortfolioImage



function loadLoaderLayer()
{
	loadNextImageElement = new Element('div', {'id': 'loadnextimage'});
	loaderImageElement = new Element('img', {'id': 'loaderimage', 'src': './layout/images/loader2.gif'});	
	$('fullsizegallerycontent').grab(loadNextImageElement);
	$('loadnextimage').grab(loaderImageElement);
}//
function disposeLoaderLayer()
{
	$('loadnextimage').dispose();
}//


function navigateFullsizeImages(navigationDirection,imageID,galleryID)
{
	$('fullsizeimage').dispose();
	
	galleryImagesOrder = $(galleryID+'imagesorder').innerHTML;
	galleryImagesOrder = galleryImagesOrder.split('::::');
	
	currentGalleryImagesNumber = galleryImagesOrder.length-1
	
	for(i=0; i<currentGalleryImagesNumber; i++)
	{
		if(galleryImagesOrder[i]==imageID)
		{
			//found!!!

			if(i == 0)
			{
				previousImagePointer = currentGalleryImagesNumber-1; //the last image			
				nextImagePointer = i+1;
			}//
			else if(i == currentGalleryImagesNumber-1)//the last image
			{
				previousImagePointer = i-1;
				nextImagePointer = 0;
			}//
			else
			{
				previousImagePointer = i-1;
				nextImagePointer = i+1;
			}//
			
		}//
	}//for
	//alert(navigationDirection+' prev pointer:'+previousImagePointer+' next pointer:'+nextImagePointer);
	
	previousImageID = galleryImagesOrder[previousImagePointer];
	nextImageID = galleryImagesOrder[nextImagePointer];
	if(navigationDirection == 'next')
	{
		newImagePointer = nextImagePointer;
		newImageID = nextImageID;
	}
	if(navigationDirection == 'previous')
	{
		newImagePointer = previousImagePointer;
		newImageID = previousImageID;
	}

	imageSrc = $('image_'+newImageID).src;
	tempImageUrl = imageSrc.split('thumbs');
	newImageSrc = tempImageUrl[0]+'fullsize'+tempImageUrl[1];
	
	$('current').innerHTML = newImagePointer+1;
	
	$('previousimage').removeEvents('click');
	$('nextimage').removeEvents('click');
	$('previousimage').addEvent('click', function(e){e.stop(); $('loadnextimage').style.visibility = 'visible'; navigateFullsizeImages('previous',newImageID,galleryID); });
	$('nextimage').addEvent('click', function(e){e.stop(); $('loadnextimage').style.visibility = 'visible'; navigateFullsizeImages('next',newImageID,galleryID); });
	//$('fullsizeimage').src = newImageSrc;
	
	fullsizeImageElement = new Element('img', {'id': 'fullsizeimage', 'class': 'fullsizeimages', 'height': '480', 'src': ''+newImageSrc});
	$('fullsizegallerycontent').grab(fullsizeImageElement);
	
	$('fullsizeimage').addEvent('domready', function() {$('loadnextimage').style.visibility = 'hidden'; });

}//navigateFullsizeImages(navigationDirection,imageID,galleryID)

function galleryLayerActions()
{
	if($('closegallerycontent')){$('closegallerycontent').addEvent('click', function(e){e.stop(); $('gallerycontentwrapper').dispose(); });}
	//location.href = ''+'./index.html'+'#top';
}//galleryLayerActions()

function loadFullsizeGallery(galleryContentID)
{
	switch (galleryContentID)
	{
		case 'video01':
			switchGalleryVideo01ContentReq.send();
			break;
		case 'video02':
			switchGalleryVideo02ContentReq.send();
			break;
		default:
			//do nothing
			break;
	}//switch
}//loadFullsizeGallery(galleryContentID,imageAnchor)