$(document).ready(function(){
    $(document).on('click','#sava_data',function(){
    var err = "";
    var alert = "";
    var person = {
        cus_name: "",
        email: "",
        phone: "",
        rate_quality: "",
        beverage: "",
        restaurant_clean: "",
        overall_dining: "" 
    };

    // function savedata(){

    var lscount = localStorage.length;
        person.cus_name = $("#customer_name").val(),
        person.email = $("#email").val(),
        person.phone = $("#phone").val(),
        person.rate_quality = $("#rate_quality:checked").val(),
        person.beverage = $("#beverage:checked").val(),
        person.restaurant_clean = $("#restaurant_clean:checked").val(),
        person.overall_dining = $("#overall_dining:checked").val(),

        person.cus_name.length ? true : err += " Please provide valid name. " ;
        person.email.length ? true : err += " Please provide valid email. " ;
        person.phone.length ? true : err += " Please provide valid Phone Number. " ;
        person.rate_quality = $("#rate_quality:checked").length ? person.rate_quality = $("#rate_quality:checked").val() : err += " Please Select rate quality. " ;
        person.beverage = $("#beverage:checked").length ?  person.beverage = $("#beverage:checked").val() : err += " Please select beverage. " ;
        person.restaurant_clean = $("#restaurant_clean:checked").length ? person.restaurant_clean = $("#restaurant_clean:checked").val() : err += " Please select is resturent clean. " ;
        person.overall_dining = $("#overall_dining:checked").length ?    person.overall_dining = $("#overall_dining:checked").val() : err += " Please select overall experience. " ;

        if(!err.length){
            localStorage.setItem("rleads" + lscount,  JSON.stringify(person));
            window.location = "thankyou.html";
        }else{
            // alert("<p class='text-danger'>"+err+"</p>");
            alert += "<div class='alert alert-danger' role='alert'>"+err+"</div>";
            window.scrollTo(xCoord, yCoord);
    }
    var alertdata = $('#alert-err').find("p");
    alertdata.append(alert);
// }
    });

    //  var item = JSON.parse(localStorage.getItem('rleads'));
    function loaddata() {
    $("#user_trs").empty();
    var trs = "";

     var datacount = localStorage.length;
     if (datacount > 0){
        // $.each(datacount, function (k, v) {
            for (i=0; i < datacount; i++) {
            var key = localStorage.key(i);
            var rleads = localStorage.getItem(key);
            var data = JSON.parse(rleads);
            console.log(data.cus_name);
            trs += '<tr><td>'+data.cus_name+'</td><td>'+data.email+'</td><td>'+data.phone+'</td><td>'+data.rate_quality+'</td><td>'+data.beverage+'</td><td>'+data.restaurant_clean+'</td><td>'+data.overall_dining+'</td></tr>';
            }
        // });
     }
     var tbody = $('#user_list').find("tbody");
     tbody.append(trs);
    }
    window.onload = function() {
        loaddata();
    };

 });

