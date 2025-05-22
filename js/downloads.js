async function add_1() {
  const response = await fetch('https://letscountapi.com/easy-bac-fr/downloads/increment', {
    method: 'POST',
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

document.querySelectorAll('.fiche').forEach(bouton => {
    bouton.addEventListener('click', e => {
        add_1();
    });
});

async function add_1_view() {
  const response = await fetch('https://letscountapi.com/easy-bac-fr/views/increment', {
    method: 'POST',
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

window.addEventListener('load', function() {
    if (!sessionStorage.getItem('requeteEnvoyee')) {
    add_1_view();
    sessionStorage.setItem('requeteEnvoyee', 'true');
    }
});

