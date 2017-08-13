/**
 * Created by luis on 16/07/17.
 */


function drawMessages(messages){
    var messageUl = $('#messages');
    messageUl.empty();

    if(messages){
        for (var i=0; i < messages.length; i++  ){
            messageUl.append('<li class="message-item"><button class="remove-button" data-id="'+ messages[i].id +'"><i class="fa fa-trash-o" aria-hidden="true"></i></button> '+messages[i].name+'</li>');
        }

        var buttons = $('.remove-button').toArray();

        for (var i=0; i < buttons.length; i++  ){

        
            buttons[i].addEventListener('click',function (e) {
                deleteMessages($(this).data('id'))
                getMessages();
            });
        }
    }

}

var messages = [];

var createContactMsg = function (name) {
    var XHR = new XMLHttpRequest();
    XHR.open("POST", "http://localhost:8000/api/messages", true);
    XHR.setRequestHeader("Content-Type", "application/json");

    XHR.onreadystatechange = function () {
        if (XHR.readyState === 4) {
            messages.push(JSON.parse(XHR.responseText));
        } else if (XHR.readyState === 4 && XHR.status === 404) {
            console.log("Página no encontrada");
        }
    }

    XHR.send(JSON.stringify({"name": name}));
}

var getMessages = function () {
    var XHR = new XMLHttpRequest();
    XHR.open("GET", "http://localhost:8000/api/messages", true);
    XHR.setRequestHeader("Content-Type", "application/json");

    XHR.onreadystatechange = function () {
        if (XHR.readyState === 4 && XHR.status !== 404) {
            messages = JSON.parse(XHR.responseText);
            drawMessages(messages);
        } else if (XHR.readyState === 4 && XHR.status === 404) {
            console.log("There is no messages yet, please fill the contact form to create some messages.");
        }
    }
    
    XHR.send();
}

var deleteMessages = function (id) {
    var XHR = new XMLHttpRequest();
    XHR.open("DELETE", "http://localhost:8000/api/messages/" + id, true);
    XHR.setRequestHeader("Content-Type", "application/json");

    XHR.onreadystatechange = function () {
        if (XHR.readyState === 4) {
            console.log("message deleted");
            getMessages();
        } else if (XHR.readyState === 4 && XHR.status === 404) {
            console.log("Página no encontrada");
        }
    }

    XHR.send();
}

getMessages();








