var gazeta_pl = gazeta_pl || {};

gazeta_pl.content2speech = {

    $range: document.querySelector('#c2s-range'),

    init() {

        if (!!this.$range) {

            console.log('INIT');

            this.$range.addEventListener('change', e => {

                console.log(e.target.value)
            });
        }
    }
}

gazeta_pl.content2speech.init();