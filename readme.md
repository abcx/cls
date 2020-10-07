* dodanie do obrazka parametru `--aspect-ratio: 16/9` NIE WPŁYWA na obniżenie CLS
* dodanie zewnętrznego fonta obniża CLS (niezależnie czy jest to metoda `SWAP` czy `OPTIONAL` - jest identycny wynik)
* **CLS obliczany jest tylko dla viewport**, dodanie z 1 sekundowym opóźnieniem zdjęcia poza viewport nie wydaje się mieć wpływu na CLS