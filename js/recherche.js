const locFichiers = {
    "Maths - Continuité":"maths/continuite.pdf",
    "Maths - Équations différentielles":"maths/equadiff.pdf",
    "Maths - Logarithme népérien":"maths/ln.pdf",
    "Maths - Dérivation et Convexité":"maths/derivation_convexite.pdf",
    "Maths - Géométrie dans l'espace":"maths/geo_espace.pdf",
    "Maths - Intégration":"maths/integration.pdf",
    "Maths - Limites de fonctions":"maths/limites_de_fonctions.pdf",
    "Maths - Limites de suites":"maths/limites_de_suites.pdf",
    "Maths - Loi des grands nombres":"maths/loi_gds_nombres.pdf",
    "Maths - Probabilités":"maths/probas.pdf",
    "Maths - Produit scalaire dans l'espace":"maths/produit_scalaire_espace.pdf",
    "Maths - Suites et récurrence":"maths/suites-recurrences.pdf",
    "Maths - Fonctions circulaires":"maths/cos_sin.pdf",
    "NSI - Arbres":"nsi/arbres.pdf",
    "NSI - Architecture matérielle et système d'exploitation":"nsi/archi_sys.pdf",
    "NSI - Algorithme de Boyer-Moore":"nsi/boyermoore.pdf",
    "NSI - Programmation orientée objet":"nsi/poo.pdf",
    "NSI - Récursivité":"nsi/recursivite.pdf",
    "NSI - Sécurisation des communications":"nsi/secu_coms.pdf",
    "NSI - SGBD et SQL":"nsi/sgbd_sql.pdf",
    "HLP - Les expressions de la sensibilité":"hlp/expressions_sensi.pdf",
    "HLP - Les métamorphoses du moi":"hlp/meta_moi.pdf",
    "Philosophie - Le bonheur":"philosophie/bonheur.pdf",
    "Philosophie - L'inconscient":"philosophie/inconscience.pdf",
    "Philosophie - Le temps":"philosophie/temps.pdf",
    "Philosophie - La conscience":"philosophie/conscience.pdf",
    "Philosophie - Le travail et la technique":"philosophie/travail_tech.pdf",
    "Philosophie - La justice":"philosophie/justice.pdf",
    "Philosophie - Le devoir":"philosophie/devoir.pdf",
    "Philosophie - La liberté":"philosophie/liberte.pdf",
    "Philosophie - L'état":"philosophie/etat.pdf",
    "Philosophie - Le langage":"philosophie/langage.pdf",
    "Philosophie - La nature":"philosophie/nature.pdf",
    "Philosophie - La raison":"philosophie/raison.pdf",
    "Philosophie - La religion":"philosophie/religion.pdf",
    "Philosophie - La vérité":"philosophie/verite.pdf",
    "Philosophie - La science":"philosophie/science.pdf",
    "Philosophie - L'art'":"philosophie/art.pdf",
    "Physique-Chimie - La cinématique":"physique-chimie/cinematique.pdf",
    "Physique-Chimie - Le condensateur":"physique-chimie/condensateur.pdf",
    "Physique-Chimie - La Photoélectrique":"physique-chimie/photoelectrique.pdf",
    "Physique-Chimie - Les transformations acide-base":"physique-chimie/acide_base-2-3.pdf",
    "Physique-Chimie - Analyser un système chimique par des méthodes physico-chimiques":"physique-chimie/analyse_phch.pdf",
    "Physique-Chimie - Cinétique chimique":"physique-chimie/cinetique_chim.pdf",
    "Physique-Chimie - Le nucléaire":"physique-chimie/nucleaire.pdf",
    "Physique-Chimie - L'évolution spontanée d'un système chimique":"physique-chimie/evo_spontanee.pdf",
    "Physique-Chimie - Force des acides et des bases":"physique-chimie/force_acide_base.pdf",
    "Physique-Chimie - Forcer le sens d'évolution d'un système":"physique-chimie/transfo_forcée.pdf",
    "Physique-Chimie - La synthèse":"physique-chimie/synthese.pdf",
    "Physique-Chimie - La nomenclature":"physique-chimie/nomenclature.pdf",
    "Physique-Chimie - Mécanique 1":"physique-chimie/meca2.pdf",
    "Physique-Chimie - Mécanique 2 : le mouvement des satellites":"physique-chimie/meca3.pdf",
    "Physique-Chimie - La mécanique des fluides":"physique-chimie/meca_fluide.pdf",
    "Physique-Chimie - La thermodynamique":"physique-chimie/thermo.pdf",
    "Physique-Chimie - Les propriétés des ondes":"physique-chimie/prop_onde.pdf",
    "Physique-Chimie - La lunette astronomique":"physique-chimie/lunettte.pdf",
    "SI - La cinématique":"si/cinematique.pdf",
    "SI - Le condensateur":"si/condensateur.pdf",
    "SI - La Photoélectrique":"si/photoelectrique.pdf",
    "HGGSP - Thème 1 : De nouveaux espaces de conquête":"hggsp/theme_1",
    "HGGSP - Thème 2 : Faire la guerre, faire la paix : formes de conflits et modes de résolution":"hggsp/theme_2",
    "HGGSP - Thème 3 : Histoire et mémoires":"hggsp/theme_3",
    "HGGSP - Thème 4 : Identifier, protéger et valoriser le patrimoine; enjeux géopolitiques":"hggsp/theme_4",
    "HGGSP - Thème 5 : L'environnement, entre exploitation et protection : un enjeu planétaire":"hggsp/theme_5",
    "HGGSP - Thème 6 : L'enjeu de la connaissance":"hggsp/theme_6",
    "SES - Quels sont les sources et les défis de la croissance économique ?":"ses/defis_croissance_eco.pdf",
    "SES - Quels sont les fondements du commerce international et de l'internationalisation de la production ?":"ses/fondements_commerce.pdf",
    "SES - Comment lutter contre le chômage ?":"ses/chomage.pdf",
    "SES - Quelles politiques économiques dans le cadre européen ?":"ses/politiques_eco.pdf",
    "SES - Quelles mutations du travail et de l'emploi ?":"ses/mutations_travail.pdf",
    "SES - Comment expliquer les crises financières et réguler le système financier ?":"ses/crises_financieres.pdf",
    "SES - Quelle est l'action de l'École sur les destins individuels et sur l'évolution de la société ?":"ses/action_ecole.pdf",
    "SES - Comment expliquer l'engagement politique dans les sociétés démocratiques ?":"ses/egagm_politiques.pdf",
    "SES - Quels sont les caractéristiques contemporaines et les facteurs de la mobilité sociale ?":"ses/carct_mobilites.pdf",
    "SES - Comment est structurée la société française actuelle ?":"ses/structure_soc.pdf",
};

const fichiers = Object.keys(locFichiers);

// Références DOM
const input = document.getElementById("search-input");
const suggestionsBox = document.getElementById("suggestions");

// Écoute de la saisie
input.addEventListener("input", () => {
    const query = input.value.toLowerCase();
    suggestionsBox.innerHTML = "";

    if (query.length === 0) return;

    const suggestions = fichiers.filter(f => f.toLowerCase().includes(query));

    suggestions.forEach(file => {
        const div = document.createElement("div");
        div.textContent = file;
        div.addEventListener("click", () => {
            const lien = document.createElement("a");
            lien.href = `docs/${locFichiers[file]}`;
            lien.target = "_blank";
            lien.rel = "noopener noreferrer"; // bonne pratique sécurité
            lien.click();
        });
        
        suggestionsBox.appendChild(div);
    });
});

// Fermer les suggestions si on clique en dehors de l'input ou des suggestions
document.addEventListener("click", function (event) {
    const isClickInside = input.contains(event.target) || suggestionsBox.contains(event.target);
    if (!isClickInside) {
        suggestionsBox.innerHTML = "";
    }
});
