import france from '../../data/metropole-et-outre-mer.geojson'
import regions from '../../data/nouvelles-regions.geojson'
import anciennes_regions from '../../data/anciennes-regions.geojson'
import departements from '../../data/departements.geojson'

/***
 * Nouvelles régions
 */

import auvergne_rhone_alpes from '../../data/nouvelles-regions/auvergne-rhone-alpes/region-auvergne-rhone-alpes.geojson'
import departements_auvergne_rhone_alpes from '../../data/nouvelles-regions/auvergne-rhone-alpes/departements-auvergne-rhone-alpes.geojson'
import arrondissements_auvergne_rhone_alpes from '../../data/nouvelles-regions/auvergne-rhone-alpes/arrondissements-auvergne-rhone-alpes.geojson'
import cantons_auvergne_rhone_alpes from '../../data/nouvelles-regions/auvergne-rhone-alpes/cantons-auvergne-rhone-alpes.geojson'
import communes_auvergne_rhone_alpes from '../../data/nouvelles-regions/auvergne-rhone-alpes/communes-auvergne-rhone-alpes.geojson'

import bourgogne_franche_comte from '../../data/nouvelles-regions/bourgogne-franche-comte/region-bourgogne-franche-comte.geojson'
import departements_bourgogne_franche_comte from '../../data/nouvelles-regions/bourgogne-franche-comte/departements-bourgogne-franche-comte.geojson'
import arrondissements_bourgogne_franche_comte from '../../data/nouvelles-regions/bourgogne-franche-comte/arrondissements-bourgogne-franche-comte.geojson'
import cantons_bourgogne_franche_comte from '../../data/nouvelles-regions/bourgogne-franche-comte/cantons-bourgogne-franche-comte.geojson'
import communes_bourgogne_franche_comte from '../../data/nouvelles-regions/bourgogne-franche-comte/communes-bourgogne-franche-comte.geojson'

import bretagne from '../../data/nouvelles-regions/bretagne/region-bretagne.geojson'
import departements_bretagne from '../../data/nouvelles-regions/bretagne/departements-bretagne.geojson'
import arrondissements_bretagne from '../../data/nouvelles-regions/bretagne/arrondissements-bretagne.geojson'
import cantons_bretagne from '../../data/nouvelles-regions/bretagne/cantons-bretagne.geojson'
import communes_bretagne from '../../data/nouvelles-regions/bretagne/communes-bretagne.geojson'

import centre_val_de_loire from '../../data/nouvelles-regions/centre-val-de-loire/region-centre-val-de-loire.geojson'
import departements_centre_val_de_loire from '../../data/nouvelles-regions/centre-val-de-loire/departements-centre-val-de-loire.geojson'
import arrondissements_centre_val_de_loire from '../../data/nouvelles-regions/centre-val-de-loire/arrondissements-centre-val-de-loire.geojson'
import cantons_centre_val_de_loire from '../../data/nouvelles-regions/centre-val-de-loire/cantons-centre-val-de-loire.geojson'
import communes_centre_val_de_loire from '../../data/nouvelles-regions/centre-val-de-loire/communes-centre-val-de-loire.geojson'

import corse from '../../data/nouvelles-regions/corse/region-corse.geojson'
import departements_corse from '../../data/nouvelles-regions/corse/departements-corse.geojson'
import arrondissements_corse from '../../data/nouvelles-regions/corse/arrondissements-corse.geojson'
import cantons_corse from '../../data/nouvelles-regions/corse/cantons-corse.geojson'
import communes_corse from '../../data/nouvelles-regions/corse/communes-corse.geojson'

import grand_est from '../../data/nouvelles-regions/grand-est/region-grand-est.geojson'
import departements_grand_est from '../../data/nouvelles-regions/grand-est/departements-grand-est.geojson'
import arrondissements_grand_est from '../../data/nouvelles-regions/grand-est/arrondissements-grand-est.geojson'
import cantons_grand_est from '../../data/nouvelles-regions/grand-est/cantons-grand-est.geojson'
import communes_grand_est from '../../data/nouvelles-regions/grand-est/communes-grand-est.geojson'

import haut_de_france from '../../data/nouvelles-regions/hauts-de-france/region-hauts-de-france.geojson'
import departements_haut_de_france from '../../data/nouvelles-regions/hauts-de-france/departements-hauts-de-france.geojson'
import arrondissements_haut_de_france from '../../data/nouvelles-regions/hauts-de-france/arrondissements-hauts-de-france.geojson'
import cantons_haut_de_france from '../../data/nouvelles-regions/hauts-de-france/cantons-hauts-de-france.geojson'
import communes_haut_de_france from '../../data/nouvelles-regions/hauts-de-france/communes-hauts-de-france.geojson'

import ile_de_france from '../../data/nouvelles-regions/ile-de-france/region-ile-de-france.geojson'
import departements_ile_de_france from '../../data/nouvelles-regions/ile-de-france/departements-ile-de-france.geojson'
import arrondissements_ile_de_france from '../../data/nouvelles-regions/ile-de-france/arrondissements-ile-de-france.geojson'
import cantons_ile_de_france from '../../data/nouvelles-regions/ile-de-france/cantons-ile-de-france.geojson'
import communes_ile_de_france from '../../data/nouvelles-regions/ile-de-france/communes-ile-de-france.geojson'

import normandie from '../../data/nouvelles-regions/normandie/region-normandie.geojson'
import departements_normandie from '../../data/nouvelles-regions/normandie/departements-normandie.geojson'
import arrondissements_normandie from '../../data/nouvelles-regions/normandie/arrondissements-normandie.geojson'
import cantons_normandie from '../../data/nouvelles-regions/normandie/cantons-normandie.geojson'
import communes_normandie from '../../data/nouvelles-regions/normandie/communes-normandie.geojson'

import nouvelle_aquitaine from '../../data/nouvelles-regions/nouvelle-aquitaine/region-nouvelle-aquitaine.geojson'
import departements_nouvelle_aquitaine from '../../data/nouvelles-regions/nouvelle-aquitaine/departements-nouvelle-aquitaine.geojson'
import arrondissements_nouvelle_aquitaine from '../../data/nouvelles-regions/nouvelle-aquitaine/arrondissements-nouvelle-aquitaine.geojson'
import cantons_nouvelle_aquitaine from '../../data/nouvelles-regions/nouvelle-aquitaine/cantons-nouvelle-aquitaine.geojson'
import communes_nouvelle_aquitaine from '../../data/nouvelles-regions/nouvelle-aquitaine/communes-nouvelle-aquitaine.geojson'

import occitanie from '../../data/nouvelles-regions/occitanie/region-occitanie.geojson'
import departements_occitanie from '../../data/nouvelles-regions/occitanie/departements-occitanie.geojson'
import arrondissements_occitanie from '../../data/nouvelles-regions/occitanie/arrondissements-occitanie.geojson'
import cantons_occitanie from '../../data/nouvelles-regions/occitanie/cantons-occitanie.geojson'
import communes_occitanie from '../../data/nouvelles-regions/occitanie/communes-occitanie.geojson'

import pays_de_la_loire from '../../data/nouvelles-regions/pays-de-la-loire/region-pays-de-la-loire.geojson'
import departements_pays_de_la_loire from '../../data/nouvelles-regions/pays-de-la-loire/departements-pays-de-la-loire.geojson'
import arrondissements_pays_de_la_loire from '../../data/nouvelles-regions/pays-de-la-loire/arrondissements-pays-de-la-loire.geojson'
import cantons_pays_de_la_loire from '../../data/nouvelles-regions/pays-de-la-loire/cantons-pays-de-la-loire.geojson'
import communes_pays_de_la_loire from '../../data/nouvelles-regions/pays-de-la-loire/communes-pays-de-la-loire.geojson'

import provence_alpes_cote_d_azure from '../../data/nouvelles-regions/provence-alpes-cote-d-azur/region-provence-alpes-cote-d-azur.geojson'
import departements_provence_alpes_cote_d_azure from '../../data/nouvelles-regions/provence-alpes-cote-d-azur/departements-provence-alpes-cote-d-azur.geojson'
import arrondissements_provence_alpes_cote_d_azure from '../../data/nouvelles-regions/provence-alpes-cote-d-azur/arrondissements-provence-alpes-cote-d-azur.geojson'
import cantons_provence_alpes_cote_d_azure from '../../data/nouvelles-regions/provence-alpes-cote-d-azur/cantons-provence-alpes-cote-d-azur.geojson'
import communes_provence_alpes_cote_d_azure from '../../data/nouvelles-regions/provence-alpes-cote-d-azur/communes-provence-alpes-cote-d-azur.geojson'

import guyane from '../../data/nouvelles-regions/guyane/region-guyane.geojson'
import departements_guyane from '../../data/nouvelles-regions/guyane/departements-guyane.geojson'
import arrondissements_guyane from '../../data/nouvelles-regions/guyane/arrondissements-guyane.geojson'
import cantons_guyane from '../../data/nouvelles-regions/guyane/cantons-guyane.geojson'
import communes_guyane from '../../data/nouvelles-regions/guyane/communes-guyane.geojson'

import mayotte from '../../data/nouvelles-regions/mayotte/region-mayotte.geojson'
import departements_mayotte from '../../data/nouvelles-regions/mayotte/departements-mayotte.geojson'
import arrondissements_mayotte from '../../data/nouvelles-regions/mayotte/arrondissements-mayotte.geojson'
import cantons_mayotte from '../../data/nouvelles-regions/mayotte/cantons-mayotte.geojson'
import communes_mayotte from '../../data/nouvelles-regions/mayotte/communes-mayotte.geojson'

import la_reunion from '../../data/nouvelles-regions/la-reunion/region-la-reunion.geojson'
import departements_la_reunion from '../../data/nouvelles-regions/la-reunion/departements-la-reunion.geojson'
import arrondissements_la_reunion from '../../data/nouvelles-regions/la-reunion/arrondissements-la-reunion.geojson'
import cantons_la_reunion from '../../data/nouvelles-regions/la-reunion/cantons-la-reunion.geojson'
import communes_la_reunion from '../../data/nouvelles-regions/la-reunion/communes-la-reunion.geojson'

import martinique from '../../data/nouvelles-regions/martinique/region-martinique.geojson'
import departements_martinique from '../../data/nouvelles-regions/martinique/departements-martinique.geojson'
import arrondissements_martinique from '../../data/nouvelles-regions/martinique/arrondissements-martinique.geojson'
import cantons_martinique from '../../data/nouvelles-regions/martinique/cantons-martinique.geojson'
import communes_martinique from '../../data/nouvelles-regions/martinique/communes-martinique.geojson'

import guadeloupe from '../../data/nouvelles-regions/guadeloupe/region-guadeloupe.geojson'
import departements_guadeloupe from '../../data/nouvelles-regions/guadeloupe/departements-guadeloupe.geojson'
import arrondissements_guadeloupe from '../../data/nouvelles-regions/guadeloupe/arrondissements-guadeloupe.geojson'
import cantons_guadeloupe from '../../data/nouvelles-regions/guadeloupe/cantons-guadeloupe.geojson'
import communes_guadeloupe from '../../data/nouvelles-regions/guadeloupe/communes-guadeloupe.geojson'

/**
 * Anciennes régions
 */

import alsace from '../../data/anciennes-regions/alsace/cantons-alsace.geojson'
import departements_alsace from '../../data/anciennes-regions/alsace/departements-alsace.geojson'
import arrondissements_alsace from '../../data/anciennes-regions/alsace/arrondissements-alsace.geojson'
import cantons_alsace from '../../data/anciennes-regions/alsace/cantons-alsace.geojson'
import communes_alsace from '../../data/anciennes-regions/alsace/communes-alsace.geojson'

import aquitaine from '../../data/anciennes-regions/aquitaine/cantons-aquitaine.geojson'
import departements_aquitaine from '../../data/anciennes-regions/aquitaine/departements-aquitaine.geojson'
import arrondissements_aquitaine from '../../data/anciennes-regions/aquitaine/arrondissements-aquitaine.geojson'
import cantons_aquitaine from '../../data/anciennes-regions/aquitaine/cantons-aquitaine.geojson'
import communes_aquitaine from '../../data/anciennes-regions/aquitaine/communes-aquitaine.geojson'

import auvergne from '../../data/anciennes-regions/auvergne/cantons-auvergne.geojson'
import departements_auvergne from '../../data/anciennes-regions/auvergne/departements-auvergne.geojson'
import arrondissements_auvergne from '../../data/anciennes-regions/auvergne/arrondissements-auvergne.geojson'
import cantons_auvergne from '../../data/anciennes-regions/auvergne/cantons-auvergne.geojson'
import communes_auvergne from '../../data/anciennes-regions/auvergne/communes-auvergne.geojson'

import basse_normandie from '../../data/anciennes-regions/basse-normandie/cantons-basse-normandie.geojson'
import departements_basse_normandie from '../../data/anciennes-regions/basse-normandie/departements-basse-normandie.geojson'
import arrondissements_basse_normandie from '../../data/anciennes-regions/basse-normandie/arrondissements-basse-normandie.geojson'
import cantons_basse_normandie from '../../data/anciennes-regions/basse-normandie/cantons-basse-normandie.geojson'
import communes_basse_normandie from '../../data/anciennes-regions/basse-normandie/communes-basse-normandie.geojson'

import bourgogne from '../../data/anciennes-regions/bourgogne/cantons-bourgogne.geojson'
import departements_bourgogne from '../../data/anciennes-regions/bourgogne/departements-bourgogne.geojson'
import arrondissements_bourgogne from '../../data/anciennes-regions/bourgogne/arrondissements-bourgogne.geojson'
import cantons_bourgogne from '../../data/anciennes-regions/bourgogne/cantons-bourgogne.geojson'
import communes_bourgogne from '../../data/anciennes-regions/bourgogne/communes-bourgogne.geojson'

import champagne_ardenne from '../../data/anciennes-regions/champagne-ardenne/cantons-champagne-ardenne.geojson'
import departements_champagne_ardenne from '../../data/anciennes-regions/champagne-ardenne/departements-champagne-ardenne.geojson'
import arrondissements_champagne_ardenne from '../../data/anciennes-regions/champagne-ardenne/arrondissements-champagne-ardenne.geojson'
import cantons_champagne_ardenne from '../../data/anciennes-regions/champagne-ardenne/cantons-champagne-ardenne.geojson'
import communes_champagne_ardenne from '../../data/anciennes-regions/champagne-ardenne/communes-champagne-ardenne.geojson'

import franche_comte from '../../data/anciennes-regions/franche-comte/cantons-franche-comte.geojson'
import departements_franche_comte from '../../data/anciennes-regions/franche-comte/departements-franche-comte.geojson'
import arrondissements_franche_comte from '../../data/anciennes-regions/franche-comte/arrondissements-franche-comte.geojson'
import cantons_franche_comte from '../../data/anciennes-regions/franche-comte/cantons-franche-comte.geojson'
import communes_franche_comte from '../../data/anciennes-regions/franche-comte/communes-franche-comte.geojson'

import haute_normandie from '../../data/anciennes-regions/haute-normandie/cantons-haute-normandie.geojson'
import departements_haute_normandie from '../../data/anciennes-regions/haute-normandie/departements-haute-normandie.geojson'
import arrondissements_haute_normandie from '../../data/anciennes-regions/haute-normandie/arrondissements-haute-normandie.geojson'
import cantons_haute_normandie from '../../data/anciennes-regions/haute-normandie/cantons-haute-normandie.geojson'
import communes_haute_normandie from '../../data/anciennes-regions/haute-normandie/communes-haute-normandie.geojson'

import languedoc_roussillon from '../../data/anciennes-regions/languedoc-roussillon/cantons-languedoc-roussillon.geojson'
import departements_languedoc_roussillon from '../../data/anciennes-regions/languedoc-roussillon/departements-languedoc-roussillon.geojson'
import arrondissements_languedoc_roussillon from '../../data/anciennes-regions/languedoc-roussillon/arrondissements-languedoc-roussillon.geojson'
import cantons_languedoc_roussillon from '../../data/anciennes-regions/languedoc-roussillon/cantons-languedoc-roussillon.geojson'
import communes_languedoc_roussillon from '../../data/anciennes-regions/languedoc-roussillon/communes-languedoc-roussillon.geojson'

import limousin from '../../data/anciennes-regions/limousin/cantons-limousin.geojson'
import departements_limousin from '../../data/anciennes-regions/limousin/departements-limousin.geojson'
import arrondissements_limousin from '../../data/anciennes-regions/limousin/arrondissements-limousin.geojson'
import cantons_limousin from '../../data/anciennes-regions/limousin/cantons-limousin.geojson'
import communes_limousin from '../../data/anciennes-regions/limousin/communes-limousin.geojson'

import lorraine from '../../data/anciennes-regions/lorraine/cantons-lorraine.geojson'
import departements_lorraine from '../../data/anciennes-regions/lorraine/departements-lorraine.geojson'
import arrondissements_lorraine from '../../data/anciennes-regions/lorraine/arrondissements-lorraine.geojson'
import cantons_lorraine from '../../data/anciennes-regions/lorraine/cantons-lorraine.geojson'
import communes_lorraine from '../../data/anciennes-regions/lorraine/communes-lorraine.geojson'

import midi_pyrenees from '../../data/anciennes-regions/midi-pyrenees/cantons-midi-pyrenees.geojson'
import departements_midi_pyrenees from '../../data/anciennes-regions/midi-pyrenees/departements-midi-pyrenees.geojson'
import arrondissements_midi_pyrenees from '../../data/anciennes-regions/midi-pyrenees/arrondissements-midi-pyrenees.geojson'
import cantons_midi_pyrenees from '../../data/anciennes-regions/midi-pyrenees/cantons-midi-pyrenees.geojson'
import communes_midi_pyrenees from '../../data/anciennes-regions/midi-pyrenees/communes-midi-pyrenees.geojson'

import nord_pas_de_calais from '../../data/anciennes-regions/nord-pas-de-calais/cantons-nord-pas-de-calais.geojson'
import departements_nord_pas_de_calais from '../../data/anciennes-regions/nord-pas-de-calais/departements-nord-pas-de-calais.geojson'
import arrondissements_nord_pas_de_calais from '../../data/anciennes-regions/nord-pas-de-calais/arrondissements-nord-pas-de-calais.geojson'
import cantons_nord_pas_de_calais from '../../data/anciennes-regions/nord-pas-de-calais/cantons-nord-pas-de-calais.geojson'
import communes_nord_pas_de_calais from '../../data/anciennes-regions/nord-pas-de-calais/communes-nord-pas-de-calais.geojson'

import picardie from '../../data/anciennes-regions/picardie/cantons-picardie.geojson'
import departements_picardie from '../../data/anciennes-regions/picardie/departements-picardie.geojson'
import arrondissements_picardie from '../../data/anciennes-regions/picardie/arrondissements-picardie.geojson'
import cantons_picardie from '../../data/anciennes-regions/picardie/cantons-picardie.geojson'
import communes_picardie from '../../data/anciennes-regions/picardie/communes-picardie.geojson'

import poitou_charentes from '../../data/anciennes-regions/poitou-charentes/cantons-poitou-charentes.geojson'
import departements_poitou_charentes from '../../data/anciennes-regions/poitou-charentes/departements-poitou-charentes.geojson'
import arrondissements_poitou_charentes from '../../data/anciennes-regions/poitou-charentes/arrondissements-poitou-charentes.geojson'
import cantons_poitou_charentes from '../../data/anciennes-regions/poitou-charentes/cantons-poitou-charentes.geojson'
import communes_poitou_charentes from '../../data/anciennes-regions/poitou-charentes/communes-poitou-charentes.geojson'

import rhone_alpes from '../../data/anciennes-regions/rhone-alpes/cantons-rhone-alpes.geojson'
import departements_rhone_alpes from '../../data/anciennes-regions/rhone-alpes/departements-rhone-alpes.geojson'
import arrondissements_rhone_alpes from '../../data/anciennes-regions/rhone-alpes/arrondissements-rhone-alpes.geojson'
import cantons_rhone_alpes from '../../data/anciennes-regions/rhone-alpes/cantons-rhone-alpes.geojson'
import communes_rhone_alpes from '../../data/anciennes-regions/rhone-alpes/communes-rhone-alpes.geojson'

/**
 * Départements
 */

import ain from '../../data/departements/01-ain/departement-01-ain.geojson'
import arrondissements_ain from '../../data/departements/01-ain/arrondissements-01-ain.geojson'
import cantons_ain from '../../data/departements/01-ain/cantons-01-ain.geojson'
import communes_ain from '../../data/departements/01-ain/communes-01-ain.geojson'

import aisne from '../../data/departements/02-aisne/departement-02-aisne.geojson'
import arrondissements_aisne from '../../data/departements/02-aisne/arrondissements-02-aisne.geojson'
import cantons_aisne from '../../data/departements/02-aisne/cantons-02-aisne.geojson'
import communes_aisne from '../../data/departements/02-aisne/communes-02-aisne.geojson'

import corse_de_sud from '../../data/departements/2A-corse-du-sud/departement-2A-corse-du-sud.geojson'
import arrondissements_corse_de_sud from '../../data/departements/2A-corse-du-sud/arrondissements-2A-corse-du-sud.geojson'
import cantons_corse_de_sud from '../../data/departements/2A-corse-du-sud/cantons-2A-corse-du-sud.geojson'
import communes_corse_de_sud from '../../data/departements/2A-corse-du-sud/communes-2A-corse-du-sud.geojson'

import haute_corse from '../../data/departements/2B-haute-corse/departement-2B-haute-corse.geojson'
import arrondissements_haute_corse from '../../data/departements/2B-haute-corse/arrondissements-2B-haute-corse.geojson'
import cantons_haute_corse from '../../data/departements/2B-haute-corse/cantons-2B-haute-corse.geojson'
import communes_haute_corse from '../../data/departements/2B-haute-corse/communes-2B-haute-corse.geojson'

import allier from '../../data/departements/03-allier/departement-03-allier.geojson'
import arrondissements_allier from '../../data/departements/03-allier/arrondissements-03-allier.geojson'
import cantons_allier from '../../data/departements/03-allier/cantons-03-allier.geojson'
import communes_allier from '../../data/departements/03-allier/communes-03-allier.geojson'

import alpes_de_haute_provence from '../../data/departements/04-alpes-de-haute-provence/departement-04-alpes-de-haute-provence.geojson'
import arrondissements_alpes_de_haute_provence from '../../data/departements/04-alpes-de-haute-provence/arrondissements-04-alpes-de-haute-provence.geojson'
import cantons_alpes_de_haute_provence from '../../data/departements/04-alpes-de-haute-provence/cantons-04-alpes-de-haute-provence.geojson'
import communes_alpes_de_haute_provence from '../../data/departements/04-alpes-de-haute-provence/communes-04-alpes-de-haute-provence.geojson'

import hautes_alpes from '../../data/departements/05-hautes-alpes/departement-05-hautes-alpes.geojson'
import arrondissements_hautes_alpes from '../../data/departements/05-hautes-alpes/arrondissements-05-hautes-alpes.geojson'
import cantons_hautes_alpes from '../../data/departements/05-hautes-alpes/cantons-05-hautes-alpes.geojson'
import communes_hautes_alpes from '../../data/departements/05-hautes-alpes/communes-05-hautes-alpes.geojson'

import alpes_maritimes from '../../data/departements/06-alpes-maritimes/departement-06-alpes-maritimes.geojson'
import arrondissements_alpes_maritimes from '../../data/departements/06-alpes-maritimes/arrondissements-06-alpes-maritimes.geojson'
import cantons_alpes_maritimes from '../../data/departements/06-alpes-maritimes/cantons-06-alpes-maritimes.geojson'
import communes_alpes_maritimes from '../../data/departements/06-alpes-maritimes/communes-06-alpes-maritimes.geojson'

import ardeche from '../../data/departements/07-ardeche/departement-07-ardeche.geojson'
import arrondissements_ardeche from '../../data/departements/07-ardeche/arrondissements-07-ardeche.geojson'
import cantons_ardeche from '../../data/departements/07-ardeche/cantons-07-ardeche.geojson'
import communes_ardeche from '../../data/departements/07-ardeche/communes-07-ardeche.geojson'

import ardennes from '../../data/departements/08-ardennes/departement-08-ardennes.geojson'
import arrondissements_ardennes from '../../data/departements/08-ardennes/arrondissements-08-ardennes.geojson'
import cantons_ardennes from '../../data/departements/08-ardennes/cantons-08-ardennes.geojson'
import communes_ardennes from '../../data/departements/08-ardennes/communes-08-ardennes.geojson'

import ariege from '../../data/departements/09-ariege/departement-09-ariege.geojson'
import arrondissements_ariege from '../../data/departements/09-ariege/arrondissements-09-ariege.geojson'
import cantons_ariege from '../../data/departements/09-ariege/cantons-09-ariege.geojson'
import communes_ariege from '../../data/departements/09-ariege/communes-09-ariege.geojson'

import aube from '../../data/departements/10-aube/departement-10-aube.geojson'
import arrondissements_aube from '../../data/departements/10-aube/arrondissements-10-aube.geojson'
import cantons_aube from '../../data/departements/10-aube/cantons-10-aube.geojson'
import communes_aube from '../../data/departements/10-aube/communes-10-aube.geojson'

import aude from '../../data/departements/11-aude/departement-11-aude.geojson'
import arrondissements_aude from '../../data/departements/11-aude/arrondissements-11-aude.geojson'
import cantons_aude from '../../data/departements/11-aude/cantons-11-aude.geojson'
import communes_aude from '../../data/departements/11-aude/communes-11-aude.geojson'

import aveyron from '../../data/departements/12-aveyron/departement-12-aveyron.geojson'
import arrondissements_aveyron from '../../data/departements/12-aveyron/arrondissements-12-aveyron.geojson'
import cantons_aveyron from '../../data/departements/12-aveyron/cantons-12-aveyron.geojson'
import communes_aveyron from '../../data/departements/12-aveyron/communes-12-aveyron.geojson'

import bouches_de_rhone from '../../data/departements/13-bouches-du-rhone/departement-13-bouches-du-rhone.geojson'
import arrondissements_bouches_de_rhone from '../../data/departements/13-bouches-du-rhone/arrondissements-13-bouches-du-rhone.geojson'
import cantons_bouches_de_rhone from '../../data/departements/13-bouches-du-rhone/cantons-13-bouches-du-rhone.geojson'
import communes_bouches_de_rhone from '../../data/departements/13-bouches-du-rhone/communes-13-bouches-du-rhone.geojson'

import calvados from '../../data/departements/14-calvados/departement-14-calvados.geojson'
import arrondissements_calvados from '../../data/departements/14-calvados/arrondissements-14-calvados.geojson'
import cantons_calvados from '../../data/departements/14-calvados/cantons-14-calvados.geojson'
import communes_calvados from '../../data/departements/14-calvados/communes-14-calvados.geojson'

import cantal from '../../data/departements/15-cantal/departement-15-cantal.geojson'
import arrondissements_cantal from '../../data/departements/15-cantal/arrondissements-15-cantal.geojson'
import cantons_cantal from '../../data/departements/15-cantal/cantons-15-cantal.geojson'
import communes_cantal from '../../data/departements/15-cantal/communes-15-cantal.geojson'

import charente from '../../data/departements/16-charente/departement-16-charente.geojson'
import arrondissements_charente from '../../data/departements/16-charente/arrondissements-16-charente.geojson'
import cantons_charente from '../../data/departements/16-charente/cantons-16-charente.geojson'
import communes_charente from '../../data/departements/16-charente/communes-16-charente.geojson'

import charente_maritime from '../../data/departements/17-charente-maritime/departement-17-charente-maritime.geojson'
import arrondissements_charente_maritime from '../../data/departements/17-charente-maritime/arrondissements-17-charente-maritime.geojson'
import cantons_charente_maritime from '../../data/departements/17-charente-maritime/cantons-17-charente-maritime.geojson'
import communes_charente_maritime from '../../data/departements/17-charente-maritime/communes-17-charente-maritime.geojson'

import cher from '../../data/departements/18-cher/departement-18-cher.geojson'
import arrondissements_cher from '../../data/departements/18-cher/arrondissements-18-cher.geojson'
import cantons_cher from '../../data/departements/18-cher/cantons-18-cher.geojson'
import communes_cher from '../../data/departements/18-cher/communes-18-cher.geojson'

import correze from '../../data/departements/19-correze/departement-19-correze.geojson'
import arrondissements_correze from '../../data/departements/19-correze/arrondissements-19-correze.geojson'
import cantons_correze from '../../data/departements/19-correze/cantons-19-correze.geojson'
import communes_correze from '../../data/departements/19-correze/communes-19-correze.geojson'

import cote_d_or from '../../data/departements/21-cote-d-or/departement-21-cote-d-or.geojson'
import arrondissements_cote_d_or from '../../data/departements/21-cote-d-or/arrondissements-21-cote-d-or.geojson'
import cantons_cote_d_or from '../../data/departements/21-cote-d-or/cantons-21-cote-d-or.geojson'
import communes_cote_d_or from '../../data/departements/21-cote-d-or/communes-21-cote-d-or.geojson'

import cotes_d_armor from '../../data/departements/22-cotes-d-armor/departement-22-cotes-d-armor.geojson'
import arrondissements_cotes_d_armor from '../../data/departements/22-cotes-d-armor/arrondissements-22-cotes-d-armor.geojson'
import cantons_cotes_d_armor from '../../data/departements/22-cotes-d-armor/cantons-22-cotes-d-armor.geojson'
import communes_cotes_d_armor from '../../data/departements/22-cotes-d-armor/communes-22-cotes-d-armor.geojson'

import creuse from '../../data/departements/23-creuse/departement-23-creuse.geojson'
import arrondissements_creuse from '../../data/departements/23-creuse/arrondissements-23-creuse.geojson'
import cantons_creuse from '../../data/departements/23-creuse/cantons-23-creuse.geojson'
import communes_creuse from '../../data/departements/23-creuse/communes-23-creuse.geojson'

import dordogne from '../../data/departements/24-dordogne/departement-24-dordogne.geojson'
import arrondissements_dordogne from '../../data/departements/24-dordogne/arrondissements-24-dordogne.geojson'
import cantons_dordogne from '../../data/departements/24-dordogne/cantons-24-dordogne.geojson'
import communes_dordogne from '../../data/departements/24-dordogne/communes-24-dordogne.geojson'

import doubs from '../../data/departements/25-doubs/departement-25-doubs.geojson'
import arrondissements_doubs from '../../data/departements/25-doubs/arrondissements-25-doubs.geojson'
import cantons_doubs from '../../data/departements/25-doubs/cantons-25-doubs.geojson'
import communes_doubs from '../../data/departements/25-doubs/communes-25-doubs.geojson'

import drome from '../../data/departements/26-drome/departement-26-drome.geojson'
import arrondissements_drome from '../../data/departements/26-drome/arrondissements-26-drome.geojson'
import cantons_drome from '../../data/departements/26-drome/cantons-26-drome.geojson'
import communes_drome from '../../data/departements/26-drome/communes-26-drome.geojson'

import isere from '../../data/departements/38-isere/departement-38-isere.geojson'
import arrondissements_isere from '../../data/departements/38-isere/arrondissements-38-isere.geojson'
import cantons_isere from '../../data/departements/38-isere/cantons-38-isere.geojson'
import communes_isere from '../../data/departements/38-isere/communes-38-isere.geojson'

import loire from '../../data/departements/42-loire/departement-42-loire.geojson'
import arrondissements_loire from '../../data/departements/42-loire/arrondissements-42-loire.geojson'
import cantons_loire from '../../data/departements/42-loire/cantons-42-loire.geojson'
import communes_loire from '../../data/departements/42-loire/communes-42-loire.geojson'

import haute_loire from '../../data/departements/43-haute-loire/departement-43-haute-loire.geojson'
import arrondissements_haute_loire from '../../data/departements/43-haute-loire/arrondissements-43-haute-loire.geojson'
import cantons_haute_loire from '../../data/departements/43-haute-loire/cantons-43-haute-loire.geojson'
import communes_haute_loire from '../../data/departements/43-haute-loire/communes-43-haute-loire.geojson'

import puy_de_dome from '../../data/departements/63-puy-de-dome/departement-63-puy-de-dome.geojson'
import arrondissements_puy_de_dome from '../../data/departements/63-puy-de-dome/arrondissements-63-puy-de-dome.geojson'
import cantons_puy_de_dome from '../../data/departements/63-puy-de-dome/cantons-63-puy-de-dome.geojson'
import communes_puy_de_dome from '../../data/departements/63-puy-de-dome/communes-63-puy-de-dome.geojson'

import rhone from '../../data/departements/69-rhone/departement-69-rhone.geojson'
import arrondissements_rhone from '../../data/departements/69-rhone/arrondissements-69-rhone.geojson'
import cantons_rhone from '../../data/departements/69-rhone/cantons-69-rhone.geojson'
import communes_rhone from '../../data/departements/69-rhone/communes-69-rhone.geojson'

import savoie from '../../data/departements/73-savoie/departement-73-savoie.geojson'
import arrondissements_savoie from '../../data/departements/73-savoie/arrondissements-73-savoie.geojson'
import cantons_savoie from '../../data/departements/73-savoie/cantons-73-savoie.geojson'
import communes_savoie from '../../data/departements/73-savoie/communes-73-savoie.geojson'

import haute_savoie from '../../data/departements/74-haute-savoie/departement-74-haute-savoie.geojson'
import arrondissements_haute_savoie from '../../data/departements/74-haute-savoie/arrondissements-74-haute-savoie.geojson'
import cantons_haute_savoie from '../../data/departements/74-haute-savoie/cantons-74-haute-savoie.geojson'
import communes_haute_savoie from '../../data/departements/74-haute-savoie/communes-74-haute-savoie.geojson'










export const geojsons = {
    'France': france,
    'Régions': regions,
    'Anciennes régions': anciennes_regions,
    'Départements': departements,
    'Auvergne-Rhône-Alpes': {
        'GeoJSON': auvergne_rhone_alpes,
        'Départements': departements_auvergne_rhone_alpes,
        'Arrondissements': arrondissements_auvergne_rhone_alpes,
        'Cantons': cantons_auvergne_rhone_alpes,
        'Communes': communes_auvergne_rhone_alpes,
    },
    'Bourgogne-Franche-Comté': {
        'GeoJSON': bourgogne_franche_comte,
        'Départements': departements_bourgogne_franche_comte,
        'Arrondissements': arrondissements_bourgogne_franche_comte,
        'Cantons': cantons_bourgogne_franche_comte,
        'Communes': communes_bourgogne_franche_comte,
    },
    'Bretagne': {
        'GeoJSON': bretagne,
        'Départements': departements_bretagne,
        'Arrondissements': arrondissements_bretagne,
        'Cantons': cantons_bretagne,
        'Communes': communes_bretagne,
    },
    'Centre-Val de Loire': {
        'GeoJSON': centre_val_de_loire,
        'Départements': departements_centre_val_de_loire,
        'Arrondissements': arrondissements_centre_val_de_loire,
        'Cantons': cantons_centre_val_de_loire,
        'Communes': communes_centre_val_de_loire,
    },
    'Corse': {
        'GeoJSON': corse,
        'Départements': departements_corse,
        'Arrondissements': arrondissements_corse,
        'Cantons': cantons_corse,
        'Communes': communes_corse,
    },
    'Grand Est': {
        'GeoJSON': grand_est,
        'Départements': departements_grand_est,
        'Arrondissements': arrondissements_grand_est,
        'Cantons': cantons_grand_est,
        'Communes': communes_grand_est,
    },
    'Hauts-de-France': {
        'GeoJSON': haut_de_france,
        'Départements': departements_haut_de_france,
        'Arrondissements': arrondissements_haut_de_france,
        'Cantons': cantons_haut_de_france,
        'Communes': communes_haut_de_france,
    },
    'Île-de-France': {
        'GeoJSON': ile_de_france,
        'Départements': departements_ile_de_france,
        'Arrondissements': arrondissements_ile_de_france,
        'Cantons': cantons_ile_de_france,
        'Communes': communes_ile_de_france,
    },
    'Normandie': {
        'GeoJSON': normandie,
        'Départements': departements_normandie,
        'Arrondissements': arrondissements_normandie,
        'Cantons': cantons_normandie,
        'Communes': communes_normandie,
    },
    'Nouvelle-Aquitaine': {
        'GeoJSON': nouvelle_aquitaine,
        'Départements': departements_nouvelle_aquitaine,
        'Arrondissements': arrondissements_nouvelle_aquitaine,
        'Cantons': cantons_nouvelle_aquitaine,
        'Communes': communes_nouvelle_aquitaine,
    },
    'Occitanie': {
        'GeoJSON': occitanie,
        'Départements': departements_occitanie,
        'Arrondissements': arrondissements_occitanie,
        'Cantons': cantons_occitanie,
        'Communes': communes_occitanie,
    },
    'Pays de la Loire': {
        'GeoJSON': pays_de_la_loire,
        'Départements': departements_pays_de_la_loire,
        'Arrondissements': arrondissements_pays_de_la_loire,
        'Cantons': cantons_pays_de_la_loire,
        'Communes': communes_pays_de_la_loire,
    },
    'Provence-Alpes-Côte d\'Azur': {
        'GeoJSON': provence_alpes_cote_d_azure,
        'Départements': departements_provence_alpes_cote_d_azure,
        'Arrondissements': arrondissements_provence_alpes_cote_d_azure,
        'Cantons': cantons_provence_alpes_cote_d_azure,
        'Communes': communes_provence_alpes_cote_d_azure,
    },
    'Guadeloupe': {
        'GeoJSON': guadeloupe,
        'Départements': departements_guadeloupe,
        'Arrondissements': arrondissements_guadeloupe,
        'Cantons': cantons_guadeloupe,
        'Communes': communes_guadeloupe,
    },
    'Martinique': {
        'GeoJSON': martinique,
        'Départements': departements_martinique,
        'Arrondissements': arrondissements_martinique,
        'Cantons': cantons_martinique,
        'Communes': communes_martinique,
    },
    'Mayotte': {
        'GeoJSON': mayotte,
        'Départements': departements_mayotte,
        'Arrondissements': arrondissements_mayotte,
        'Cantons': cantons_mayotte,
        'Communes': communes_mayotte,
    },
    'La Réunion': {
        'GeoJSON': la_reunion,
        'Départements': departements_la_reunion,
        'Arrondissements': arrondissements_la_reunion,
        'Cantons': cantons_la_reunion,
        'Communes': communes_la_reunion,
    },
    'Guyane': {
        'GeoJSON': guyane,
        'Départements': departements_guyane,
        'Arrondissements': arrondissements_guyane,
        'Cantons': cantons_guyane,
        'Communes': communes_guyane,
    }
}