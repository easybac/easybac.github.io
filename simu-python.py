"""
Oral : de 0 à 20
objectif : mentions ou note (mention ramenée à une note)

mentions :
10/12- : admis "A"
12/14- : bien   "B"
14/16- : assez bien "AB"
16/18- : très bien  "TB"
18/20 : très bien félicitations "TBF"

Il vous faudra donc obtenir entre 1200 et 1399 points pour la mention "Assez Bien", entre 1400 et 1599 points pour la mention "Bien", entre 1600 et 1799 points pour la mention "Très Bien" et au-delà de 1800 points pour les "Félicitations du jury".

"""

spes = {"hggsp":9,"hlp":0,"ses":12,"maths":20,"llcer":5,"nsi":16,"phch":20,"svt":18,"si":19,"art":5,"eps":10,"llca":2,"bioeco":16}
matieres_cc = ["es1","es2","hg1","hg2","lva1","lva2","lvb1","lvb2","spe1","epst1","epst2","epst3","emc1","emc2","froral","frecrit"]

sci=float(input("Niveau sci /20 : "))
litt=float(input("Niveau litt /20 : "))
#litt=20-sci
oral=float(input("Aisance orale de 0 à 20 : "))
spe1=input("spé 1 : ")
spe2=input("spé 2 : ")
mention=input("mention ou note visée: ")
ment_note={"A":10,"B":12,"AB":14,"TB":16,"TBF":18}
try:
    obj=float(mention)
except ValueError:
    obj=ment_note[mention]
obj*=100

notes_cc={i:10 for i in matieres_cc}
notes_cc={"es1":16.1,"es2":17.5,"hg1":13.9,"hg2":15,"lva1":14.5,"lva2":13,"lvb1":17,"lvb2":17,"spe1":15,"epst1":16,"epst2":16,"epst3":15,"emc1":14.7,"emc2":16.5,"froral":13,"frecrit":12}
notes_cc = {
    "es1":18,"es2":17.5,"hg1":16.2,"hg2":15.8,
    "lva1":17,"lva2":16.5,"lvb1":18,"lvb2":17.9,
    "spe1":17.5,"epst1":18,"epst2":17,"epst3":17,
    "emc1":15,"emc2":15.2,"froral":16,"frecrit":15.5
}

coeffs_cc={"es1":3,"es2":3,"hg1":3,"hg2":3,"lva1":3,"lva2":3,"lvb1":3,"lvb2":3,"spe1":8,"epst1":2,"epst2":2,"epst3":2,"emc1":1,"emc2":1,"froral":5,"frecrit":5}

for m in notes_cc:
    n=input(m+" : ")
    if n=="pass":
        break
    n=float(n)
    notes_cc[m]=n

points=0
for m in notes_cc:
    points+=notes_cc[m]*coeffs_cc[m]
diff=obj-points

if diff>1000:
    print("objectif impossible")
else:
    print(diff,"points requis")

from math import fabs

coeffs_epr={"spe1":16,"spe2":16,"oral":10,"philo":8}

poids={"spe1":((20-fabs(spes[spe1]-sci))/20)*320,"spe2":((20-fabs(spes[spe2]-sci))/20)*320,"oral":(oral/20)*200,"philo":(litt/20)*160}

somme_poids = sum(poids.values())

notes_a_avoir={i: (( diff * (poids[i]/somme_poids) ) *20) / ( (coeffs_epr[i] * 1000) /50 ) for i in poids.keys()}

print(notes_a_avoir)

def redistribuer_notes(notes_dict, coeffs):
    surplus_points = 0.0

    # Étape 1 : Identifier les surplus
    for mat in notes_dict:
        if notes_dict[mat] > 20:
            surplus = (notes_dict[mat] - 20) * coeffs[mat]
            surplus_points += surplus
            notes_dict[mat] = 20

    # Étape 2 : Identifier les matières pouvant recevoir du surplus
    while surplus_points > 0:
        receveurs = {k: poids[k] * coeffs[k] for k in notes_dict if notes_dict[k] < 20}
        if not receveurs:
            break

        somme_receveurs = sum(receveurs.values())

        for mat in receveurs:
            part = receveurs[mat] / somme_receveurs
            gain = min((surplus_points * part) / coeffs[mat], 20 - notes_dict[mat])
            surplus_points -= gain * coeffs[mat]
            notes_dict[mat] += gain

    return notes_dict

notes_finales=redistribuer_notes(notes_a_avoir,coeffs_epr)

print(notes_finales)
print(notes_a_avoir)


