const cardList = [
    {
        title: "Starship",
        image: "images/r2.jpeg",
        link: "Starship",
        description: "Hello there! the mission was about the heavy rockect."
    },

    {
        title: "Dragon",
        image: "images/r3.png",
        link: "Dragon",
        description: "The Dragon spacecraft is capable of carrying up to 7 passengers to and from Earth orbit, and beyond"
    }

]


const clickMe = () => {
    alert("thanks for clicking me");
}

const submitForm = () => {
    let formData = {};
    formData.first_name = $('#first_name').val();
    formData.last_name = $('#last_name').val();
    formData.password = $('#password').val();
    formData.email = $('#email').val();

    console.log("form data submitted: ", formData);
}


const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">' +
            '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' + item.image + '">' +
            '</div><div class="card-content">' +
            '<span class="card-title activator grey-text text-darken-4">' + item.title + '<i class="material-icons right">more_vert</i></span><p><a href="#">' + item.link + '</a></p></div>' +
            '<div class="card-reveal">' +
            '<span class="card-title grey-text text-darken-4">' + item.title + '<i class="material-icons right">close</i></span>' +
            '<p class="card-text">' + item.description + '</p>' +
            '</div></div></div>';
        $("#card-section").append(itemToAppend)
    });
}



$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('#clickMeButton').click(() => {
        submitForm();
    })
    addCards(cardList);
    $('.modal').modal();
});