jQuery(document).ready(function () {
    var S1_c1 = $(".S1_c1").height();
    $(".S1_c2").height(S1_c1);

    var S2_c1 = $(".S2_c1").height();
    $(".S2_c2").height(S2_c1);


    var S3_c1 = $(".S3_c1").height();
    $(".S3_c2").height(S3_c1);

    /******/
    for(i=7; i <=12; i++){
        var vhi = 'S'+i+'_c1';
        v2 = 'S'+i+'_c2';
        var vhi = $(".S7_c1").height();
        $(".S7_c2").height(vhi);
    }

    var S7_c1 = $(".S7_c1").height();
    $(".S7_c2").height(S7_c1);

    var S8_c1 = $(".S8_c1").height();
    $(".S8_c2").height(S8_c1);

    var S9_c1 = $(".S9_c1").height();
    $(".S9_c2").height(S9_c1);

    var S10_c1 = $(".S10_c1").height();
    $(".S10_c2").height(S10_c1);

    var S11_c1 = $(".S11_c1").height();
    $(".S11_c2").height(S11_c1);

    var S12_c1 = $(".S12_c1").height();
    $(".S12_c2").height(S12_c1);

    /******/

    var O11_c1 = $(".O11_c1").height();
    $(".O11_c2").height(O11_c1);

    /******/

    var O28_c1 = $(".O28_c1").height();
    $(".O28_c2").height(O28_c1);

    var O29_c1 = $(".O29_c1").height();
    $(".O29_c2").height(O29_c1);

    var O210_c1 = $(".O210_c1").height();
    $(".O210_c2").height(O210_c1);

    var O211_c1 = $(".O211_c1").height();
    $(".O211_c2").height(O211_c1);

    var O212_c1 = $(".O212_c1").height();
    $(".O212_c2").height(O212_c1);

    var O213_c1 = $(".O213_c1").height();
    $(".O213_c2").height(O213_c1);

    var O214_c1 = $(".O214_c1").height();
    $(".O214_c2").height(O214_c1);

    var O215_c1 = $(".O215_c1").height();
    $(".O215_c2").height(O215_c1);

    var O216_c1 = $(".O216_c1").height();
    $(".O216_c2").height(O216_c1);

    var O210_c1 = $(".O210_c1").height();
    $(".O210_c2").height(O210_c1);

    var O210_c1 = $(".O210_c1").height();
    $(".O210_c2").height(O210_c1);

    var O210_c1 = $(".O210_c1").height();
    $(".O210_c2").height(O210_c1);

    var O210_c1 = $(".O210_c1").height();
    $(".O210_c2").height(O210_c1);

    var O210_c1 = $(".O210_c1").height();
    $(".O210_c2").height(O210_c1);

    var O210_c1 = $(".O210_c1").height();
    $(".O210_c2").height(O210_c1);

    var O210_c1 = $(".O210_c1").height();
    $(".O210_c2").height(O210_c1);
    

    






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