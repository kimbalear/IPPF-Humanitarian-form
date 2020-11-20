jQuery(document).ready(function () {
    var alt_s234_1 = $(".h_st_s234_1").height();
    $(".h_l_s234_1").height(alt_s234_1 - 6);
    var alt_s234_2 = $(".h_st_s234_2").height();
    $(".h_l_s234_2").height(alt_s234_2 - 6);
    var alt_s234_3 = $(".h_st_s234_3").height();
    $(".h_l_s234_3").height(alt_s234_3 - 6);

    var alt_s8 = $(".h_st_s8").height();
    $(".h_l_s8").height(alt_s8 + 8);

    var alt_s11 = $(".h_st_s11").height();
    $(".h_l_s11").height(alt_s11 + 8);

    var alt_s31 = $(".h_st_s31").height();
    $(".h_l_s31").height(alt_s31 + 8);

    var alt_s32 = $(".h_st_s32").height();
    $(".h_l_s32").height(alt_s32 + 8);

    var alt_s310 = $(".h_st_s310").height();
    $(".h_l_s310").height(alt_s310 + 8);

    var alt_s311 = $(".h_st_s311").height();
    $(".h_l_s311").height(alt_s311 + 8);

    var alt_s327 = $(".h_st_s327").height();
    $(".h_l_s327").height(alt_s327 + 8);

    var alt_s328 = $(".h_st_s328").height();
    $(".h_l_s328").height(alt_s328 + 8);

    var alt_s329 = $(".h_st_s329").height();
    $(".h_l_s329").height(alt_s329 + 8);

    var alt_s430 = $(".h_st_s430").height();
    $(".h_l_s430").height(alt_s430 + 8);

    var alt_s514 = $(".h_st_s514").height();
    $(".h_l_s514").height(alt_s514 + 8);

    var alt_s524 = $(".h_st_s524").height();
    $(".h_l_s524").height(alt_s524 + 8);

    var alt_s525 = $(".h_st_s525").height();
    $(".h_l_s525").height(alt_s525 + 8);

    var alt_s526 = $(".h_st_s526").height();
    $(".h_l_s526").height(alt_s526 + 8);

    var alt_s527 = $(".h_st_s527").height();
    $(".h_l_s527").height(alt_s527 + 8);

    var alt_s528 = $(".h_st_s528").height();
    $(".h_l_s528").height(alt_s528 + 8);

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
        var alt_s234_1 = $(".h_st_s234_1").height();
        $(".h_l_s234_1").height(alt_s234_1 - 6);
        var alt_s234_2 = $(".h_st_s234_2").height();
        $(".h_l_s234_2").height(alt_s234_2 - 6);
        var alt_s234_3 = $(".h_st_s234_3").height();
        $(".h_l_s234_3").height(alt_s234_3 - 6);

        var alt_s8 = $(".h_st_s8").height();
        $(".h_l_s8").height(alt_s8 + 8);

        var alt_s11 = $(".h_st_s11").height();
        $(".h_l_s11").height(alt_s11 + 8);

        var alt_s31 = $(".h_st_s31").height();
        $(".h_l_s31").height(alt_s31 + 8);

        var alt_s32 = $(".h_st_s32").height();
        $(".h_l_s32").height(alt_s32 + 8);

        var alt_s310 = $(".h_st_s310").height();
        $(".h_l_s310").height(alt_s310 + 8);

        var alt_s311 = $(".h_st_s311").height();
        $(".h_l_s311").height(alt_s311 + 8);

        var alt_s327 = $(".h_st_s327").height();
        $(".h_l_s327").height(alt_s327 + 8);

        var alt_s328 = $(".h_st_s328").height();
        $(".h_l_s328").height(alt_s328 + 8);

        var alt_s329 = $(".h_st_s329").height();
        $(".h_l_s329").height(alt_s329 + 8);

        var alt_s430 = $(".h_st_s430").height();
        $(".h_l_s430").height(alt_s430 + 8);

        var alt_s514 = $(".h_st_s514").height();
        $(".h_l_s514").height(alt_s514 + 8);

        var alt_s524 = $(".h_st_s524").height();
        $(".h_l_s524").height(alt_s524 + 8);

        var alt_s525 = $(".h_st_s525").height();
        $(".h_l_s525").height(alt_s525 + 8);

        var alt_s526 = $(".h_st_s526").height();
        $(".h_l_s526").height(alt_s526 + 8);

        var alt_s527 = $(".h_st_s527").height();
        $(".h_l_s527").height(alt_s527 + 8);

        var alt_s528 = $(".h_st_s528").height();
        $(".h_l_s528").height(alt_s528 + 8);

    });
});