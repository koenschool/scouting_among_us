var
$code_input = $('#code_input'),
$code_button = $('#code_button'),
$inhoud = $('.inhoud'),
$vraag_container = $('.vraag_container'),
$vraag = $('.vraag'),
$antwoord = $('#antwoord'),
$antwoord_button = $('#antwoord_button'),
$letter = $("#letter"),
$choose_b = $(".choose_b"),
$ans_links = $("#ans_links"),
$ans_rechts = $("#ans_rechts"),
$reload_b = $("#reload_b"),
$admin_screen = $(".admin_screen"),
$admin_info = $(".admin_info"),
$select_woord = $("#select_woord"),
$begin_screen = $('#begin_screen');

$( document ).ready(function() {
    // console.log(among_codes);
    
    $code_button.click(function() {
        i1=0;
        user_input = $code_input.val().toUpperCase().replace(/\s/g, '');
        for (let key in among_codes) {
            if (among_codes.hasOwnProperty(key)) {
                let array = among_codes[key];
                for (let i = 0; i < array.length; i++) {
                    if( array[i]["code"].toUpperCase().replace(/\s/g, '') == user_input){
                        $begin_screen.remove();
                        $vraag_container.css("display", "flex");
                        // console.log(i);
                        // console.log(i1);
                        return vraag_func(array[i]["func_name"], array[i]["info"], array[i]["ans"], i, i1, array[i]["choose"]);
                    // } else if( $code_input.val() == "4dm1nm0d3"){
                    } else if( user_input == "4dm1nm0d3".toUpperCase().replace(/\s/g, '')){
                        return admin_func();
                    }
                }
            }

        i1++;
        }
        alert("FOUTE CODE\nCheck je spelling en probeer opnieuw."); 
    });

    function admin_func() {
        $begin_screen.remove();
        $admin_screen.css("display", "flex");
        $("body").css("justify-content", "unset");
                let puzzle_array = among_puzzle["puzzle_type"];
                for (let i = 0; i < puzzle_array.length; i++) {
                $select_woord.append('<option value="'+i+'">'+puzzle_array[i]["name"]+' ronde:'+(i+1)+'</option>');
                }
        $select_woord.on("change", function() {
            $admin_info.empty();
            $admin_info.append('<tr> <th>Letter/Positie</th> <th>Code</th> <th>Categorie</th> <th>Vraag</th> <th>Antwoord</th> </tr>');
            among_num = parseInt($select_woord.val()) + 1;
            among_target = among_codes["r" + among_num];
            woord_val = $select_woord.val();
            for (let i2 = 0; i2 < among_target.length; i2++) {
                $admin_info.append('<tr> <td>'+among_puzzle["puzzle_type"][woord_val]["name"].charAt(i2)+'/'+i2+'</td> <td>'+among_codes["r"+among_num][i2]["code"]+'</td> <td>'+among_codes["r"+among_num][i2]["func_name"]+'</td> <td>'+among_codes["r"+among_num][i2]["info"]+'</td> <td>'+among_codes["r"+among_num][i2]["ans"]+'</td> </tr>');
            }
        });
    }

    function vraag_func(vraag_type, vraag_text, vraag_ans, ronde_num, ronde_name_num, choose){
            if(choose == true) {
                $antwoord.hide();
                $antwoord_button.hide();
            } else {
                $choose_b.hide();
            }
        switch (vraag_type) {
                case "rekensom":
                break;
                case "scouting":
                break;
                case "game":
                break;
                case "auto":
                
                break;
                case "populaire":
                
                break;
                case "knoop":
                    $vraag.html($vraag.html()+"Welke knoop is dit?");
                break;
                case "meme":
                
                break;
                case "geschiedenis":
                
                break;
            default:
                break;
        }
        $vraag.html($vraag.html()+vraag_text);
        $antwoord_button.click(function(){
            if(vraag_ans.toUpperCase().replace(/\s/g, '') == $antwoord.val().toUpperCase().replace(/\s/g, '')){
                show_letter();
            } else {
                reload(true);
            }
        });
        $ans_rechts.click(function(){
            if(vraag_ans == "rechts"){
                show_letter();
            } else {
                reload(true);
            }
        });
        $ans_links.click(function(){
            if(vraag_ans == "links"){
                show_letter();
            } else {
                reload(true);
            }
        });
        function show_letter() {
            $vraag_container.hide();
            // console.log(among_puzzle["puzzle_type"][ronde_name_num]["name"]);
            $letter.html("Je letter is "+among_puzzle["puzzle_type"][ronde_name_num]["name"].charAt(ronde_num).toUpperCase()+".<br>Op plek "+(ronde_num+1)+ '.<br><img height="200px" src="img/amogus.png">');
            // console.log(among_puzzle["puzzle_type"][ronde_name_num]["name"].charAt(ronde_num));
            $reload_b.show();
            $reload_b.click(function() {
                reload(false);
            });
        }
        function reload(give_error) {
            if(give_error == true) {
            alert("FOUT ANTWOORD!!!\nDe pagina word herladen :)");
            }
            location.reload();
        }
        
    }
});

function checkCode(){

}