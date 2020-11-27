jQuery(document).ready(function () {

    $('ul.listitems li').click(function (e) {
        tab_selected = $(this).find('a').attr('href');
        switch (tab_selected) {
            case '#summary':
                resize_tab1();
                break;
            case '#objetive1':
                resize_tab2();
                break;
            case '#objetive2':
                resize_tab3();
                break;
            case '#objetive3':
                resize_tab4();
                break;
            case '#objetive4':
                resize_tab5();
                break;
            case '#objetive5':
                resize_tab6();
                break;
            case '#objetive':
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
            console.log(hight_O1c1);
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