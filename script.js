$(document).ready(function(){
    $("#submit_form").validate({
       rules: {
                customer_name: {
                    required: true,
                    minlength: 3,
                    maxlength: 35,
                },
                phone: {
                    required: true,
                    minlength: 10,
                    maxlength: 10,
                },
                email: {
                    required: true,
                    email: true
                },
                rate_quality:"required"
            },

            messages: {
                customer_name: {
                    required: "Customer Name is required",
                    letters: "Must enter character only",
                    maxlength: "Please enter 35 Characters only"
                },
                email: {
                    required: "Email is required",
                    email: "Please enter a valid email id",
                    emailtest: "Please enter a valid email address"
                },
                phone: {
                    required: "Please enter a valid mobile number",
                    minlength: "Please enter 10 digits only",
                    maxlength: "Please enter 10 digits only"
                },
            }
    });
});

$(document).ready(function(){
    $(document).on('click','#sava_data',function(){
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

        localStorage.setItem("rleads" + lscount,  JSON.stringify(person));

        window.location = "thankyou.html";
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
            trs += '<tr><td>'+data.cus_name+'</td><td>'+data.email+'</td><td>'+data.phone+'</td><td>'+data.rate_quality+'</td></tr>';
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

