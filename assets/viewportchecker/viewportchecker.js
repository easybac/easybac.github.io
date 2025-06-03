/*window.addEventListener("load", function() {
    var f = function(d, c, b, e) {
            function a() {
                var a = (new Date).getTime();
                a = Math.round(b - Math.max((f - a) / e, 0) * h);
                d.innerHTML = a;
                a == b && clearInterval(g)
            }
            var h = b - c;
            c = Math.abs(Math.floor(e / h));
            c = Math.max(c, 50);
            var f = (new Date).getTime() + e;
            var g = setInterval(a, c);
            a()
        },
        g = new IntersectionObserver(function(d, c) {
            d.forEach(function(b) {
                0 < b.intersectionRatio && b.target.querySelectorAll("#" + b.target.id + " .count").forEach(function(b) {
                    var a = "50";
                    //b.innerText.trim();
                    a = Math.floor(a);//a = 2 < a.length - (a.indexOf(".") + 1) ? a.replace(/\./ig, "") : Math.floor(a);
                    f(b, 0, a, 3E3)
                })
            })
        }, {
            rootMargin: "0px",
            threshold: .1
        });
    document.querySelectorAll(".counters").forEach(function(d) {
        g.observe(d)
    })
});*/



function start_counter(dico) {
    var f = function(d, c, b, e) {
            function a() {
                var a = (new Date).getTime();
                a = Math.round(b - Math.max((f - a) / e, 0) * h);
                d.innerHTML = a;
                a == b && clearInterval(g)
            }
            var h = b - c;
            c = Math.abs(Math.floor(e / h));
            c = Math.max(c, 5);
            var f = (new Date).getTime() + e;
            var g = setInterval(a, c);
            a()
        },
        g = new IntersectionObserver(function(d, c) {
            d.forEach(function(b) {
                0 < b.intersectionRatio && b.target.querySelectorAll(".count").forEach(function(b) {
                    var a = dico[b.id];
                    //b.innerText.trim();
                    a = Math.floor(a);//a = 2 < a.length - (a.indexOf(".") + 1) ? a.replace(/\./ig, "") : Math.floor(a);
                    f(b, 0, a, 1000)
                })
            })
        }, {
            rootMargin: "0px",
            threshold: .1
        });
    document.querySelectorAll(".counters").forEach(function(d) {
        g.observe(d)
    })
};







// Simule deux fonctions qui récupèrent des données
async function get_views() {
  const response = await fetch('https://letscountapi.com/easy-bac-fr/views', {
    method: 'GET',
    headers: {
        "Content-Type": "application/json",
        "X-API-Key": "ujjr-xtNJWfxgzDC6gEMrOAzac0ZZct9CgpqDCxwLcM"
    }
  });

  if (!response.ok) {
    console.log(response.status);
  }

  const data = await response.json();
  return data["current_value"];
}


async function get_downloads() {
  const response = await fetch('https://letscountapi.com/easy-bac-fr/downloads', {
    method: 'GET',
    headers: {
        "Content-Type": "application/json",
        "X-API-Key": "ujjr-xtNJWfxgzDC6gEMrOAzac0ZZct9CgpqDCxwLcM"
    }
  });

  if (!response.ok) {
    console.log(response.status);
  }

  const data = await response.json();
  return data["current_value"];
}

// Fonction qui remplit le dictionnaire
async function buildDictionnaire() {
  const [valA, valB] = await Promise.all([get_views(), get_downloads()]);

  const dictionnaire = {
    "nb_fiches": 120,
    "nb_vues": valA,
    "nb_downloads":valB
  };

  return dictionnaire;
}

// Fonction finale à appeler quand tout est prêt
function traitementFinal(dictionnaire) {
  start_counter(dictionnaire);
}

// Orchestration
async function main() {
  const dictionnaire = await buildDictionnaire();
  traitementFinal(dictionnaire);
}

window.addEventListener("load",function() {
    main();
});