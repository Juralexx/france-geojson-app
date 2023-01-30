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

/**
 * Anciennes régions
 */

import alsace from '../../data/anciennes-regions/alsace/region-alsace.geojson'
import departements_alsace from '../../data/anciennes-regions/alsace/departements-alsace.geojson'
import arrondissements_alsace from '../../data/anciennes-regions/alsace/arrondissements-alsace.geojson'
import cantons_alsace from '../../data/anciennes-regions/alsace/cantons-alsace.geojson'
import communes_alsace from '../../data/anciennes-regions/alsace/communes-alsace.geojson'

import aquitaine from '../../data/anciennes-regions/aquitaine/region-aquitaine.geojson'
import departements_aquitaine from '../../data/anciennes-regions/aquitaine/departements-aquitaine.geojson'
import arrondissements_aquitaine from '../../data/anciennes-regions/aquitaine/arrondissements-aquitaine.geojson'
import cantons_aquitaine from '../../data/anciennes-regions/aquitaine/cantons-aquitaine.geojson'
import communes_aquitaine from '../../data/anciennes-regions/aquitaine/communes-aquitaine.geojson'

import auvergne from '../../data/anciennes-regions/auvergne/region-auvergne.geojson'
import departements_auvergne from '../../data/anciennes-regions/auvergne/departements-auvergne.geojson'
import arrondissements_auvergne from '../../data/anciennes-regions/auvergne/arrondissements-auvergne.geojson'
import cantons_auvergne from '../../data/anciennes-regions/auvergne/cantons-auvergne.geojson'
import communes_auvergne from '../../data/anciennes-regions/auvergne/communes-auvergne.geojson'

import basse_normandie from '../../data/anciennes-regions/basse-normandie/region-basse-normandie.geojson'
import departements_basse_normandie from '../../data/anciennes-regions/basse-normandie/departements-basse-normandie.geojson'
import arrondissements_basse_normandie from '../../data/anciennes-regions/basse-normandie/arrondissements-basse-normandie.geojson'
import cantons_basse_normandie from '../../data/anciennes-regions/basse-normandie/cantons-basse-normandie.geojson'
import communes_basse_normandie from '../../data/anciennes-regions/basse-normandie/communes-basse-normandie.geojson'

import bourgogne from '../../data/anciennes-regions/bourgogne/region-bourgogne.geojson'
import departements_bourgogne from '../../data/anciennes-regions/bourgogne/departements-bourgogne.geojson'
import arrondissements_bourgogne from '../../data/anciennes-regions/bourgogne/arrondissements-bourgogne.geojson'
import cantons_bourgogne from '../../data/anciennes-regions/bourgogne/cantons-bourgogne.geojson'
import communes_bourgogne from '../../data/anciennes-regions/bourgogne/communes-bourgogne.geojson'

import champagne_ardenne from '../../data/anciennes-regions/champagne-ardenne/region-champagne-ardenne.geojson'
import departements_champagne_ardenne from '../../data/anciennes-regions/champagne-ardenne/departements-champagne-ardenne.geojson'
import arrondissements_champagne_ardenne from '../../data/anciennes-regions/champagne-ardenne/arrondissements-champagne-ardenne.geojson'
import cantons_champagne_ardenne from '../../data/anciennes-regions/champagne-ardenne/cantons-champagne-ardenne.geojson'
import communes_champagne_ardenne from '../../data/anciennes-regions/champagne-ardenne/communes-champagne-ardenne.geojson'

import franche_comte from '../../data/anciennes-regions/franche-comte/region-franche-comte.geojson'
import departements_franche_comte from '../../data/anciennes-regions/franche-comte/departements-franche-comte.geojson'
import arrondissements_franche_comte from '../../data/anciennes-regions/franche-comte/arrondissements-franche-comte.geojson'
import cantons_franche_comte from '../../data/anciennes-regions/franche-comte/cantons-franche-comte.geojson'
import communes_franche_comte from '../../data/anciennes-regions/franche-comte/communes-franche-comte.geojson'

import haute_normandie from '../../data/anciennes-regions/haute-normandie/region-haute-normandie.geojson'
import departements_haute_normandie from '../../data/anciennes-regions/haute-normandie/departements-haute-normandie.geojson'
import arrondissements_haute_normandie from '../../data/anciennes-regions/haute-normandie/arrondissements-haute-normandie.geojson'
import cantons_haute_normandie from '../../data/anciennes-regions/haute-normandie/cantons-haute-normandie.geojson'
import communes_haute_normandie from '../../data/anciennes-regions/haute-normandie/communes-haute-normandie.geojson'

import languedoc_roussillon from '../../data/anciennes-regions/languedoc-roussillon/region-languedoc-roussillon.geojson'
import departements_languedoc_roussillon from '../../data/anciennes-regions/languedoc-roussillon/departements-languedoc-roussillon.geojson'
import arrondissements_languedoc_roussillon from '../../data/anciennes-regions/languedoc-roussillon/arrondissements-languedoc-roussillon.geojson'
import cantons_languedoc_roussillon from '../../data/anciennes-regions/languedoc-roussillon/cantons-languedoc-roussillon.geojson'
import communes_languedoc_roussillon from '../../data/anciennes-regions/languedoc-roussillon/communes-languedoc-roussillon.geojson'

import limousin from '../../data/anciennes-regions/limousin/region-limousin.geojson'
import departements_limousin from '../../data/anciennes-regions/limousin/departements-limousin.geojson'
import arrondissements_limousin from '../../data/anciennes-regions/limousin/arrondissements-limousin.geojson'
import cantons_limousin from '../../data/anciennes-regions/limousin/cantons-limousin.geojson'
import communes_limousin from '../../data/anciennes-regions/limousin/communes-limousin.geojson'

import lorraine from '../../data/anciennes-regions/lorraine/region-lorraine.geojson'
import departements_lorraine from '../../data/anciennes-regions/lorraine/departements-lorraine.geojson'
import arrondissements_lorraine from '../../data/anciennes-regions/lorraine/arrondissements-lorraine.geojson'
import cantons_lorraine from '../../data/anciennes-regions/lorraine/cantons-lorraine.geojson'
import communes_lorraine from '../../data/anciennes-regions/lorraine/communes-lorraine.geojson'

import midi_pyrenees from '../../data/anciennes-regions/midi-pyrenees/region-midi-pyrenees.geojson'
import departements_midi_pyrenees from '../../data/anciennes-regions/midi-pyrenees/departements-midi-pyrenees.geojson'
import arrondissements_midi_pyrenees from '../../data/anciennes-regions/midi-pyrenees/arrondissements-midi-pyrenees.geojson'
import cantons_midi_pyrenees from '../../data/anciennes-regions/midi-pyrenees/cantons-midi-pyrenees.geojson'
import communes_midi_pyrenees from '../../data/anciennes-regions/midi-pyrenees/communes-midi-pyrenees.geojson'

import nord_pas_de_calais from '../../data/anciennes-regions/nord-pas-de-calais/region-nord-pas-de-calais.geojson'
import departements_nord_pas_de_calais from '../../data/anciennes-regions/nord-pas-de-calais/departements-nord-pas-de-calais.geojson'
import arrondissements_nord_pas_de_calais from '../../data/anciennes-regions/nord-pas-de-calais/arrondissements-nord-pas-de-calais.geojson'
import cantons_nord_pas_de_calais from '../../data/anciennes-regions/nord-pas-de-calais/cantons-nord-pas-de-calais.geojson'
import communes_nord_pas_de_calais from '../../data/anciennes-regions/nord-pas-de-calais/communes-nord-pas-de-calais.geojson'

import picardie from '../../data/anciennes-regions/picardie/region-picardie.geojson'
import departements_picardie from '../../data/anciennes-regions/picardie/departements-picardie.geojson'
import arrondissements_picardie from '../../data/anciennes-regions/picardie/arrondissements-picardie.geojson'
import cantons_picardie from '../../data/anciennes-regions/picardie/cantons-picardie.geojson'
import communes_picardie from '../../data/anciennes-regions/picardie/communes-picardie.geojson'

import poitou_charentes from '../../data/anciennes-regions/poitou-charentes/region-poitou-charentes.geojson'
import departements_poitou_charentes from '../../data/anciennes-regions/poitou-charentes/departements-poitou-charentes.geojson'
import arrondissements_poitou_charentes from '../../data/anciennes-regions/poitou-charentes/arrondissements-poitou-charentes.geojson'
import cantons_poitou_charentes from '../../data/anciennes-regions/poitou-charentes/cantons-poitou-charentes.geojson'
import communes_poitou_charentes from '../../data/anciennes-regions/poitou-charentes/communes-poitou-charentes.geojson'

import rhone_alpes from '../../data/anciennes-regions/rhone-alpes/region-rhone-alpes.geojson'
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

import eure from '../../data/departements/27-eure/departement-27-eure.geojson'
import arrondissements_eure from '../../data/departements/27-eure/arrondissements-27-eure.geojson'
import cantons_eure from '../../data/departements/27-eure/cantons-27-eure.geojson'
import communes_eure from '../../data/departements/27-eure/communes-27-eure.geojson'

import eure_et_loir from '../../data/departements/28-eure-et-loir/departement-28-eure-et-loir.geojson'
import arrondissements_eure_et_loir from '../../data/departements/28-eure-et-loir/arrondissements-28-eure-et-loir.geojson'
import cantons_eure_et_loir from '../../data/departements/28-eure-et-loir/cantons-28-eure-et-loir.geojson'
import communes_eure_et_loir from '../../data/departements/28-eure-et-loir/communes-28-eure-et-loir.geojson'

import finistere from '../../data/departements/29-finistere/departement-29-finistere.geojson'
import arrondissements_finistere from '../../data/departements/29-finistere/arrondissements-29-finistere.geojson'
import cantons_finistere from '../../data/departements/29-finistere/cantons-29-finistere.geojson'
import communes_finistere from '../../data/departements/29-finistere/communes-29-finistere.geojson'

import gard from '../../data/departements/30-gard/departement-30-gard.geojson'
import arrondissements_gard from '../../data/departements/30-gard/arrondissements-30-gard.geojson'
import cantons_gard from '../../data/departements/30-gard/cantons-30-gard.geojson'
import communes_gard from '../../data/departements/30-gard/communes-30-gard.geojson'

import haute_garonne from '../../data/departements/31-haute-garonne/departement-31-haute-garonne.geojson'
import arrondissements_haute_garonne from '../../data/departements/31-haute-garonne/arrondissements-31-haute-garonne.geojson'
import cantons_haute_garonne from '../../data/departements/31-haute-garonne/cantons-31-haute-garonne.geojson'
import communes_haute_garonne from '../../data/departements/31-haute-garonne/communes-31-haute-garonne.geojson'

import gers from '../../data/departements/32-gers/departement-32-gers.geojson'
import arrondissements_gers from '../../data/departements/32-gers/arrondissements-32-gers.geojson'
import cantons_gers from '../../data/departements/32-gers/cantons-32-gers.geojson'
import communes_gers from '../../data/departements/32-gers/communes-32-gers.geojson'

import gironde from '../../data/departements/33-gironde/departement-33-gironde.geojson'
import arrondissements_gironde from '../../data/departements/33-gironde/arrondissements-33-gironde.geojson'
import cantons_gironde from '../../data/departements/33-gironde/cantons-33-gironde.geojson'
import communes_gironde from '../../data/departements/33-gironde/communes-33-gironde.geojson'

import herault from '../../data/departements/34-herault/departement-34-herault.geojson'
import arrondissements_herault from '../../data/departements/34-herault/arrondissements-34-herault.geojson'
import cantons_herault from '../../data/departements/34-herault/cantons-34-herault.geojson'
import communes_herault from '../../data/departements/34-herault/communes-34-herault.geojson'

import ile_et_vilaine from '../../data/departements/35-ille-et-vilaine/departement-35-ille-et-vilaine.geojson'
import arrondissements_ile_et_vilaine from '../../data/departements/35-ille-et-vilaine/arrondissements-35-ille-et-vilaine.geojson'
import cantons_ile_et_vilaine from '../../data/departements/35-ille-et-vilaine/cantons-35-ille-et-vilaine.geojson'
import communes_ile_et_vilaine from '../../data/departements/35-ille-et-vilaine/communes-35-ille-et-vilaine.geojson'

import indre from '../../data/departements/36-indre/departement-36-indre.geojson'
import arrondissements_indre from '../../data/departements/36-indre/arrondissements-36-indre.geojson'
import cantons_indre from '../../data/departements/36-indre/cantons-36-indre.geojson'
import communes_indre from '../../data/departements/36-indre/communes-36-indre.geojson'

import indre_et_loire from '../../data/departements/37-indre-et-loire/departement-37-indre-et-loire.geojson'
import arrondissements_indre_et_loire from '../../data/departements/37-indre-et-loire/arrondissements-37-indre-et-loire.geojson'
import cantons_indre_et_loire from '../../data/departements/37-indre-et-loire/cantons-37-indre-et-loire.geojson'
import communes_indre_et_loire from '../../data/departements/37-indre-et-loire/communes-37-indre-et-loire.geojson'

import isere from '../../data/departements/38-isere/departement-38-isere.geojson'
import arrondissements_isere from '../../data/departements/38-isere/arrondissements-38-isere.geojson'
import cantons_isere from '../../data/departements/38-isere/cantons-38-isere.geojson'
import communes_isere from '../../data/departements/38-isere/communes-38-isere.geojson'

import jura from '../../data/departements/39-jura/departement-39-jura.geojson'
import arrondissements_jura from '../../data/departements/39-jura/arrondissements-39-jura.geojson'
import cantons_jura from '../../data/departements/39-jura/cantons-39-jura.geojson'
import communes_jura from '../../data/departements/39-jura/communes-39-jura.geojson'

import landes from '../../data/departements/40-landes/departement-40-landes.geojson'
import arrondissements_landes from '../../data/departements/40-landes/arrondissements-40-landes.geojson'
import cantons_landes from '../../data/departements/40-landes/cantons-40-landes.geojson'
import communes_landes from '../../data/departements/40-landes/communes-40-landes.geojson'

import loir_et_cher from '../../data/departements/41-loir-et-cher/departement-41-loir-et-cher.geojson'
import arrondissements_loir_et_cher from '../../data/departements/41-loir-et-cher/arrondissements-41-loir-et-cher.geojson'
import cantons_loir_et_cher from '../../data/departements/41-loir-et-cher/cantons-41-loir-et-cher.geojson'
import communes_loir_et_cher from '../../data/departements/41-loir-et-cher/communes-41-loir-et-cher.geojson'

import loire from '../../data/departements/42-loire/departement-42-loire.geojson'
import arrondissements_loire from '../../data/departements/42-loire/arrondissements-42-loire.geojson'
import cantons_loire from '../../data/departements/42-loire/cantons-42-loire.geojson'
import communes_loire from '../../data/departements/42-loire/communes-42-loire.geojson'

import haute_loire from '../../data/departements/43-haute-loire/departement-43-haute-loire.geojson'
import arrondissements_haute_loire from '../../data/departements/43-haute-loire/arrondissements-43-haute-loire.geojson'
import cantons_haute_loire from '../../data/departements/43-haute-loire/cantons-43-haute-loire.geojson'
import communes_haute_loire from '../../data/departements/43-haute-loire/communes-43-haute-loire.geojson'

import loire_atlantique from '../../data/departements/44-loire-atlantique/departement-44-loire-atlantique.geojson'
import arrondissements_loire_atlantique from '../../data/departements/44-loire-atlantique/arrondissements-44-loire-atlantique.geojson'
import cantons_loire_atlantique from '../../data/departements/44-loire-atlantique/cantons-44-loire-atlantique.geojson'
import communes_loire_atlantique from '../../data/departements/44-loire-atlantique/communes-44-loire-atlantique.geojson'

import loiret from '../../data/departements/45-loiret/departement-45-loiret.geojson'
import arrondissements_loiret from '../../data/departements/45-loiret/arrondissements-45-loiret.geojson'
import cantons_loiret from '../../data/departements/45-loiret/cantons-45-loiret.geojson'
import communes_loiret from '../../data/departements/45-loiret/communes-45-loiret.geojson'

import lot from '../../data/departements/46-lot/departement-46-lot.geojson'
import arrondissements_lot from '../../data/departements/46-lot/arrondissements-46-lot.geojson'
import cantons_lot from '../../data/departements/46-lot/cantons-46-lot.geojson'
import communes_lot from '../../data/departements/46-lot/communes-46-lot.geojson'

import lot_et_garonne from '../../data/departements/47-lot-et-garonne/departement-47-lot-et-garonne.geojson'
import arrondissements_lot_et_garonne from '../../data/departements/47-lot-et-garonne/arrondissements-47-lot-et-garonne.geojson'
import cantons_lot_et_garonne from '../../data/departements/47-lot-et-garonne/cantons-47-lot-et-garonne.geojson'
import communes_lot_et_garonne from '../../data/departements/47-lot-et-garonne/communes-47-lot-et-garonne.geojson'

import lozere from '../../data/departements/48-lozere/departement-48-lozere.geojson'
import arrondissements_lozere from '../../data/departements/48-lozere/arrondissements-48-lozere.geojson'
import cantons_lozere from '../../data/departements/48-lozere/cantons-48-lozere.geojson'
import communes_lozere from '../../data/departements/48-lozere/communes-48-lozere.geojson'

import maine_et_loire from '../../data/departements/49-maine-et-loire/departement-49-maine-et-loire.geojson'
import arrondissements_maine_et_loire from '../../data/departements/49-maine-et-loire/arrondissements-49-maine-et-loire.geojson'
import cantons_maine_et_loire from '../../data/departements/49-maine-et-loire/cantons-49-maine-et-loire.geojson'
import communes_maine_et_loire from '../../data/departements/49-maine-et-loire/communes-49-maine-et-loire.geojson'

import manche from '../../data/departements/50-manche/departement-50-manche.geojson'
import arrondissements_manche from '../../data/departements/50-manche/arrondissements-50-manche.geojson'
import cantons_manche from '../../data/departements/50-manche/cantons-50-manche.geojson'
import communes_manche from '../../data/departements/50-manche/communes-50-manche.geojson'

import marne from '../../data/departements/51-marne/departement-51-marne.geojson'
import arrondissements_marne from '../../data/departements/51-marne/arrondissements-51-marne.geojson'
import cantons_marne from '../../data/departements/51-marne/cantons-51-marne.geojson'
import communes_marne from '../../data/departements/51-marne/communes-51-marne.geojson'

import haute_marne from '../../data/departements/52-haute-marne/departement-52-haute-marne.geojson'
import arrondissements_haute_marne from '../../data/departements/52-haute-marne/arrondissements-52-haute-marne.geojson'
import cantons_haute_marne from '../../data/departements/52-haute-marne/cantons-52-haute-marne.geojson'
import communes_haute_marne from '../../data/departements/52-haute-marne/communes-52-haute-marne.geojson'

import mayenne from '../../data/departements/53-mayenne/departement-53-mayenne.geojson'
import arrondissements_mayenne from '../../data/departements/53-mayenne/arrondissements-53-mayenne.geojson'
import cantons_mayenne from '../../data/departements/53-mayenne/cantons-53-mayenne.geojson'
import communes_mayenne from '../../data/departements/53-mayenne/communes-53-mayenne.geojson'

import meurthe_et_moselle from '../../data/departements/54-meurthe-et-moselle/departement-54-meurthe-et-moselle.geojson'
import arrondissements_meurthe_et_moselle from '../../data/departements/54-meurthe-et-moselle/arrondissements-54-meurthe-et-moselle.geojson'
import cantons_meurthe_et_moselle from '../../data/departements/54-meurthe-et-moselle/cantons-54-meurthe-et-moselle.geojson'
import communes_meurthe_et_moselle from '../../data/departements/54-meurthe-et-moselle/communes-54-meurthe-et-moselle.geojson'

import meuse from '../../data/departements/55-meuse/departement-55-meuse.geojson'
import arrondissements_meuse from '../../data/departements/55-meuse/arrondissements-55-meuse.geojson'
import cantons_meuse from '../../data/departements/55-meuse/cantons-55-meuse.geojson'
import communes_meuse from '../../data/departements/55-meuse/communes-55-meuse.geojson'

import morbihan from '../../data/departements/56-morbihan/departement-56-morbihan.geojson'
import arrondissements_morbihan from '../../data/departements/56-morbihan/arrondissements-56-morbihan.geojson'
import cantons_morbihan from '../../data/departements/56-morbihan/cantons-56-morbihan.geojson'
import communes_morbihan from '../../data/departements/56-morbihan/communes-56-morbihan.geojson'

import moselle from '../../data/departements/57-moselle/departement-57-moselle.geojson'
import arrondissements_moselle from '../../data/departements/57-moselle/arrondissements-57-moselle.geojson'
import cantons_moselle from '../../data/departements/57-moselle/cantons-57-moselle.geojson'
import communes_moselle from '../../data/departements/57-moselle/communes-57-moselle.geojson'

import nievre from '../../data/departements/58-nievre/departement-58-nievre.geojson'
import arrondissements_nievre from '../../data/departements/58-nievre/arrondissements-58-nievre.geojson'
import cantons_nievre from '../../data/departements/58-nievre/cantons-58-nievre.geojson'
import communes_nievre from '../../data/departements/58-nievre/communes-58-nievre.geojson'

import nord from '../../data/departements/59-nord/departement-59-nord.geojson'
import arrondissements_nord from '../../data/departements/59-nord/arrondissements-59-nord.geojson'
import cantons_nord from '../../data/departements/59-nord/cantons-59-nord.geojson'
import communes_nord from '../../data/departements/59-nord/communes-59-nord.geojson'

import oise from '../../data/departements/60-oise/departement-60-oise.geojson'
import arrondissements_oise from '../../data/departements/60-oise/arrondissements-60-oise.geojson'
import cantons_oise from '../../data/departements/60-oise/cantons-60-oise.geojson'
import communes_oise from '../../data/departements/60-oise/communes-60-oise.geojson'

import orne from '../../data/departements/61-orne/departement-61-orne.geojson'
import arrondissements_orne from '../../data/departements/61-orne/arrondissements-61-orne.geojson'
import cantons_orne from '../../data/departements/61-orne/cantons-61-orne.geojson'
import communes_orne from '../../data/departements/61-orne/communes-61-orne.geojson'

import pas_de_calais from '../../data/departements/62-pas-de-calais/departement-62-pas-de-calais.geojson'
import arrondissements_pas_de_calais from '../../data/departements/62-pas-de-calais/arrondissements-62-pas-de-calais.geojson'
import cantons_pas_de_calais from '../../data/departements/62-pas-de-calais/cantons-62-pas-de-calais.geojson'
import communes_pas_de_calais from '../../data/departements/62-pas-de-calais/communes-62-pas-de-calais.geojson'

import puy_de_dome from '../../data/departements/63-puy-de-dome/departement-63-puy-de-dome.geojson'
import arrondissements_puy_de_dome from '../../data/departements/63-puy-de-dome/arrondissements-63-puy-de-dome.geojson'
import cantons_puy_de_dome from '../../data/departements/63-puy-de-dome/cantons-63-puy-de-dome.geojson'
import communes_puy_de_dome from '../../data/departements/63-puy-de-dome/communes-63-puy-de-dome.geojson'

import pyrenees_atlantiques from '../../data/departements/64-pyrenees-atlantiques/departement-64-pyrenees-atlantiques.geojson'
import arrondissements_pyrenees_atlantiques from '../../data/departements/64-pyrenees-atlantiques/arrondissements-64-pyrenees-atlantiques.geojson'
import cantons_pyrenees_atlantiques from '../../data/departements/64-pyrenees-atlantiques/cantons-64-pyrenees-atlantiques.geojson'
import communes_pyrenees_atlantiques from '../../data/departements/64-pyrenees-atlantiques/communes-64-pyrenees-atlantiques.geojson'

import hautes_pyrenees from '../../data/departements/65-hautes-pyrenees/departement-65-hautes-pyrenees.geojson'
import arrondissements_hautes_pyrenees from '../../data/departements/65-hautes-pyrenees/arrondissements-65-hautes-pyrenees.geojson'
import cantons_hautes_pyrenees from '../../data/departements/65-hautes-pyrenees/cantons-65-hautes-pyrenees.geojson'
import communes_hautes_pyrenees from '../../data/departements/65-hautes-pyrenees/communes-65-hautes-pyrenees.geojson'

import pyrenees_orientales from '../../data/departements/66-pyrenees-orientales/departement-66-pyrenees-orientales.geojson'
import arrondissements_pyrenees_orientales from '../../data/departements/66-pyrenees-orientales/arrondissements-66-pyrenees-orientales.geojson'
import cantons_pyrenees_orientales from '../../data/departements/66-pyrenees-orientales/cantons-66-pyrenees-orientales.geojson'
import communes_pyrenees_orientales from '../../data/departements/66-pyrenees-orientales/communes-66-pyrenees-orientales.geojson'

import bas_rhin from '../../data/departements/67-bas-rhin/departement-67-bas-rhin.geojson'
import arrondissements_bas_rhin from '../../data/departements/67-bas-rhin/arrondissements-67-bas-rhin.geojson'
import cantons_bas_rhin from '../../data/departements/67-bas-rhin/cantons-67-bas-rhin.geojson'
import communes_bas_rhin from '../../data/departements/67-bas-rhin/communes-67-bas-rhin.geojson'

import haut_rhin from '../../data/departements/68-haut-rhin/departement-68-haut-rhin.geojson'
import arrondissements_haut_rhin from '../../data/departements/68-haut-rhin/arrondissements-68-haut-rhin.geojson'
import cantons_haut_rhin from '../../data/departements/68-haut-rhin/cantons-68-haut-rhin.geojson'
import communes_haut_rhin from '../../data/departements/68-haut-rhin/communes-68-haut-rhin.geojson'

import rhone from '../../data/departements/69-rhone/departement-69-rhone.geojson'
import arrondissements_rhone from '../../data/departements/69-rhone/arrondissements-69-rhone.geojson'
import cantons_rhone from '../../data/departements/69-rhone/cantons-69-rhone.geojson'
import communes_rhone from '../../data/departements/69-rhone/communes-69-rhone.geojson'

import haute_saone from '../../data/departements/70-haute-saone/departement-70-haute-saone.geojson'
import arrondissements_haute_saone from '../../data/departements/70-haute-saone/arrondissements-70-haute-saone.geojson'
import cantons_haute_saone from '../../data/departements/70-haute-saone/cantons-70-haute-saone.geojson'
import communes_haute_saone from '../../data/departements/70-haute-saone/communes-70-haute-saone.geojson'

import saone_et_loire from '../../data/departements/71-saone-et-loire/departement-71-saone-et-loire.geojson'
import arrondissements_saone_et_loire from '../../data/departements/71-saone-et-loire/arrondissements-71-saone-et-loire.geojson'
import cantons_saone_et_loire from '../../data/departements/71-saone-et-loire/cantons-71-saone-et-loire.geojson'
import communes_saone_et_loire from '../../data/departements/71-saone-et-loire/communes-71-saone-et-loire.geojson'

import sarthe from '../../data/departements/72-sarthe/departement-72-sarthe.geojson'
import arrondissements_sarthe from '../../data/departements/72-sarthe/arrondissements-72-sarthe.geojson'
import cantons_sarthe from '../../data/departements/72-sarthe/cantons-72-sarthe.geojson'
import communes_sarthe from '../../data/departements/72-sarthe/communes-72-sarthe.geojson'

import savoie from '../../data/departements/73-savoie/departement-73-savoie.geojson'
import arrondissements_savoie from '../../data/departements/73-savoie/arrondissements-73-savoie.geojson'
import cantons_savoie from '../../data/departements/73-savoie/cantons-73-savoie.geojson'
import communes_savoie from '../../data/departements/73-savoie/communes-73-savoie.geojson'

import haute_savoie from '../../data/departements/74-haute-savoie/departement-74-haute-savoie.geojson'
import arrondissements_haute_savoie from '../../data/departements/74-haute-savoie/arrondissements-74-haute-savoie.geojson'
import cantons_haute_savoie from '../../data/departements/74-haute-savoie/cantons-74-haute-savoie.geojson'
import communes_haute_savoie from '../../data/departements/74-haute-savoie/communes-74-haute-savoie.geojson'

import paris from '../../data/departements/75-paris/departement-75-paris.geojson'
import arrondissements_paris from '../../data/departements/75-paris/arrondissements-75-paris.geojson'
import cantons_paris from '../../data/departements/75-paris/cantons-75-paris.geojson'
import communes_paris from '../../data/departements/75-paris/communes-75-paris.geojson'

import seine_maritime from '../../data/departements/76-seine-maritime/departement-76-seine-maritime.geojson'
import arrondissements_seine_maritime from '../../data/departements/76-seine-maritime/arrondissements-76-seine-maritime.geojson'
import cantons_seine_maritime from '../../data/departements/76-seine-maritime/cantons-76-seine-maritime.geojson'
import communes_seine_maritime from '../../data/departements/76-seine-maritime/communes-76-seine-maritime.geojson'

import seine_et_marne from '../../data/departements/77-seine-et-marne/departement-77-seine-et-marne.geojson'
import arrondissements_seine_et_marne from '../../data/departements/77-seine-et-marne/arrondissements-77-seine-et-marne.geojson'
import cantons_seine_et_marne from '../../data/departements/77-seine-et-marne/cantons-77-seine-et-marne.geojson'
import communes_seine_et_marne from '../../data/departements/77-seine-et-marne/communes-77-seine-et-marne.geojson'

import yvelines from '../../data/departements/78-yvelines/departement-78-yvelines.geojson'
import arrondissements_yvelines from '../../data/departements/78-yvelines/arrondissements-78-yvelines.geojson'
import cantons_yvelines from '../../data/departements/78-yvelines/cantons-78-yvelines.geojson'
import communes_yvelines from '../../data/departements/78-yvelines/communes-78-yvelines.geojson'

import deux_sevres from '../../data/departements/79-deux-sevres/departement-79-deux-sevres.geojson'
import arrondissements_deux_sevres from '../../data/departements/79-deux-sevres/arrondissements-79-deux-sevres.geojson'
import cantons_deux_sevres from '../../data/departements/79-deux-sevres/cantons-79-deux-sevres.geojson'
import communes_deux_sevres from '../../data/departements/79-deux-sevres/communes-79-deux-sevres.geojson'

import somme from '../../data/departements/80-somme/departement-80-somme.geojson'
import arrondissements_somme from '../../data/departements/80-somme/arrondissements-80-somme.geojson'
import cantons_somme from '../../data/departements/80-somme/cantons-80-somme.geojson'
import communes_somme from '../../data/departements/80-somme/communes-80-somme.geojson'

import tarn from '../../data/departements/81-tarn/departement-81-tarn.geojson'
import arrondissements_tarn from '../../data/departements/81-tarn/arrondissements-81-tarn.geojson'
import cantons_tarn from '../../data/departements/81-tarn/cantons-81-tarn.geojson'
import communes_tarn from '../../data/departements/81-tarn/communes-81-tarn.geojson'

import tarn_et_garonne from '../../data/departements/82-tarn-et-garonne/departement-82-tarn-et-garonne.geojson'
import arrondissements_tarn_et_garonne from '../../data/departements/82-tarn-et-garonne/arrondissements-82-tarn-et-garonne.geojson'
import cantons_tarn_et_garonne from '../../data/departements/82-tarn-et-garonne/cantons-82-tarn-et-garonne.geojson'
import communes_tarn_et_garonne from '../../data/departements/82-tarn-et-garonne/communes-82-tarn-et-garonne.geojson'

import var_ from '../../data/departements/83-var/departement-83-var.geojson'
import arrondissements_var from '../../data/departements/83-var/arrondissements-83-var.geojson'
import cantons_var from '../../data/departements/83-var/cantons-83-var.geojson'
import communes_var from '../../data/departements/83-var/communes-83-var.geojson'

import vaucluse from '../../data/departements/84-vaucluse/departement-84-vaucluse.geojson'
import arrondissements_vaucluse from '../../data/departements/84-vaucluse/arrondissements-84-vaucluse.geojson'
import cantons_vaucluse from '../../data/departements/84-vaucluse/cantons-84-vaucluse.geojson'
import communes_vaucluse from '../../data/departements/84-vaucluse/communes-84-vaucluse.geojson'

import vendee from '../../data/departements/85-vendee/departement-85-vendee.geojson'
import arrondissements_vendee from '../../data/departements/85-vendee/arrondissements-85-vendee.geojson'
import cantons_vendee from '../../data/departements/85-vendee/cantons-85-vendee.geojson'
import communes_vendee from '../../data/departements/85-vendee/communes-85-vendee.geojson'

import vienne from '../../data/departements/86-vienne/departement-86-vienne.geojson'
import arrondissements_vienne from '../../data/departements/86-vienne/arrondissements-86-vienne.geojson'
import cantons_vienne from '../../data/departements/86-vienne/cantons-86-vienne.geojson'
import communes_vienne from '../../data/departements/86-vienne/communes-86-vienne.geojson'

import haute_vienne from '../../data/departements/87-haute-vienne/departement-87-haute-vienne.geojson'
import arrondissements_haute_vienne from '../../data/departements/87-haute-vienne/arrondissements-87-haute-vienne.geojson'
import cantons_haute_vienne from '../../data/departements/87-haute-vienne/cantons-87-haute-vienne.geojson'
import communes_haute_vienne from '../../data/departements/87-haute-vienne/communes-87-haute-vienne.geojson'

import vosges from '../../data/departements/88-vosges/departement-88-vosges.geojson'
import arrondissements_vosges from '../../data/departements/88-vosges/arrondissements-88-vosges.geojson'
import cantons_vosges from '../../data/departements/88-vosges/cantons-88-vosges.geojson'
import communes_vosges from '../../data/departements/88-vosges/communes-88-vosges.geojson'

import yonne from '../../data/departements/89-yonne/departement-89-yonne.geojson'
import arrondissements_yonne from '../../data/departements/89-yonne/arrondissements-89-yonne.geojson'
import cantons_yonne from '../../data/departements/89-yonne/cantons-89-yonne.geojson'
import communes_yonne from '../../data/departements/89-yonne/communes-89-yonne.geojson'

import territoire_de_belfort from '../../data/departements/90-territoire-de-belfort/departement-90-territoire-de-belfort.geojson'
import arrondissements_territoire_de_belfort from '../../data/departements/90-territoire-de-belfort/arrondissements-90-territoire-de-belfort.geojson'
import cantons_territoire_de_belfort from '../../data/departements/90-territoire-de-belfort/cantons-90-territoire-de-belfort.geojson'
import communes_territoire_de_belfort from '../../data/departements/90-territoire-de-belfort/communes-90-territoire-de-belfort.geojson'

import essonne from '../../data/departements/91-essonne/departement-91-essonne.geojson'
import arrondissements_essonne from '../../data/departements/91-essonne/arrondissements-91-essonne.geojson'
import cantons_essonne from '../../data/departements/91-essonne/cantons-91-essonne.geojson'
import communes_essonne from '../../data/departements/91-essonne/communes-91-essonne.geojson'

import hauts_de_seine from '../../data/departements/92-hauts-de-seine/departement-92-hauts-de-seine.geojson'
import arrondissements_hauts_de_seine from '../../data/departements/92-hauts-de-seine/arrondissements-92-hauts-de-seine.geojson'
import cantons_hauts_de_seine from '../../data/departements/92-hauts-de-seine/cantons-92-hauts-de-seine.geojson'
import communes_hauts_de_seine from '../../data/departements/92-hauts-de-seine/communes-92-hauts-de-seine.geojson'

import seine_saint_denis from '../../data/departements/93-seine-saint-denis/departement-93-seine-saint-denis.geojson'
import arrondissements_seine_saint_denis from '../../data/departements/93-seine-saint-denis/arrondissements-93-seine-saint-denis.geojson'
import cantons_seine_saint_denis from '../../data/departements/93-seine-saint-denis/cantons-93-seine-saint-denis.geojson'
import communes_seine_saint_denis from '../../data/departements/93-seine-saint-denis/communes-93-seine-saint-denis.geojson'

import val_de_marne from '../../data/departements/94-val-de-marne/departement-94-val-de-marne.geojson'
import arrondissements_val_de_marne from '../../data/departements/94-val-de-marne/arrondissements-94-val-de-marne.geojson'
import cantons_val_de_marne from '../../data/departements/94-val-de-marne/cantons-94-val-de-marne.geojson'
import communes_val_de_marne from '../../data/departements/94-val-de-marne/communes-94-val-de-marne.geojson'

import val_d_oise from '../../data/departements/95-val-d-oise/departement-95-val-d-oise.geojson'
import arrondissements_val_d_oise from '../../data/departements/95-val-d-oise/arrondissements-95-val-d-oise.geojson'
import cantons_val_d_oise from '../../data/departements/95-val-d-oise/cantons-95-val-d-oise.geojson'
import communes_val_d_oise from '../../data/departements/95-val-d-oise/communes-95-val-d-oise.geojson'

import guadeloupe from '../../data/departements/971-guadeloupe/departement-971-guadeloupe.geojson'
import arrondissements_guadeloupe from '../../data/departements/971-guadeloupe/arrondissements-971-guadeloupe.geojson'
import cantons_guadeloupe from '../../data/departements/971-guadeloupe/cantons-971-guadeloupe.geojson'
import communes_guadeloupe from '../../data/departements/971-guadeloupe/communes-971-guadeloupe.geojson'

import martinique from '../../data/departements/972-martinique/departement-972-martinique.geojson'
import arrondissements_martinique from '../../data/departements/972-martinique/arrondissements-972-martinique.geojson'
import cantons_martinique from '../../data/departements/972-martinique/cantons-972-martinique.geojson'
import communes_martinique from '../../data/departements/972-martinique/communes-972-martinique.geojson'

import guyane from '../../data/departements/973-guyane/departement-973-guyane.geojson'
import arrondissements_guyane from '../../data/departements/973-guyane/arrondissements-973-guyane.geojson'
import cantons_guyane from '../../data/departements/973-guyane/cantons-973-guyane.geojson'
import communes_guyane from '../../data/departements/973-guyane/communes-973-guyane.geojson'

import la_reunion from '../../data/departements/974-la-reunion/departement-974-la-reunion.geojson'
import arrondissements_la_reunion from '../../data/departements/974-la-reunion/arrondissements-974-la-reunion.geojson'
import cantons_la_reunion from '../../data/departements/974-la-reunion/cantons-974-la-reunion.geojson'
import communes_la_reunion from '../../data/departements/974-la-reunion/communes-974-la-reunion.geojson'

import mayotte from '../../data/departements/976-mayotte/departement-976-mayotte.geojson'
import arrondissements_mayotte from '../../data/departements/976-mayotte/arrondissements-976-mayotte.geojson'
import cantons_mayotte from '../../data/departements/976-mayotte/cantons-976-mayotte.geojson'
import communes_mayotte from '../../data/departements/976-mayotte/communes-976-mayotte.geojson'

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
    'Alsace': {
        'GeoJSON': alsace,
        'Départements': departements_alsace,
        'Arrondissements': arrondissements_alsace,
        'Cantons': cantons_alsace,
        'Communes': communes_alsace,
    },
    'Aquitaine': {
        'GeoJSON': aquitaine,
        'Départements': departements_aquitaine,
        'Arrondissements': arrondissements_aquitaine,
        'Cantons': cantons_aquitaine,
        'Communes': communes_aquitaine,
    },
    'Auvergne': {
        'GeoJSON': auvergne,
        'Départements': departements_auvergne,
        'Arrondissements': arrondissements_auvergne,
        'Cantons': cantons_auvergne,
        'Communes': communes_auvergne,
    },
    'Basse-Normandie': {
        'GeoJSON': basse_normandie,
        'Départements': departements_basse_normandie,
        'Arrondissements': arrondissements_basse_normandie,
        'Cantons': cantons_basse_normandie,
        'Communes': communes_basse_normandie,
    },
    'Bourgogne': {
        'GeoJSON': bourgogne,
        'Départements': departements_bourgogne,
        'Arrondissements': arrondissements_bourgogne,
        'Cantons': cantons_bourgogne,
        'Communes': communes_bourgogne,
    },
    'Champagne-Ardenne': {
        'GeoJSON': champagne_ardenne,
        'Départements': departements_champagne_ardenne,
        'Arrondissements': arrondissements_champagne_ardenne,
        'Cantons': cantons_champagne_ardenne,
        'Communes': communes_champagne_ardenne,
    },
    'Franche-Comté': {
        'GeoJSON': franche_comte,
        'Départements': departements_franche_comte,
        'Arrondissements': arrondissements_franche_comte,
        'Cantons': cantons_franche_comte,
        'Communes': communes_franche_comte,
    },
    'Haute-Normandie': {
        'GeoJSON': haute_normandie,
        'Départements': departements_haute_normandie,
        'Arrondissements': arrondissements_haute_normandie,
        'Cantons': cantons_haute_normandie,
        'Communes': communes_haute_normandie,
    },
    'Languedoc-Roussillon': {
        'GeoJSON': languedoc_roussillon,
        'Départements': departements_languedoc_roussillon,
        'Arrondissements': arrondissements_languedoc_roussillon,
        'Cantons': cantons_languedoc_roussillon,
        'Communes': communes_languedoc_roussillon,
    },
    'Limousin': {
        'GeoJSON': limousin,
        'Départements': departements_limousin,
        'Arrondissements': arrondissements_limousin,
        'Cantons': cantons_limousin,
        'Communes': communes_limousin,
    },
    'Lorraine': {
        'GeoJSON': lorraine,
        'Départements': departements_lorraine,
        'Arrondissements': arrondissements_lorraine,
        'Cantons': cantons_lorraine,
        'Communes': communes_lorraine,
    },
    'Midi-Pyrénées': {
        'GeoJSON': midi_pyrenees,
        'Départements': departements_midi_pyrenees,
        'Arrondissements': arrondissements_midi_pyrenees,
        'Cantons': cantons_midi_pyrenees,
        'Communes': communes_midi_pyrenees,
    },
    'Nord-Pas-de-Calais': {
        'GeoJSON': nord_pas_de_calais,
        'Départements': departements_nord_pas_de_calais,
        'Arrondissements': arrondissements_nord_pas_de_calais,
        'Cantons': cantons_nord_pas_de_calais,
        'Communes': communes_nord_pas_de_calais,
    },
    'Picardie': {
        'GeoJSON': picardie,
        'Départements': departements_picardie,
        'Arrondissements': arrondissements_picardie,
        'Cantons': cantons_picardie,
        'Communes': communes_picardie,
    },
    'Poitou-Charentes': {
        'GeoJSON': poitou_charentes,
        'Départements': departements_poitou_charentes,
        'Arrondissements': arrondissements_poitou_charentes,
        'Cantons': cantons_poitou_charentes,
        'Communes': communes_poitou_charentes,
    },
    'Rhône-Alpes': {
        'GeoJSON': rhone_alpes,
        'Départements': departements_rhone_alpes,
        'Arrondissements': arrondissements_rhone_alpes,
        'Cantons': cantons_rhone_alpes,
        'Communes': communes_rhone_alpes,
    },
    'Guadeloupe': {
        'GeoJSON': guadeloupe,
        'Arrondissements': arrondissements_guadeloupe,
        'Cantons': cantons_guadeloupe,
        'Communes': communes_guadeloupe,
    },
    'Martinique': {
        'GeoJSON': martinique,
        'Arrondissements': arrondissements_martinique,
        'Cantons': cantons_martinique,
        'Communes': communes_martinique,
    },
    'Mayotte': {
        'GeoJSON': mayotte,
        'Arrondissements': arrondissements_mayotte,
        'Cantons': cantons_mayotte,
        'Communes': communes_mayotte,
    },
    'La Réunion': {
        'GeoJSON': la_reunion,
        'Arrondissements': arrondissements_la_reunion,
        'Cantons': cantons_la_reunion,
        'Communes': communes_la_reunion,
    },
    'Guyane': {
        'GeoJSON': guyane,
        'Arrondissements': arrondissements_guyane,
        'Cantons': cantons_guyane,
        'Communes': communes_guyane,
    },
    'Ain': {
        'GeoJSON': ain,
        'Arrondissements': arrondissements_ain,
        'Cantons': cantons_ain,
        'Communes': communes_ain,
    },
    'Aisne': {
        'GeoJSON': aisne,
        'Arrondissements': arrondissements_aisne,
        'Cantons': cantons_aisne,
        'Communes': communes_aisne,
    },
    'Allier': {
        'GeoJSON': allier,
        'Arrondissements': arrondissements_allier,
        'Cantons': cantons_allier,
        'Communes': communes_allier,
    },
    'Alpes-de-Haute-Provence': {
        'GeoJSON': alpes_de_haute_provence,
        'Arrondissements': arrondissements_alpes_de_haute_provence,
        'Cantons': cantons_alpes_de_haute_provence,
        'Communes': communes_alpes_de_haute_provence,
    },
    'Hautes-Alpes': {
        'GeoJSON': hautes_alpes,
        'Arrondissements': arrondissements_hautes_alpes,
        'Cantons': cantons_hautes_alpes,
        'Communes': communes_hautes_alpes,
    },
    'Alpes-Maritimes': {
        'GeoJSON': alpes_maritimes,
        'Arrondissements': arrondissements_alpes_maritimes,
        'Cantons': cantons_alpes_maritimes,
        'Communes': communes_alpes_maritimes,
    },
    'Ardèche': {
        'GeoJSON': ardeche,
        'Arrondissements': arrondissements_ardeche,
        'Cantons': cantons_ardeche,
        'Communes': communes_ardeche,
    },
    'Ardennes': {
        'GeoJSON': ardennes,
        'Arrondissements': arrondissements_ardennes,
        'Cantons': cantons_ardennes,
        'Communes': communes_ardennes,
    },
    'Ariège': {
        'GeoJSON': ariege,
        'Arrondissements': arrondissements_ariege,
        'Cantons': cantons_ariege,
        'Communes': communes_ariege,
    },
    'Aube': {
        'GeoJSON': aube,
        'Arrondissements': arrondissements_aube,
        'Cantons': cantons_aube,
        'Communes': communes_aube,
    },
    'Aude': {
        'GeoJSON': aude,
        'Arrondissements': arrondissements_aude,
        'Cantons': cantons_aude,
        'Communes': communes_aude,
    },
    'Aveyron': {
        'GeoJSON': aveyron,
        'Arrondissements': arrondissements_aveyron,
        'Cantons': cantons_aveyron,
        'Communes': communes_aveyron,
    },
    'Bouches-du-Rhône': {
        'GeoJSON': bouches_de_rhone,
        'Arrondissements': arrondissements_bouches_de_rhone,
        'Cantons': cantons_bouches_de_rhone,
        'Communes': communes_bouches_de_rhone,
    },
    'Calvados': {
        'GeoJSON': calvados,
        'Arrondissements': arrondissements_calvados,
        'Cantons': cantons_calvados,
        'Communes': communes_calvados,
    },
    'Cantal': {
        'GeoJSON': cantal,
        'Arrondissements': arrondissements_cantal,
        'Cantons': cantons_cantal,
        'Communes': communes_cantal,
    },
    'Charente': {
        'GeoJSON': charente,
        'Arrondissements': arrondissements_charente,
        'Cantons': cantons_charente,
        'Communes': communes_charente,
    },
    'Charente-Maritime': {
        'GeoJSON': charente_maritime,
        'Arrondissements': arrondissements_charente_maritime,
        'Cantons': cantons_charente_maritime,
        'Communes': communes_charente_maritime,
    },
    'Cher': {
        'GeoJSON': cher,
        'Arrondissements': arrondissements_cher,
        'Cantons': cantons_cher,
        'Communes': communes_cher,
    },
    'Corrèze': {
        'GeoJSON': correze,
        'Arrondissements': arrondissements_correze,
        'Cantons': cantons_correze,
        'Communes': communes_correze,
    },
    'Corse-du-Sud': {
        'GeoJSON': corse_de_sud,
        'Arrondissements': arrondissements_corse_de_sud,
        'Cantons': cantons_corse_de_sud,
        'Communes': communes_corse_de_sud,
    },
    'Haute-Corse': {
        'GeoJSON': haute_corse,
        'Arrondissements': arrondissements_haute_corse,
        'Cantons': cantons_haute_corse,
        'Communes': communes_haute_corse,
    },
    'Côte-d\'Or': {
        'GeoJSON': cote_d_or,
        'Arrondissements': arrondissements_cote_d_or,
        'Cantons': cantons_cote_d_or,
        'Communes': communes_cote_d_or,
    },
    'Côtes d\'Armor': {
        'GeoJSON': cotes_d_armor,
        'Arrondissements': arrondissements_cotes_d_armor,
        'Cantons': cantons_cotes_d_armor,
        'Communes': communes_cotes_d_armor,
    },
    'Creuse': {
        'GeoJSON': creuse,
        'Arrondissements': arrondissements_creuse,
        'Cantons': cantons_creuse,
        'Communes': communes_creuse,
    },
    'Dordogne': {
        'GeoJSON': dordogne,
        'Arrondissements': arrondissements_dordogne,
        'Cantons': cantons_dordogne,
        'Communes': communes_dordogne,
    },
    'Doubs': {
        'GeoJSON': doubs,
        'Arrondissements': arrondissements_doubs,
        'Cantons': cantons_doubs,
        'Communes': communes_doubs,
    },
    'Drôme': {
        'GeoJSON': drome,
        'Arrondissements': arrondissements_drome,
        'Cantons': cantons_drome,
        'Communes': communes_drome,
    },
    'Eure': {
        'GeoJSON': eure,
        'Arrondissements': arrondissements_eure,
        'Cantons': cantons_eure,
        'Communes': communes_eure,
    },
    'Eure-et-Loir': {
        'GeoJSON': eure_et_loir,
        'Arrondissements': arrondissements_eure_et_loir,
        'Cantons': cantons_eure_et_loir,
        'Communes': communes_eure_et_loir,
    },
    'Finistère': {
        'GeoJSON': finistere,
        'Arrondissements': arrondissements_finistere,
        'Cantons': cantons_finistere,
        'Communes': communes_finistere,
    },
    'Gard': {
        'GeoJSON': gard,
        'Arrondissements': arrondissements_gard,
        'Cantons': cantons_gard,
        'Communes': communes_gard,
    },
    'Haute-Garonne': {
        'GeoJSON': haute_garonne,
        'Arrondissements': arrondissements_haute_garonne,
        'Cantons': cantons_haute_garonne,
        'Communes': communes_haute_garonne,
    },
    'Gers': {
        'GeoJSON': gers,
        'Arrondissements': arrondissements_gers,
        'Cantons': cantons_gers,
        'Communes': communes_gers,
    },
    'Gironde': {
        'GeoJSON': gironde,
        'Arrondissements': arrondissements_gironde,
        'Cantons': cantons_gironde,
        'Communes': communes_gironde,
    },
    'Hérault': {
        'GeoJSON': herault,
        'Arrondissements': arrondissements_herault,
        'Cantons': cantons_herault,
        'Communes': communes_herault,
    },
    'Ille-et-Vilaine': {
        'GeoJSON': ile_et_vilaine,
        'Arrondissements': arrondissements_ile_et_vilaine,
        'Cantons': cantons_ile_et_vilaine,
        'Communes': communes_ile_et_vilaine,
    },
    'Indre': {
        'GeoJSON': indre,
        'Arrondissements': arrondissements_indre,
        'Cantons': cantons_indre,
        'Communes': communes_indre,
    },
    'Indre-et-Loire': {
        'GeoJSON': indre_et_loire,
        'Arrondissements': arrondissements_indre_et_loire,
        'Cantons': cantons_indre_et_loire,
        'Communes': communes_indre_et_loire,
    },
    'Isère': {
        'GeoJSON': isere,
        'Arrondissements': arrondissements_isere,
        'Cantons': cantons_isere,
        'Communes': communes_isere,
    },
    'Jura': {
        'GeoJSON': jura,
        'Arrondissements': arrondissements_jura,
        'Cantons': cantons_jura,
        'Communes': communes_jura,
    },
    'Landes': {
        'GeoJSON': landes,
        'Arrondissements': arrondissements_landes,
        'Cantons': cantons_landes,
        'Communes': communes_landes,
    },
    'Loir-et-Cher': {
        'GeoJSON': loir_et_cher,
        'Arrondissements': arrondissements_loir_et_cher,
        'Cantons': cantons_loir_et_cher,
        'Communes': communes_loir_et_cher,
    },
    'Loire': {
        'GeoJSON': loire,
        'Arrondissements': arrondissements_loire,
        'Cantons': cantons_loire,
        'Communes': communes_loire,
    },
    'Haute-Loire': {
        'GeoJSON': haute_loire,
        'Arrondissements': arrondissements_haute_loire,
        'Cantons': cantons_haute_loire,
        'Communes': communes_haute_loire,
    },
    'Loire-Atlantique': {
        'GeoJSON': loire_atlantique,
        'Arrondissements': arrondissements_loire_atlantique,
        'Cantons': cantons_loire_atlantique,
        'Communes': communes_loire_atlantique,
    },
    'Loiret': {
        'GeoJSON': loiret,
        'Arrondissements': arrondissements_loiret,
        'Cantons': cantons_loiret,
        'Communes': communes_loiret,
    },
    'Lot': {
        'GeoJSON': lot,
        'Arrondissements': arrondissements_lot,
        'Cantons': cantons_lot,
        'Communes': communes_lot,
    },
    'Lot-et-Garonne': {
        'GeoJSON': lot_et_garonne,
        'Arrondissements': arrondissements_lot_et_garonne,
        'Cantons': cantons_lot_et_garonne,
        'Communes': communes_lot_et_garonne,
    },
    'Lozère': {
        'GeoJSON': lozere,
        'Arrondissements': arrondissements_lozere,
        'Cantons': cantons_lozere,
        'Communes': communes_lozere,
    },
    'Maine-et-Loire': {
        'GeoJSON': maine_et_loire,
        'Arrondissements': arrondissements_maine_et_loire,
        'Cantons': cantons_maine_et_loire,
        'Communes': communes_maine_et_loire,
    },
    'Manche': {
        'GeoJSON': manche,
        'Arrondissements': arrondissements_manche,
        'Cantons': cantons_manche,
        'Communes': communes_manche,
    },
    'Marne': {
        'GeoJSON': marne,
        'Arrondissements': arrondissements_marne,
        'Cantons': cantons_marne,
        'Communes': communes_marne,
    },
    'Haute-Marne': {
        'GeoJSON': haute_marne,
        'Arrondissements': arrondissements_haute_marne,
        'Cantons': cantons_haute_marne,
        'Communes': communes_haute_marne,
    },
    'Mayenne': {
        'GeoJSON': mayenne,
        'Arrondissements': arrondissements_mayenne,
        'Cantons': cantons_mayenne,
        'Communes': communes_mayenne,
    },
    'Meurthe-et-Moselle': {
        'GeoJSON': meurthe_et_moselle,
        'Arrondissements': arrondissements_meurthe_et_moselle,
        'Cantons': cantons_meurthe_et_moselle,
        'Communes': communes_meurthe_et_moselle,
    },
    'Meuse': {
        'GeoJSON': meuse,
        'Arrondissements': arrondissements_meuse,
        'Cantons': cantons_meuse,
        'Communes': communes_meuse,
    },
    'Morbihan': {
        'GeoJSON': morbihan,
        'Arrondissements': arrondissements_morbihan,
        'Cantons': cantons_morbihan,
        'Communes': communes_morbihan,
    },
    'Moselle': {
        'GeoJSON': moselle,
        'Arrondissements': arrondissements_moselle,
        'Cantons': cantons_moselle,
        'Communes': communes_moselle,
    },
    'Nièvre': {
        'GeoJSON': nievre,
        'Arrondissements': arrondissements_nievre,
        'Cantons': cantons_nievre,
        'Communes': communes_nievre,
    },
    'Nord': {
        'GeoJSON': nord,
        'Arrondissements': arrondissements_nord,
        'Cantons': cantons_nord,
        'Communes': communes_nord,
    },
    'Oise': {
        'GeoJSON': oise,
        'Arrondissements': arrondissements_oise,
        'Cantons': cantons_oise,
        'Communes': communes_oise,
    },
    'Orne': {
        'GeoJSON': orne,
        'Arrondissements': arrondissements_orne,
        'Cantons': cantons_orne,
        'Communes': communes_orne,
    },
    'Pas-de-Calais': {
        'GeoJSON': pas_de_calais,
        'Arrondissements': arrondissements_pas_de_calais,
        'Cantons': cantons_pas_de_calais,
        'Communes': communes_pas_de_calais,
    },
    'Puy-de-Dôme': {
        'GeoJSON': puy_de_dome,
        'Arrondissements': arrondissements_puy_de_dome,
        'Cantons': cantons_puy_de_dome,
        'Communes': communes_puy_de_dome,
    },
    'Pyrénées-Atlantiques': {
        'GeoJSON': pyrenees_atlantiques,
        'Arrondissements': arrondissements_pyrenees_atlantiques,
        'Cantons': cantons_pyrenees_atlantiques,
        'Communes': communes_pyrenees_atlantiques,
    },
    'Hautes-Pyrénées': {
        'GeoJSON': hautes_pyrenees,
        'Arrondissements': arrondissements_hautes_pyrenees,
        'Cantons': cantons_hautes_pyrenees,
        'Communes': communes_hautes_pyrenees,
    },
    'Pyrénées-Orientales': {
        'GeoJSON': pyrenees_orientales,
        'Arrondissements': arrondissements_pyrenees_orientales,
        'Cantons': cantons_pyrenees_orientales,
        'Communes': communes_pyrenees_orientales,
    },
    'Bas-Rhin': {
        'GeoJSON': bas_rhin,
        'Arrondissements': arrondissements_bas_rhin,
        'Cantons': cantons_bas_rhin,
        'Communes': communes_bas_rhin,
    },
    'Haut-Rhin': {
        'GeoJSON': haut_rhin,
        'Arrondissements': arrondissements_haut_rhin,
        'Cantons': cantons_haut_rhin,
        'Communes': communes_haut_rhin,
    },
    'Rhône': {
        'GeoJSON': rhone,
        'Arrondissements': arrondissements_rhone,
        'Cantons': cantons_rhone,
        'Communes': communes_rhone,
    },
    'Haute-Saône': {
        'GeoJSON': haute_saone,
        'Arrondissements': arrondissements_haute_saone,
        'Cantons': cantons_haute_saone,
        'Communes': communes_haute_saone,
    },
    'Saône-et-Loire': {
        'GeoJSON': saone_et_loire,
        'Arrondissements': arrondissements_saone_et_loire,
        'Cantons': cantons_saone_et_loire,
        'Communes': communes_saone_et_loire,
    },
    'Sarthe': {
        'GeoJSON': sarthe,
        'Arrondissements': arrondissements_sarthe,
        'Cantons': cantons_sarthe,
        'Communes': communes_sarthe,
    },
    'Savoie': {
        'GeoJSON': savoie,
        'Arrondissements': arrondissements_savoie,
        'Cantons': cantons_savoie,
        'Communes': communes_savoie,
    },
    'Haute-Savoie': {
        'GeoJSON': haute_savoie,
        'Arrondissements': arrondissements_haute_savoie,
        'Cantons': cantons_haute_savoie,
        'Communes': communes_haute_savoie,
    },
    'Paris': {
        'GeoJSON': paris,
        'Arrondissements': arrondissements_paris,
        'Cantons': cantons_paris,
        'Communes': communes_paris,
    },
    'Seine-Maritime': {
        'GeoJSON': seine_maritime,
        'Arrondissements': arrondissements_seine_maritime,
        'Cantons': cantons_seine_maritime,
        'Communes': communes_seine_maritime,
    },
    'Seine-et-Marne': {
        'GeoJSON': seine_et_marne,
        'Arrondissements': arrondissements_seine_et_marne,
        'Cantons': cantons_seine_et_marne,
        'Communes': communes_seine_et_marne,
    },
    'Yvelines': {
        'GeoJSON': yvelines,
        'Arrondissements': arrondissements_yvelines,
        'Cantons': cantons_yvelines,
        'Communes': communes_yvelines,
    },
    'Deux-Sèvres': {
        'GeoJSON': deux_sevres,
        'Arrondissements': arrondissements_deux_sevres,
        'Cantons': cantons_deux_sevres,
        'Communes': communes_deux_sevres,
    },
    'Somme': {
        'GeoJSON': somme,
        'Arrondissements': arrondissements_somme,
        'Cantons': cantons_somme,
        'Communes': communes_somme,
    },
    'Tarn': {
        'GeoJSON': tarn,
        'Arrondissements': arrondissements_tarn,
        'Cantons': cantons_tarn,
        'Communes': communes_tarn,
    },
    'Tarn-et-Garonne': {
        'GeoJSON': tarn_et_garonne,
        'Arrondissements': arrondissements_tarn_et_garonne,
        'Cantons': cantons_tarn_et_garonne,
        'Communes': communes_tarn_et_garonne,
    },
    'Var': {
        'GeoJSON': var_,
        'Arrondissements': arrondissements_var,
        'Cantons': cantons_var,
        'Communes': communes_var,
    },
    'Vaucluse': {
        'GeoJSON': vaucluse,
        'Arrondissements': arrondissements_vaucluse,
        'Cantons': cantons_vaucluse,
        'Communes': communes_vaucluse,
    },
    'Vendée': {
        'GeoJSON': vendee,
        'Arrondissements': arrondissements_vendee,
        'Cantons': cantons_vendee,
        'Communes': communes_vendee,
    },
    'Vienne': {
        'GeoJSON': vienne,
        'Arrondissements': arrondissements_vienne,
        'Cantons': cantons_vienne,
        'Communes': communes_vienne,
    },
    'Haute-Vienne': {
        'GeoJSON': haute_vienne,
        'Arrondissements': arrondissements_haute_vienne,
        'Cantons': cantons_haute_vienne,
        'Communes': communes_haute_vienne,
    },
    'Vosges': {
        'GeoJSON': vosges,
        'Arrondissements': arrondissements_vosges,
        'Cantons': cantons_vosges,
        'Communes': communes_vosges,
    },
    'Yonne': {
        'GeoJSON': yonne,
        'Arrondissements': arrondissements_yonne,
        'Cantons': cantons_yonne,
        'Communes': communes_yonne,
    },
    'Territoire de Belfort': {
        'GeoJSON': territoire_de_belfort,
        'Arrondissements': arrondissements_territoire_de_belfort,
        'Cantons': cantons_territoire_de_belfort,
        'Communes': communes_territoire_de_belfort,
    },
    'Essonne': {
        'GeoJSON': essonne,
        'Arrondissements': arrondissements_essonne,
        'Cantons': cantons_essonne,
        'Communes': communes_essonne,
    },
    'Hauts-de-Seine': {
        'GeoJSON': hauts_de_seine,
        'Arrondissements': arrondissements_hauts_de_seine,
        'Cantons': cantons_hauts_de_seine,
        'Communes': communes_hauts_de_seine,
    },
    'Seine-Saint-Denis': {
        'GeoJSON': seine_saint_denis,
        'Arrondissements': arrondissements_seine_saint_denis,
        'Cantons': cantons_seine_saint_denis,
        'Communes': communes_seine_saint_denis,
    },
    'Val-de-Marne': {
        'GeoJSON': val_de_marne,
        'Arrondissements': arrondissements_val_de_marne,
        'Cantons': cantons_val_de_marne,
        'Communes': communes_val_de_marne,
    },
    'Val-d\'Oise': {
        'GeoJSON': val_d_oise,
        'Arrondissements': arrondissements_val_d_oise,
        'Cantons': cantons_val_d_oise,
        'Communes': communes_val_d_oise,
    }
}