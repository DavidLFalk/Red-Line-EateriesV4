var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRIStandard_1 = new ol.layer.Tile({
            'title': 'ESRI Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Areawithina15minutewalkfromParkway_2 = new ol.format.GeoJSON();
var features_Areawithina15minutewalkfromParkway_2 = format_Areawithina15minutewalkfromParkway_2.readFeatures(json_Areawithina15minutewalkfromParkway_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areawithina15minutewalkfromParkway_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areawithina15minutewalkfromParkway_2.addFeatures(features_Areawithina15minutewalkfromParkway_2);
var lyr_Areawithina15minutewalkfromParkway_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Areawithina15minutewalkfromParkway_2, 
                style: style_Areawithina15minutewalkfromParkway_2,
                interactive: true,
                title: '<img src="styles/legend/Areawithina15minutewalkfromParkway_2.png" /> Area within a 15 minute walk from Parkway'
            });
var format_RedLineParkway_3 = new ol.format.GeoJSON();
var features_RedLineParkway_3 = format_RedLineParkway_3.readFeatures(json_RedLineParkway_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RedLineParkway_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RedLineParkway_3.addFeatures(features_RedLineParkway_3);
var lyr_RedLineParkway_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RedLineParkway_3, 
                style: style_RedLineParkway_3,
                interactive: true,
                title: '<img src="styles/legend/RedLineParkway_3.png" /> Red Line Parkway'
            });
var format_Eaterieswithina15minutewalkfromParkway_4 = new ol.format.GeoJSON();
var features_Eaterieswithina15minutewalkfromParkway_4 = format_Eaterieswithina15minutewalkfromParkway_4.readFeatures(json_Eaterieswithina15minutewalkfromParkway_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Eaterieswithina15minutewalkfromParkway_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Eaterieswithina15minutewalkfromParkway_4.addFeatures(features_Eaterieswithina15minutewalkfromParkway_4);
var lyr_Eaterieswithina15minutewalkfromParkway_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Eaterieswithina15minutewalkfromParkway_4, 
                style: style_Eaterieswithina15minutewalkfromParkway_4,
                interactive: true,
                title: '<img src="styles/legend/Eaterieswithina15minutewalkfromParkway_4.png" /> Eateries within a 15 minute walk from Parkway'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ESRIStandard_1.setVisible(true);lyr_Areawithina15minutewalkfromParkway_2.setVisible(true);lyr_RedLineParkway_3.setVisible(true);lyr_Eaterieswithina15minutewalkfromParkway_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ESRIStandard_1,lyr_Areawithina15minutewalkfromParkway_2,lyr_RedLineParkway_3,lyr_Eaterieswithina15minutewalkfromParkway_4];
lyr_Areawithina15minutewalkfromParkway_2.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_RedLineParkway_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FLAG': 'FLAG', 'Transparen': 'Transparen', 'SymbolID': 'SymbolID', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Eaterieswithina15minutewalkfromParkway_4.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'Type', 'name': 'Name', });
lyr_Areawithina15minutewalkfromParkway_2.set('fieldImages', {'id': 'Hidden', 'prop_is_on': 'Hidden', });
lyr_RedLineParkway_3.set('fieldImages', {'OBJECTID': 'Hidden', 'FLAG': 'Hidden', 'Transparen': 'Hidden', 'SymbolID': 'Hidden', 'SHAPE_Leng': 'Hidden', });
lyr_Eaterieswithina15minutewalkfromParkway_4.set('fieldImages', {'osm_id': 'Hidden', 'code': 'Hidden', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_Areawithina15minutewalkfromParkway_2.set('fieldLabels', {});
lyr_RedLineParkway_3.set('fieldLabels', {});
lyr_Eaterieswithina15minutewalkfromParkway_4.set('fieldLabels', {'fclass': 'inline label', 'name': 'inline label', });
lyr_Eaterieswithina15minutewalkfromParkway_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});