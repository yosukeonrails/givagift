var $ = require('jquery');
var materialize= require('materialize-css');
var data = require('./data.js');
//start

class View {

    showUser() {

        window.location.href = "/home.html";

         $('#profile-pic').append('<img src='+ this.user.pictureUrl+' alt="" />');

          $('.show-user').text(this.user.name);


    }

    showBirthday() {

        // let userData= this.user.friendList;
        //
        // for( var i=0; i<userData.length ; i++){
        //
        //   let email=userData[i];
        //
        //   let birthdayProfile= '<li><div class="birthday-person">'+'<img src='+data.users[email].pictureUrl+'>'+'<h2>'+data.users[email].name+'</h2>'+'</div></li>';
        //
        //      $('.birthdays ul').append(birthdayProfile);
        //
        //
        // }



        // for each email in userData , append <li> userData[email].name</li>
        //  $.each(userData, function(index, value){
        //    console.log(value.name);
        //
        //       //  $('.birthdays ul').append('<li>'+  +'</li>');
        //  });

    }



    login() {

        let email = $('#email-input').val();
        let password = $('#password-input').val();
        let userData = data.users;


        if (!userData[email] || password != data.users[email].password) {

            alert('wrong passoword or user mate!');
            return;
        }

        this.user = new User(data.users[email].name, data.users[email].email, data.users[email].pictureUrl, data.users[email].friendList);

        $('.sign-in').fadeOut(500, function() {

        });

        this.showUser();


        // this.showBirthday();

        // $('.sign-in').fadeOut(500, function() {
        //
        //     $('.sign-in').hide();
        //     $('.side-bar ').fadeIn(500, function() {
        //         $('.side-bar').show();
        //     });
        //
        //     $('.side-bar ').fadeIn(500, function() {
        //         $('.birthdays').show();
        //     });
        //
        //
        // });

    }

}



class User {

    constructor(name, email, pictureUrl, friendList) {

        this.name = name;
        this.email = email;
        this.pictureUrl = pictureUrl;
        this.friendList = friendList;

    }

}

//
// var newUser = new User(data.users[0].name, data.users[0].email);
// end


$(document).ready(function() {

    

    console.log('document is ready!');


    var appView = new View();

    $('#enter-button').click(function() {

        console.log('its working!');

        $('.welcome-message').fadeOut(500, function() {
            $('.welcome-message').hide();
            $('.sign-in ').fadeIn(500, function() {
                $('.sign-in ').show();
            });

        });
    });


    $('#facebook-login-button').click(function() {
        event.preventDefault();
        console.log('clicked');
        appView.login();
    });


    $('#login-button').click(function() {
        console.log('clicked');

        appView.login();

    });


    $('.header h2').click(function() {

        event.preventDefault();
        console.log('clicked header');

        $('.welcome-message').fadeOut(500, function() {
            window.location.href = "/signup.html";
        });
    });

    $('.create-new').click(function(){

        console.log('creating new quiz!');
          // window.location.href = "/quiz.html";

    });


});
