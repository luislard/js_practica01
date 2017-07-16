/**
 * Created by luis on 16/07/17.
 */


function drawMessages(messages){
    var messageUl = $('#messages');
    messageUl.empty();

    messages.forEach(function (element) {
        messageUl.append('<li class="message-item"><button class="remove-button" data-id="'+ element.id +'"><i class="fa fa-trash-o" aria-hidden="true"></i></button> '+element.name+'</li>');
    });

    var buttons = $('.remove-button').toArray();

    buttons.forEach(function (element) {
        element.addEventListener('click',function (e) {
            deleteMessages($(this).data('id'))
            getMessages();
        });

    });

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
        if (XHR.readyState === 4) {
            messages = JSON.parse(XHR.responseText);
            drawMessages(messages);
        } else if (XHR.readyState === 4 && XHR.status === 404) {
            console.log("Página no encontrada");
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








