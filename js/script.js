$(document).ready(function(){
    // Laden artikelen
    $('.blogInhoud').load('../html/blogArtikelen.html', function(){
        $('.oldArticle').hide();
        $('.fullVersion').hide();
    });

    // Artikel openen/sluiten
    // Aside knoppen
    $('#btnPreview').on('click', function(){
        $('#cursus').slideDown();
        $('#cursusFullVersion').slideUp();
        $('#aanmelding').slideDown();
        $('#aanmeldingFullVersion').slideUp();
        $('#docent').slideDown();
        $('#docentFullVersion').slideUp();
        $('#onderhoud').slideUp();
        $('#opening').slideUp();
    });
    $('#btnCursus').on('click', function(){
        $('.close').slideUp();
        $('#cursus').slideDown();
        $('#cursusFullVersion').slideDown();
    });
    $('#btnAanmelding').on('click', function(){
        $('.close').slideUp();
        $('#aanmelding').slideDown();
        $('#aanmeldingFullVersion').slideDown();
    });
    $('#btnDocent').on('click', function(){
        $('.close').slideUp();
        $('#docent').slideDown();
        $('#docentFullVersion').slideDown();
    });
    $('#btnOnderhoud').on('click', function(){
        $('.close').slideUp();
        $('#onderhoud').slideDown();
    });
    $('#btnOpening').on('click', function(){
        $('.close').slideUp();
        $('#opening').slideDown();
    });
    // Artikel onClick
    $('.blogInhoud').on('click', '#cursus', function(){
        $('#cursusFullVersion').slideToggle();
        $('#aanmelding').slideToggle();
        $('#docent').slideToggle();
    });
    $('.blogInhoud').on('click', '#aanmelding', function(){
        $('#aanmeldingFullVersion').slideToggle();
        $('#cursus').slideToggle();
        $('#docent').slideToggle();
    });
    $('.blogInhoud').on('click', '#docent', function(){
        $('#docentFullVersion').slideToggle();
        $('#cursus').slideToggle();
        $('#aanmelding').slideToggle();
    });

    // Article form
    $('input.datepicker').Zebra_DatePicker();
    $('#addTitle').on('click', function(){
        $('#articleTable').append('<tr><td><label for="titel">Titel</label></td></tr>');
        $('#articleTable').append('<tr><td><tr><td><textarea name="titel" placeholder="Uw titel hier" maxlength="1500"></textarea></td></tr>');
    });
    $('#addParagraph').on('click', function(){
        $('#articleTable').append('<tr><td><label for="paragraaf">Paragraaf</label></td></tr>');
        $('#articleTable').append('<tr><td><textarea name="paragraaf" placeholder="Uw paragraaf hier" maxlength="1500"></textarea></td></tr>');
    });
    $('#btnOpslaan').on('click', function(event){
        event.preventDefault();
        const date = $('#datepicker').val();
        const auteur = $('#auteurInput').val();
        const titel = $('#titelInput').val();
        const paragraaf = $('#paragraafInput').val();

        if(date !== '' && auteur !== '' && titel !== '' && paragraaf !== ''){
            alert('Artikel opgeslagen.');
        }
        else{
            alert('Zorg er voor dat alles is ingevuld.');
        };
    });
});