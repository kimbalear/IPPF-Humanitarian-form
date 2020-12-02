jQuery(document).ready(function () {
    resize_tab1();
    resize_tab2();
    resize_tab3();
    resize_tab4();
    resize_tab5();
    resize_tab6();
    resize_tab7();
    resize_tab8();
    resize_tab9();
    resize_tab10();

    $('ul.listitems li').click(function (e) {
        tab_selected = $(this).find('a').attr('href');
        switch (tab_selected) {
            case '#summary':
                resize_tab1();
                break;
            case '#Objective1':
                resize_tab2();
                break;
            case '#Objective2':
                resize_tab3();
                break;
            case '#Objective3':
                resize_tab4();
                break;
            case '#Objective4':
                resize_tab5();
                break;
            case '#Objective5':
                resize_tab6();
                break;
            case '#Objective':
                resize_tab7();
                break;
            case '#bss':
                resize_tab8();
                break;
            case '#hsm':
                resize_tab9();
                break;
            case '#aca':
                resize_tab10();
                break;
        }
    });

    $("#selectbox1").change(function () {
        var str = "";
        $("#selectbox1 option:selected").each(function () {
            str = $(this).text();
        });

        if (str === 'Dextroverse') {
            $('.g_y').css('float', 'left');
            $('.g_x').css('float', 'left');
            $('.group').css('float', 'left');
            $('.group_title_s').css('float', 'left');
            $('.group_title_none').css('float', 'left');
            $('.data_cel-indicators').css({ "float": "left", "text-align": "left" });
            $('.data_cel').css({ "float": "left", "text-align": "left" });
            $(".listitems li").sort(sort_li_dex).appendTo('.listitems');
        } else if (str === 'Sinistroverse (Arabic)') {
            $('.g_y').css('float', 'right');
            $('.g_x').css('float', 'right');
            $('.group').css('float', 'right');
            $('.group_title_s').css('float', 'right');
            $('.group_title_none').css('float', 'right');
            $('.data_cel-indicators').css({ "float": "right", "text-align": "right" });
            $('.data_cel').css({ "float": "right", "text-align": "right" });
            $(".listitems li").sort(sort_li_sin).appendTo('.listitems');
        }
        resize_tab1();
        resize_tab2();
        resize_tab3();
        resize_tab4();
        resize_tab5();
        resize_tab6();
        resize_tab7();
        resize_tab8();
        resize_tab9();
        resize_tab10();
        function sort_li_dex(a, b) {
            return ($(b).data('position')) < ($(a).data('position')) ? 1 : -1;
        }
        function sort_li_sin(a, b) {
            return ($(b).data('position')) < ($(a).data('position')) ? -1 : 1;
        }
    }).change();

    $(window).resize(function () {
        resize_tab1();
        resize_tab2();
        resize_tab3();
        resize_tab4();
        resize_tab5();
        resize_tab6();
        resize_tab7();
        resize_tab8();
        resize_tab9();
        resize_tab10();
    });

    function resize_tab1() {
        // Summary
        for (i = 1; i <= 12; i++) {
            var hight_Sc1 = '.S' + i + '_c1';
            var hight_Sc2 = '.S' + i + '_c2';
            var vS_hight = $(hight_Sc1).height();
            $(hight_Sc2).height(vS_hight);
        }
    }

    function resize_tab2() {
        //O1
        for (i = 11; i <= 12; i++) {
            var hight_O1c1 = '.O1' + i + '_c1';
            var hight_O1c2 = '.O1' + i + '_c2';
            var vO1_hight = $(hight_O1c1).height();
            $(hight_O1c2).height(vO1_hight);
            //console.log(hight_O1c1);
        }
    }

    function resize_tab3() {
        //O2
        for (i = 8; i <= 31; i++) {
            var hight_O2c1 = '.O2' + i + '_c1';
            var hight_O2c2 = '.O2' + i + '_c2';
            var vO2_hight = $(hight_O2c1).height();
            $(hight_O2c2).height(vO2_hight);
        }
    }

    function resize_tab4() {
        //O3
        for (i = 1; i <= 29; i++) {
            var hight_O3c1 = '.O3' + i + '_c1';
            var hight_O3c2 = '.O3' + i + '_c2';
            var vO3_hight = $(hight_O3c1).height();
            $(hight_O3c2).height(vO3_hight);
        }
    }

    function resize_tab5() {
        //O4
        for (i = 1; i <= 14; i++) {
            var hight_O4c1 = '.O4' + i + '_c1';
            var hight_O4c2 = '.O4' + i + '_c2';
            var vO4_hight = $(hight_O4c1).height();
            $(hight_O4c2).height(vO4_hight);
            //console.log('c1: ' + hight_O4c1 + ' - ' + hight_O4c2 + ' -hight: ' + vO4_hight);
        }
    }

    function resize_tab6() {
        //O5
        for (i = 1; i <= 54; i++) {
            var hight_O5c1 = '.O5' + i + '_c1';
            var hight_O5c2 = '.O5' + i + '_c2';
            var vO5_hight = $(hight_O5c1).height();
            $(hight_O5c2).height(vO5_hight);
            //console.log('c1: ' + hight_O5c1 + ' - ' + hight_O5c2 + ' -hight: ' + vO5_hight);
        }
    }

    function resize_tab7() {
        //O6
        for (i = 1; i <= 27; i++) {
            var hight_O6c1 = '.O6' + i + '_c1';
            var hight_O6c2 = '.O6' + i + '_c2';
            var vO6_hight = $(hight_O6c1).height();
            $(hight_O6c2).height(vO6_hight);
        }
    }

    function resize_tab8() {
        //Business
        for (i = 1; i <= 11; i++) {
            var hight_BSSc1 = '.BSS' + i + '_c1';
            var hight_BSSc2 = '.BSS' + i + '_c2';
            var vBSS_hight = $(hight_BSSc1).height();
            $(hight_BSSc2).height(vBSS_hight);
            //console.log('c1: ' + hight_BSSc1 + ' - ' + hight_BSSc2 + ' -hight: ' + vBSS_hight);
        }
    }

    function resize_tab9() {
        //Humanitarian Strategy Milestones
        for (i = 1; i <= 19; i++) {
            var hight_HSMc1 = '.HSM' + i + '_c1';
            var hight_HSMc2 = '.HSM' + i + '_c2';
            var vHSM_hight = $(hight_HSMc1).height();
            $(hight_HSMc2).height(vHSM_hight);
        }
    }

    function resize_tab10() {
        //Advocacy Common Agenda
        for (i = 1; i <= 4; i++) {
            var hight_ACAc1 = '.ACA' + i + '_c1';
            var hight_ACAc2 = '.ACA' + i + '_c2';
            var vACA_hight = $(hight_ACAc1).height();
            $(hight_ACAc2).height(vACA_hight);
        }
    }

    // ============================================================================================================
	// DHIS events

	formLoaded();
	dataValueLoaded();


	function formLoaded() {
		$(document).off('dhis2.de.event.formLoaded').on('dhis2.de.event.formLoaded', function () {
			console.log("============ INIT FORM ");
			new Translation();
		});
	}

    // ============================================================================================================
	// Translation

	function Translation() {
		var me = this;

		me.projectDataSetId = "cKGde9MMfMH";
		me.incomeHeadingOptionSetId = "ql1StQfqqxc";

		me.transLang;

		// me.DE_TRANS_PROPERTY = "FORM_NAME";
		me.DATAELEMENT_KEY = "DATAELEMENT";
		me.OPTIONSET_KEY = "OPTIONSET";
		me.DEGROUP_KEY = "DEGROUP";

		me.tableTag = $("body");


		me.init = function () {
			me.transLang = me.getCurrentTransLang();
			//me.translateDEGroupSetList();
			//me.translateDataElementList();
			me.translateOptionSetList();
		}

		// ----------------------------------------------------------------------------------------------
		// Supportive methods
/*
		me.getCurrentTransLang = function () {
			me.transLang = $.ajax({
				type: "GET",
				url: "../api/userSettings/keyDbLocale" //es
				, async: false
			}).responseText;

		}

		me.translateDEGroupSetList = function () {
			var url = "../api/dataElementGroupSets.json?filter=name:ilike:ABR%20[INF]&fields=id,name,dataElementGroups[id,displayShortName]&paging=false";

			me.loadMetadata(url, function (response) {

				var deGroupSets = response.dataElementGroupSets;
				for (var i in deGroupSets) {
					var deGroups = deGroupSets[i].dataElementGroups;
					for (var j in deGroups) {
						var deGroup = deGroups[j];
						me.tableTag.find("[keyword='degr:" + deGroup.id + "']").html(deGroup.displayShortName);
					}
				}
			});

		}


		me.translateDataElementList = function () {
			var url = "../api/dataSets/" + me.projectDataSetId + ".json?fields=dataSetElements[dataElement[id,displayFormName]]";
			me.loadMetadata(url, function (response) {

				var dataSetElements = response.dataSetElements;
				for (var i in dataSetElements) {
					var dataElement = dataSetElements[i].dataElement;
					var value = me.getTransValue(me.DATAELEMENT_KEY, dataElement);
					me.tableTag.find("[keyword='de:" + dataElement.id + "']").html(value);
				}
			});

		}
*/
		me.translateOptionSetList = function () {
			var url = "../api/optionSets.json?filter=code:ilike:ABR%20-&fields=options[id,displayName]&paging=false";
			me.loadMetadata(url, function (response) {

				var optionSets = response.optionSets;
				for (var i in optionSets) {
					var options = optionSets[i].options;
					for (var j in options) {
						var option = options[j];
						var value = me.getTransValue(me.OPTIONSET_KEY, option);
						me.tableTag.find("[keyword='opt:" + option.id + "']").html(value);
					}
				}
			});
		}
/*
		me.loadMetadata = function (url, exeFunc) {
			$.ajax({
				type: "GET"
				, url: url
				, contentType: "application/json;charset=utf-8"
				, beforeSend: function (xhr) {
					//me.hideReportTag();
				}
				, success: function (response) {
					exeFunc(response);
				}
				, error: function (response) {
					// me.showReportTag();
				}
			}).always(function (data) {
				// me.showReportTag();
			});

		}
*/
		me.getTransValue = function (key, data) {
			if (key == me.DATAELEMENT_KEY) {
				// var translations = data.translations;
				// if( translations )
				// {
				// 	for( var i in translations )
				// 	{
				// 		var translation = translations[i];
				// 		if( translation.property ==  me.DE_TRANS_PROPERTY && translation.locale == me.transLang )
				// 		{
				// 			return translation.value;
				// 		}
				// 	}
				// }

				return data.displayFormName;

			}
			else if (key == me.OPTIONSET_KEY) {
				return data.displayName;
			}
		}


		// ----------------------------------------------------------------------------------------------
		// init

		me.init();

	}

});