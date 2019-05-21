$('document').ready(() => {
    $('body').bind('keydown', (e) => {
        if (e.keyCode == 107 || e.keyCode == 187) {
            $('img').width($('img').width() * 1.1 )
        }
        if (e.keyCode == 109 || e.keyCode == 189) {
            $('img').width($('img').width() *  0.9)
        }
    })
})