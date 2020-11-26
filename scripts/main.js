jQuery(document).ready(function () {

    //TAB-1 | Summary

    for (i = 1; i <= 12; i++) {
        var hight_Sc1 = '.S' + i + '_c1';
        var hight_Sc2 = '.S' + i + '_c2';
        var vS_hight = $(hight_Sc1).height();
        $(hight_Sc2).height(vS_hight);
    }

    //TAB-2 | O1

    for (i = 11; i <= 12; i++) {
        var hight_O1c1 = '.O1' + i + '_c1';
        var hight_O1c2 = '.O1' + i + '_c2';
        var vO1_hight = $(hight_O1c1).height();
        $(hight_O1c2).height(vO1_hight);
    }

    //TAB-3 | O2

    for (i = 8; i <= 31; i++) {
        var hight_O2c1 = '.O2' + i + '_c1';
        var hight_O2c2 = '.O2' + i + '_c2';
        var vO2_hight = $(hight_O2c1).height();
        $(hight_O2c2).height(vO2_hight);
    }

    //TAB-4 | O3

    for (i = 1; i <= 29; i++) {
        var hight_O3c1 = '.O3' + i + '_c1';
        var hight_O3c2 = '.O3' + i + '_c2';
        var vO3_hight = $(hight_O3c1).height();
        $(hight_O3c2).height(vO3_hight);
    }

    //TAB-5 | O4

    for (i = 1; i <= 14; i++) {
        var hight_O4c1 = '.O4' + i + '_c1';
        var hight_O4c2 = '.O4' + i + '_c2';
        var vO4_hight = $(hight_O4c1).height();
        $(hight_O4c2).height(vO4_hight);
    }

    //TAB-6 | O5

    for (i = 1; i <= 54; i++) {
        var hight_O5c1 = '.O5' + i + '_c1';
        var hight_O5c2 = '.O5' + i + '_c2';
        var vO5_hight = $(hight_O5c1).height();
        $(hight_O5c2).height(vO5_hight);
    }

    //TAB-7 | O6
    for (i = 1; i <= 27; i++) {
        var hight_O6c1 = '.O6' + i + '_c1';
        var hight_O6c2 = '.O6' + i + '_c2';
        var vO6_hight = $(hight_O6c1).height();
        $(hight_O6c2).height(vO6_hight);
    }

    //TAB-8 | Business
    for (i = 1; i <= 11; i++) {
        var hight_BSSc1 = '.BSS' + i + '_c1';
        var hight_BSSc2 = '.BSS' + i + '_c2';
        var vBSS_hight = $(hight_BSSc1).height();
        $(hight_BSSc2).height(vBSS_hight);
    }

    //TAB-9 | Humanitarian Strategy Milestones
    for (i = 1; i <= 19; i++) {
        var hight_HSMc1 = '.HSM' + i + '_c1';
        var hight_HSMc2 = '.HSM' + i + '_c2';
        var vHSM_hight = $(hight_HSMc1).height();
        $(hight_HSMc2).height(vHSM_hight);
    }

    //TAB-10 | Advocacy Common Agenda
    for (i = 1; i <= 4; i++) {
        var hight_ACAc1 = '.ACA' + i + '_c1';
        var hight_ACAc2 = '.ACA' + i + '_c2';
        var vACA_hight = $(hight_ACAc1).height();
        $(hight_ACAc2).height(vACA_hight);

        //$(hight_ACAc1).css('background-color', 'red');
        //$(hight_ACAc2).css('background-color', 'red');
    }



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
        function sort_li_dex(a, b) {
            return ($(b).data('position')) < ($(a).data('position')) ? 1 : -1;
        }
        function sort_li_sin(a, b) {
            return ($(b).data('position')) < ($(a).data('position')) ? -1 : 1;
        }
    }).change();

    $(window).resize(function () {
        var S1_c1 = $(".S1_c1").height();
        $(".S1_c2").height(S1_c1);

        var S2_c1 = $(".S2_c1").height();
        $(".S2_c2").height(S2_c1);


        var S3_c1 = $(".S3_c1").height();
        $(".S3_c2").height(S3_c1);

        var S3_c1 = $(".S3_c1").height();
        $(".S3_c2").height(S3_c1);

        var alt_s8 = $(".h_st_s8").height();
        $(".h_l_s8").height(alt_s8);

        var alt_s11 = $(".h_st_s11").height();
        $(".h_l_s11").height(alt_s11);

        var alt_s31 = $(".h_st_s31").height();
        $(".h_l_s31").height(alt_s31);

        var alt_s32 = $(".h_st_s32").height();
        $(".h_l_s32").height(alt_s32);

        var alt_s310 = $(".h_st_s310").height();
        $(".h_l_s310").height(alt_s310);

        var alt_s311 = $(".h_st_s311").height();
        $(".h_l_s311").height(alt_s311);

        var alt_s327 = $(".h_st_s327").height();
        $(".h_l_s327").height(alt_s327);

        var alt_s328 = $(".h_st_s328").height();
        $(".h_l_s328").height(alt_s328);

        var alt_s329 = $(".h_st_s329").height();
        $(".h_l_s329").height(alt_s329);

        var alt_s430 = $(".h_st_s430").height();
        $(".h_l_s430").height(alt_s430);

        var alt_s514 = $(".h_st_s514").height();
        $(".h_l_s514").height(alt_s514);

        var alt_s524 = $(".h_st_s524").height();
        $(".h_l_s524").height(alt_s524);

        var alt_s525 = $(".h_st_s525").height();
        $(".h_l_s525").height(alt_s525);

        var alt_s526 = $(".h_st_s526").height();
        $(".h_l_s526").height(alt_s526);

        var alt_s527 = $(".h_st_s527").height();
        $(".h_l_s527").height(alt_s527);

        var alt_s528 = $(".h_st_s528").height();
        $(".h_l_s528").height(alt_s528);

        var alt_s65 = $(".h_st_s65").height();
        $(".h_l_s65").height(alt_s65);

    });
});