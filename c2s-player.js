var gazeta_pl = gazeta_pl || {};

gazeta_pl.content2speech = {

    $range: document.querySelector('#c2s-range'),
    $rangeValue: document.querySelector('#c2s-range-value'),

    init() {

        if (!!this.$range) {

            console.log('INIT');

            this.$range.addEventListener('change', e => {

                this.$rangeValue.value = e.target.value;
                console.log(this.$rangeValue)
            });
        }
    }
}

gazeta_pl.content2speech.init();