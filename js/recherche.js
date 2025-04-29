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
    "SI - La Photoélectrique":"si/photoelectrique.pdf"
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
