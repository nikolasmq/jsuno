$(document).ready(function () {

    //Slider
    if(window.location.href.indexOf('index') > -1) {
        $('.galeria').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true,
            infiniteLoop: true
        });
    }

    //Posts
    if(window.location.href.indexOf('index') > -1){
        let posts = [
            {
                title: 'Primer titulo de prueba 1',
                date: moment().format('MMMM Do YYYY, h:mm:ss a'),
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
            },
            {
                title: 'Primer titulo de prueba 2',
                date: moment().format('MMMM Do YYYY, h:mm:ss a'),
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
            },
            {
                title: 'Primer titulo de prueba 3',
                date: moment().format('MMMM Do YYYY, h:mm:ss a'),
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
            },
            {
                title: 'Primer titulo de prueba 4',
                date: moment().format('MMMM Do YYYY, h:mm:ss a'),
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
            },
            {
                title: 'Primer titulo de prueba 5',
                date: moment().format('MMMM Do YYYY, h:mm:ss a'),
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
            },

        ];
        posts.forEach((item, index) => {
            let post = `
                <article class="post">
                        <h2>${item.title}</h2>
                        <span class="date">${item.date}</span>
                        <p>${item.content}</p>
                    <a class="button-more" href="#">Leer más</a>
                    <hr>
                </article>
            `;
            $('#posts').append(post);
        });
    }

        //Selector de theme
    let theme = $('#theme');
    $('#to-green').click(function () {
        theme.attr('href','css/gren.css');
    });
    $('#to-blue').click(function () {
        theme.attr('href','css/blue.css');
    });
    $('#to-red').click(function () {
        theme.attr('href','css/red.css');
    });

    //Scroll arrina
    $('.subir').click(function () {
        $('html, body').animate({
            scrollTop:0
        }, 500);
        return false;
    });

    //Login
    $('#login form').submit(function () {
        let name = $('#form_name').val();
        let email = $('#form_email').val();
        let pass = $('#form_pass').val();

        localStorage.setItem('form_name', name);
        localStorage.setItem('form_email', email);
        localStorage.setItem('form_pass', pass);
    });
        let form_name = localStorage.getItem('form_name');

        if(form_name != null && form_name != 'undefined'){
            let aboot_parrafo = $('#aboud p');

            aboot_parrafo.html('<br><strong>Bienvenido, '+form_name+' </strong>');
            aboot_parrafo.append('<a href="#" id="logout">  Cerrar sección</a>');

            $('#login').hide();

            $('#logout').click(function () {
                localStorage.clear();
                location.reload();
            });
        }

        //Acordeon
        if (window.location.href.indexOf('aboud') > -1){
            $('#acordeon').accordion();
        }

        //reloj
    if(window.location.href.indexOf('reloj') > -1){
        setInterval(function () {
            let reloj = moment().format('hh:mm:ss');
            $('#reloj').html(reloj);
        },1000);
    }

    	// Validación
	if(window.location.href.indexOf('contact') > -1){

		$("form input[name='date']").datepicker({
			dateFormat: 'dd-mm-yy'
		});

		$.validate({
		    lang: 'es',
		    errorMessagePosition: 'top',
		    scrollToTopOnError: true
		});

	}


});