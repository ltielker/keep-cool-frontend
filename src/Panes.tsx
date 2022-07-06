import {Header, Segment, Tab} from "semantic-ui-react";
import React from "react";

export const panes = [
    {
        menuItem: 'Allgemein',
        render: () => (
            <Tab.Pane>
                <Segment style={{height: "77vh", overflow: "scroll"}}>
                    <Header as='h3'>
                        Allgemein
                    </Header>
                    <p>
                        <strong>Minimaltemperatur</strong>: Die Minimaltemperatur ist die Temperatur,
                        die die Ware nicht unterschreiten darf.
                    </p>
                    <p>
                        <strong>Maximaltemperatur</strong>: Die Maximaltemperatur ist die Temperatur,
                        die die Ware nicht überschreiten darf.
                    </p>
                    <p><br/>
                        Folgende Bedingungen müssen bei Vorrichtungen und Behältern zur Lagerung und Beförderung von Lebensmitteln eingehalten werden:<br/><br/>

                        1. Sie müssen für diesen Zweck geeignet sein.<br/>
                        2. Sie müssen sauber und instand gehalten werden.<br/>
                        3. Die Vorschriften zur Kennzeichnung nach der Bedarfsgegenständeverordnung sind zu beachten (z.B. Aufschrift „Nur für Lebensmittel“ bei Behältnissen für lose Lebensmittel)
                        4. Eine nachteilige Beeinflussung der Lebensmittel ist auszuschließen.<br/>
                        5. Bei zeitgleicher Beförderung anderer Waren neben Lebensmitteln oder verschiedener Lebensmittel müssen die verschiedenen Ladungsbestandteile streng voneinander getrennt werden.<br/>
                        6. Behälter für die alternative Beförderung von verschiedenen Lebensmitteln oder anderer Waren müssen zwischen den einzelnen Ladungsvorgängen erforderlichenfalls gereinigt und desinfiziert werden.<br/>
                        7. Eine nachteilige Beeinflussung ist nach der LMHV jede ekelerregende oder sonstige Beeinträchtigung der einwandfreien Beschaffenheit von Lebensmitteln wie Mikroorganismen, Verunreinigungen, Witterungseinflüsse, Gerüche, Temperaturen, Gas, Dämpfe, Rauch, Aerosole, tierische Schädlinge, menschliche und tierische Ausscheidungen sowie Abfall, Abwässer, Reinigungs-, Desinfektions-, Pflanzenschutz und Schädlingsbekämpfungsmittel.<br/>
                        8. Für die Lagerung und den Transport sind – ebenso wie für die Herstellung und den Vertrieb von Lebensmitteln – geeignete HACCP-Konzepte zu erstellen.<br/>
                        9. Eigenkontrollen sind unerlässlich.<br/><br/><br/>


                        Das Beförderungsmittel muss sauber sein. Dazu gelten folgende Vorschriften:<br/><br/>

                        1. Reinigung und Desinfektion des Beförderungsmittels gelten als transportvorbereitende
                        Maßnahmen.<br/>
                        2. Der Laderaum des Beförderungsmittels muss so sauber sein, dass die darin beförderten
                        Lebensmittel hygienisch nicht negativ beeinflusst werden. Es handelt sich um eine Maßnahme der
                        Lebensmittel-Hygiene.<br/>
                        3. Kontrolle und Pflege des Laderaums sind laufend durchzuführen und zu dokumentieren.<br/>
                        4. Die Art, Reihenfolge und Häufigkeit der erforderlichen Reinigungs- und Desinfektionsmaßnahmen
                        ist von der Art des Transportgutes abhängig.<br/>
                        5. Eine Unterhaltsreinigung, eine Grundreinigung und eine Desinfektion sind zu unterscheiden.<br/>
                        6. Für Kühlfahrzeuge und Tiefkühlfahrzeuge, die verpackte Ware befördern, ist die
                        Unterhaltsreinigung in der Regel ausreichend. Die Reinigung ist mit Datum und Unterschrift zu
                        dokumentieren.<br/>
                        7. Die Grundreinigung hat in regelmäßigen Abständen zu erfolgen.<br/>
                        8. Der Verlader ist für die Desinfektion verantwortlich. Sie wird bei Bedarf vorgenommen. In der
                        Regel ist sie bei Transportfahrzeugen für unverpackte Ware – insbesondere Fleisch oder Fisch –
                        erforderlich.<br/>
                        9. Die durchgeführte Desinfektion muss dokumentiert werden.<br/>

                    </p>
                </Segment>
            </Tab.Pane>
        )
    },
    {
        menuItem: 'Fleisch gekühlt',
        render: () => (
            <Tab.Pane>
                <Segment style={{height: "77vh", overflow: "scroll"}}>
                    <Header as='h3'>
                        Fleisch gekühlt
                    </Header>
                    <p>
                        <strong>Minimaltemperatur</strong>: 3 °C
                    </p>
                    <p>
                        <strong>Maximaltemperatur</strong>: 7 °C
                    </p>
                    <p><br/>
                        Folgende Bedingungen müssen bei Vorrichtungen und Behältern zur Lagerung und Beförderung von Lebensmitteln eingehalten werden:<br/><br/>

                        1. Sie müssen für diesen Zweck geeignet sein.<br/>
                        2. Sie müssen sauber und instand gehalten werden.<br/>
                        3. Die Vorschriften zur Kennzeichnung nach der Bedarfsgegenständeverordnung sind zu beachten (z.B. Aufschrift „Nur für Lebensmittel“ bei Behältnissen für lose Lebensmittel)
                        4. Eine nachteilige Beeinflussung der Lebensmittel ist auszuschließen.<br/>
                        5. Bei zeitgleicher Beförderung anderer Waren neben Lebensmitteln oder verschiedener Lebensmittel müssen die verschiedenen Ladungsbestandteile streng voneinander getrennt werden.<br/>
                        6. Behälter für die alternative Beförderung von verschiedenen Lebensmitteln oder anderer Waren müssen zwischen den einzelnen Ladungsvorgängen erforderlichenfalls gereinigt und desinfiziert werden.<br/>
                        7. Eine nachteilige Beeinflussung ist nach der LMHV jede ekelerregende oder sonstige Beeinträchtigung der einwandfreien Beschaffenheit von Lebensmitteln wie Mikroorganismen, Verunreinigungen, Witterungseinflüsse, Gerüche, Temperaturen, Gas, Dämpfe, Rauch, Aerosole, tierische Schädlinge, menschliche und tierische Ausscheidungen sowie Abfall, Abwässer, Reinigungs-, Desinfektions-, Pflanzenschutz und Schädlingsbekämpfungsmittel.<br/>
                        8. Für die Lagerung und den Transport sind – ebenso wie für die Herstellung und den Vertrieb von Lebensmitteln – geeignete HACCP-Konzepte zu erstellen.<br/>
                        9. Eigenkontrollen sind unerlässlich.<br/><br/><br/>


                        Das Beförderungsmittel muss sauber sein. Dazu gelten folgende Vorschriften:<br/><br/>

                        1. Reinigung und Desinfektion des Beförderungsmittels gelten als transportvorbereitende
                        Maßnahmen.<br/>
                        2. Der Laderaum des Beförderungsmittels muss so sauber sein, dass die darin beförderten
                        Lebensmittel hygienisch nicht negativ beeinflusst werden. Es handelt sich um eine Maßnahme der
                        Lebensmittel-Hygiene.<br/>
                        3. Kontrolle und Pflege des Laderaums sind laufend durchzuführen und zu dokumentieren.<br/>
                        4. Die Art, Reihenfolge und Häufigkeit der erforderlichen Reinigungs- und Desinfektionsmaßnahmen
                        ist von der Art des Transportgutes abhängig.<br/>
                        5. Eine Unterhaltsreinigung, eine Grundreinigung und eine Desinfektion sind zu unterscheiden.<br/>
                        6. Für Kühlfahrzeuge und Tiefkühlfahrzeuge, die verpackte Ware befördern, ist die
                        Unterhaltsreinigung in der Regel ausreichend. Die Reinigung ist mit Datum und Unterschrift zu
                        dokumentieren.<br/>
                        7. Die Grundreinigung hat in regelmäßigen Abständen zu erfolgen.<br/>
                        8. Der Verlader ist für die Desinfektion verantwortlich. Sie wird bei Bedarf vorgenommen. In der
                        Regel ist sie bei Transportfahrzeugen für unverpackte Ware – insbesondere Fleisch oder Fisch –
                        erforderlich.<br/>
                        9. Die durchgeführte Desinfektion muss dokumentiert werden.<br/>
                    </p>
                </Segment>
            </Tab.Pane>
        )
    },
    {
        menuItem: 'Gemüse gekühlt',
        render: () => (
            <Tab.Pane>
                <Segment style={{height: "77vh", overflow: "scroll"}}>
                    <Header as='h3'>
                        Gemüse gekühlt
                    </Header>
                    <p>
                        <strong>Minimaltemperatur</strong>: 4 °C
                    </p>
                    <p>
                        <strong>Maximaltemperatur</strong>: 8 °C
                    </p>
                    <p><br/>
                        Folgende Bedingungen müssen bei Vorrichtungen und Behältern zur Lagerung und Beförderung von Lebensmitteln eingehalten werden:<br/><br/>

                        1. Sie müssen für diesen Zweck geeignet sein.<br/>
                        2. Sie müssen sauber und instand gehalten werden.<br/>
                        3. Die Vorschriften zur Kennzeichnung nach der Bedarfsgegenständeverordnung sind zu beachten (z.B. Aufschrift „Nur für Lebensmittel“ bei Behältnissen für lose Lebensmittel)
                        4. Eine nachteilige Beeinflussung der Lebensmittel ist auszuschließen.<br/>
                        5. Bei zeitgleicher Beförderung anderer Waren neben Lebensmitteln oder verschiedener Lebensmittel müssen die verschiedenen Ladungsbestandteile streng voneinander getrennt werden.<br/>
                        6. Behälter für die alternative Beförderung von verschiedenen Lebensmitteln oder anderer Waren müssen zwischen den einzelnen Ladungsvorgängen erforderlichenfalls gereinigt und desinfiziert werden.<br/>
                        7. Eine nachteilige Beeinflussung ist nach der LMHV jede ekelerregende oder sonstige Beeinträchtigung der einwandfreien Beschaffenheit von Lebensmitteln wie Mikroorganismen, Verunreinigungen, Witterungseinflüsse, Gerüche, Temperaturen, Gas, Dämpfe, Rauch, Aerosole, tierische Schädlinge, menschliche und tierische Ausscheidungen sowie Abfall, Abwässer, Reinigungs-, Desinfektions-, Pflanzenschutz und Schädlingsbekämpfungsmittel.<br/>
                        8. Für die Lagerung und den Transport sind – ebenso wie für die Herstellung und den Vertrieb von Lebensmitteln – geeignete HACCP-Konzepte zu erstellen.<br/>
                        9. Eigenkontrollen sind unerlässlich.<br/><br/><br/>


                        Das Beförderungsmittel muss sauber sein. Dazu gelten folgende Vorschriften:<br/><br/>

                        1. Reinigung und Desinfektion des Beförderungsmittels gelten als transportvorbereitende
                        Maßnahmen.<br/>
                        2. Der Laderaum des Beförderungsmittels muss so sauber sein, dass die darin beförderten
                        Lebensmittel hygienisch nicht negativ beeinflusst werden. Es handelt sich um eine Maßnahme der
                        Lebensmittel-Hygiene.<br/>
                        3. Kontrolle und Pflege des Laderaums sind laufend durchzuführen und zu dokumentieren.<br/>
                        4. Die Art, Reihenfolge und Häufigkeit der erforderlichen Reinigungs- und Desinfektionsmaßnahmen
                        ist von der Art des Transportgutes abhängig.<br/>
                        5. Eine Unterhaltsreinigung, eine Grundreinigung und eine Desinfektion sind zu unterscheiden.<br/>
                        6. Für Kühlfahrzeuge und Tiefkühlfahrzeuge, die verpackte Ware befördern, ist die
                        Unterhaltsreinigung in der Regel ausreichend. Die Reinigung ist mit Datum und Unterschrift zu
                        dokumentieren.<br/>
                        7. Die Grundreinigung hat in regelmäßigen Abständen zu erfolgen.<br/>
                        8. Der Verlader ist für die Desinfektion verantwortlich. Sie wird bei Bedarf vorgenommen. In der
                        Regel ist sie bei Transportfahrzeugen für unverpackte Ware – insbesondere Fleisch oder Fisch –
                        erforderlich.<br/>
                        9. Die durchgeführte Desinfektion muss dokumentiert werden.<br/>
                    </p>
                </Segment>
            </Tab.Pane>
        )
    },
    {
        menuItem: 'Obst gekühlt',
        render: () => (
            <Tab.Pane>
                <Segment style={{height: "77vh", overflow: "scroll"}}>
                    <Header as='h3'>
                        Obst gekühlt
                    </Header>
                    <p>
                        <strong>Minimaltemperatur</strong>: 5 °C
                    </p>
                    <p>
                        <strong>Maximaltemperatur</strong>: 10 °C
                    </p>
                    <p><br/>
                        Folgende Bedingungen müssen bei Vorrichtungen und Behältern zur Lagerung und Beförderung von Lebensmitteln eingehalten werden:<br/><br/>

                        1. Sie müssen für diesen Zweck geeignet sein.<br/>
                        2. Sie müssen sauber und instand gehalten werden.<br/>
                        3. Die Vorschriften zur Kennzeichnung nach der Bedarfsgegenständeverordnung sind zu beachten (z.B. Aufschrift „Nur für Lebensmittel“ bei Behältnissen für lose Lebensmittel)
                        4. Eine nachteilige Beeinflussung der Lebensmittel ist auszuschließen.<br/>
                        5. Bei zeitgleicher Beförderung anderer Waren neben Lebensmitteln oder verschiedener Lebensmittel müssen die verschiedenen Ladungsbestandteile streng voneinander getrennt werden.<br/>
                        6. Behälter für die alternative Beförderung von verschiedenen Lebensmitteln oder anderer Waren müssen zwischen den einzelnen Ladungsvorgängen erforderlichenfalls gereinigt und desinfiziert werden.<br/>
                        7. Eine nachteilige Beeinflussung ist nach der LMHV jede ekelerregende oder sonstige Beeinträchtigung der einwandfreien Beschaffenheit von Lebensmitteln wie Mikroorganismen, Verunreinigungen, Witterungseinflüsse, Gerüche, Temperaturen, Gas, Dämpfe, Rauch, Aerosole, tierische Schädlinge, menschliche und tierische Ausscheidungen sowie Abfall, Abwässer, Reinigungs-, Desinfektions-, Pflanzenschutz und Schädlingsbekämpfungsmittel.<br/>
                        8. Für die Lagerung und den Transport sind – ebenso wie für die Herstellung und den Vertrieb von Lebensmitteln – geeignete HACCP-Konzepte zu erstellen.<br/>
                        9. Eigenkontrollen sind unerlässlich.<br/><br/><br/>


                        Das Beförderungsmittel muss sauber sein. Dazu gelten folgende Vorschriften:<br/><br/>

                        1. Reinigung und Desinfektion des Beförderungsmittels gelten als transportvorbereitende
                        Maßnahmen.<br/>
                        2. Der Laderaum des Beförderungsmittels muss so sauber sein, dass die darin beförderten
                        Lebensmittel hygienisch nicht negativ beeinflusst werden. Es handelt sich um eine Maßnahme der
                        Lebensmittel-Hygiene.<br/>
                        3. Kontrolle und Pflege des Laderaums sind laufend durchzuführen und zu dokumentieren.<br/>
                        4. Die Art, Reihenfolge und Häufigkeit der erforderlichen Reinigungs- und Desinfektionsmaßnahmen
                        ist von der Art des Transportgutes abhängig.<br/>
                        5. Eine Unterhaltsreinigung, eine Grundreinigung und eine Desinfektion sind zu unterscheiden.<br/>
                        6. Für Kühlfahrzeuge und Tiefkühlfahrzeuge, die verpackte Ware befördern, ist die
                        Unterhaltsreinigung in der Regel ausreichend. Die Reinigung ist mit Datum und Unterschrift zu
                        dokumentieren.<br/>
                        7. Die Grundreinigung hat in regelmäßigen Abständen zu erfolgen.<br/>
                        8. Der Verlader ist für die Desinfektion verantwortlich. Sie wird bei Bedarf vorgenommen. In der
                        Regel ist sie bei Transportfahrzeugen für unverpackte Ware – insbesondere Fleisch oder Fisch –
                        erforderlich.<br/>
                        9. Die durchgeführte Desinfektion muss dokumentiert werden.<br/>
                    </p>
                </Segment>
            </Tab.Pane>
        )
    },
    {
        menuItem: 'Gefrorenes',
        render: () => (
            <Tab.Pane>
                <Segment style={{height: "77vh", overflow: "scroll"}}>
                    <Header as='h3'>
                        Gefrorenes
                    </Header>
                    <p>
                        <strong>Minimaltemperatur</strong>: - 30 °C
                    </p>
                    <p>
                        <strong>Maximaltemperatur</strong>: - 23 °C
                    </p>
                    <p><br/>
                        Nach der Verordnung über tiefgefrorene Lebensmittel (TLMV) gelten für den Transport
                        tiefgefrorener Lebensmittel folgende Regeln:<br/><br/>

                        1. Alle Beförderungsmittel mit einem Fassungsvermögen von mehr als zwei m³ (Lastkraftwagen,
                        Anhänger, Sattelanhänger, Container) müssen während des Betriebes mit geeigneten aufzeichnenden
                        Lufttemperaturmessgeräten ausgestattet sein<br/>
                        2. Alle Einlagerungs- und Lagereinrichtungen für tiefgefrorene Lebensmittel müssen während des
                        Betriebes mit geeigneten aufzeichnenden Lufttemperaturmessgeräten ausgestattet sein<br/>
                        3. Es dürfen nur zugelassene oder einem zugelassenen Muster entsprechende
                        Lufttemperaturmessgeräte verwendet werden.<br/>
                        4. Verantwortlich dafür ist der für die Beförderung Verantwortliche. Er muss sicherstellen, dass
                        während des Betriebs die Lufttemperatur mit den Lufttemperaturmessgeräten so häufig und in
                        regelmäßigen Zeitabständen gemessen und aufgezeichnet wird, dass das Temperaturgeschehen
                        nachvollziehbar ist. Die Aufbewahrungsfrist beträgt mindestens ein Jahr.<br/>
                        5. Örtliche Vertriebe sind von der Pflicht zur Lufttemperaturmessung mit einem aufzeichnenden
                        Gerät ausgenommen.<br/><br/><br/>


                        Folgende Bedingungen müssen bei Vorrichtungen und Behältern zur Lagerung und Beförderung von Lebensmitteln eingehalten werden:<br/><br/>

                        1. Sie müssen für diesen Zweck geeignet sein.<br/>
                        2. Sie müssen sauber und instand gehalten werden.<br/>
                        3. Die Vorschriften zur Kennzeichnung nach der Bedarfsgegenständeverordnung sind zu beachten (z.B. Aufschrift „Nur für Lebensmittel“ bei Behältnissen für lose Lebensmittel)
                        4. Eine nachteilige Beeinflussung der Lebensmittel ist auszuschließen.<br/>
                        5. Bei zeitgleicher Beförderung anderer Waren neben Lebensmitteln oder verschiedener Lebensmittel müssen die verschiedenen Ladungsbestandteile streng voneinander getrennt werden.<br/>
                        6. Behälter für die alternative Beförderung von verschiedenen Lebensmitteln oder anderer Waren müssen zwischen den einzelnen Ladungsvorgängen erforderlichenfalls gereinigt und desinfiziert werden.<br/>
                        7. Eine nachteilige Beeinflussung ist nach der LMHV jede ekelerregende oder sonstige Beeinträchtigung der einwandfreien Beschaffenheit von Lebensmitteln wie Mikroorganismen, Verunreinigungen, Witterungseinflüsse, Gerüche, Temperaturen, Gas, Dämpfe, Rauch, Aerosole, tierische Schädlinge, menschliche und tierische Ausscheidungen sowie Abfall, Abwässer, Reinigungs-, Desinfektions-, Pflanzenschutz und Schädlingsbekämpfungsmittel.<br/>
                        8. Für die Lagerung und den Transport sind – ebenso wie für die Herstellung und den Vertrieb von Lebensmitteln – geeignete HACCP-Konzepte zu erstellen.<br/>
                        9. Eigenkontrollen sind unerlässlich.<br/><br/><br/>


                        Das Beförderungsmittel muss sauber sein. Dazu gelten folgende Vorschriften:<br/><br/>

                        1. Reinigung und Desinfektion des Beförderungsmittels gelten als transportvorbereitende
                        Maßnahmen.<br/>
                        2. Der Laderaum des Beförderungsmittels muss so sauber sein, dass die darin beförderten
                        Lebensmittel hygienisch nicht negativ beeinflusst werden. Es handelt sich um eine Maßnahme der
                        Lebensmittel-Hygiene.<br/>
                        3. Kontrolle und Pflege des Laderaums sind laufend durchzuführen und zu dokumentieren.<br/>
                        4. Die Art, Reihenfolge und Häufigkeit der erforderlichen Reinigungs- und Desinfektionsmaßnahmen
                        ist von der Art des Transportgutes abhängig.<br/>
                        5. Eine Unterhaltsreinigung, eine Grundreinigung und eine Desinfektion sind zu unterscheiden.<br/>
                        6. Für Kühlfahrzeuge und Tiefkühlfahrzeuge, die verpackte Ware befördern, ist die
                        Unterhaltsreinigung in der Regel ausreichend. Die Reinigung ist mit Datum und Unterschrift zu
                        dokumentieren.<br/>
                        7. Die Grundreinigung hat in regelmäßigen Abständen zu erfolgen.<br/>
                        8. Der Verlader ist für die Desinfektion verantwortlich. Sie wird bei Bedarf vorgenommen. In der
                        Regel ist sie bei Transportfahrzeugen für unverpackte Ware – insbesondere Fleisch oder Fisch –
                        erforderlich.<br/>
                        9. Die durchgeführte Desinfektion muss dokumentiert werden.<br/>
                    </p>
                </Segment>
            </Tab.Pane>
        )
    }
]