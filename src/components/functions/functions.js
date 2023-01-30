export const getZoom = (selectionType) => {
    switch (selectionType) {
        case 'France':
            return 6
        case 'Régions':
            return 8
        case 'Anciennes régions':
            return 8
        case 'Départements':
            return 10
        case 'Arrondissement':
            return 12
        case 'Cantons':
            return 13
        case 'Communes':
            return 14

        default:
            return 6
    }
}

export const getType = (selectionType) => {
    switch (selectionType) {
        case 'France':
            return 6
        case 'Régions':
            return 8
        case 'Anciennes régions':
            return 8
        case 'Départements':
            return 10
        case 'Arrondissement':
            return 12
        case 'Cantons':
            return 13
        case 'Communes':
            return 14

        default:
            return 6
    }
}


export const regions = [
    'Auvergne-Rhône-Alpes',
    'Bourgogne-Franche-Comté',
    'Bretagne',
    'Centre-Val de Loire',
    'Corse',
    'Grand Est',
    'Hauts-de-France',
    'Île-de-France',
    'Normandie',
    'Nouvelle-Aquitaine',
    'Occitanie',
    'Pays de la Loire',
    'Provence-Alpes-Côte d\'Azur',
    'Guadeloupe',
    'Martinique',
    'Guyane',
    'La Réunion',
    'Mayotte'
]

export const old_regions = [
    'Alsace',
    'Aquitaine',
    'Auvergne',
    'Basse-Normandie',
    'Bourgogne',
    'Bretagne',
    'Centre',
    'Champagne-Ardenne',
    'Corse',
    'Franche-Comté',
    'Haute-Normandie',
    'Île-de-France',
    'Languedoc-Roussillon',
    'Limousin',
    'Lorraine',
    'Midi-Pyrénées',
    'Nord-Pas-de-Calais',
    'Pays de la Loire',
    'Picardie',
    'Poitou-Charentes',
    'Provence-Alpes-Côte d\'Azur',
    'Rhône-Alpes'
]

export const departments = [
    'Ain',
    'Aisne',
    'Allier',
    'Alpes-de-Haute-Provence',
    'Hautes-Alpes',
    'Alpes-Maritimes',
    'Ardèche',
    'Ardennes',
    'Ariège',
    'Aube',
    'Aude',
    'Aveyron',
    'Bouches-du-Rhône',
    'Calvados',
    'Cantal',
    'Charente',
    'Charente-Maritime',
    'Cher',
    'Corrèze',
    'Corse-du-Sud',
    'Haute-Corse',
    'Côte-d\'Or',
    'Côtes d\'Armor',
    'Creuse',
    'Dordogne',
    'Doubs',
    'Drôme',
    'Eure',
    'Eure-et-Loir',
    'Finistère',
    'Gard',
    'Haute-Garonne',
    'Gers',
    'Gironde',
    'Hérault',
    'Ille-et-Vilaine',
    'Indre',
    'Indre-et-Loire',
    'Isère',
    'Jura',
    'Landes',
    'Loir-et-Cher',
    'Loire',
    'Haute-Loire',
    'Loire-Atlantique',
    'Loiret',
    'Lot',
    'Lot-et-Garonne',
    'Lozère',
    'Maine-et-Loire',
    'Manche',
    'Marne',
    'Haute-Marne',
    'Mayenne',
    'Meurthe-et-Moselle',
    'Meuse',
    'Morbihan',
    'Moselle',
    'Nièvre',
    'Nord',
    'Oise',
    'Orne',
    'Pas-de-Calais',
    'Puy-de-Dôme',
    'Pyrénées-Atlantiques',
    'Hautes-Pyrénées',
    'Pyrénées-Orientales',
    'Bas-Rhin',
    'Haut-Rhin',
    'Rhône',
    'Haute-Saône',
    'Saône-et-Loire',
    'Sarthe',
    'Savoie',
    'Haute-Savoie',
    'Paris',
    'Seine-Maritime',
    'Seine-et-Marne',
    'Yvelines',
    'Deux-Sèvres',
    'Somme',
    'Tarn',
    'Tarn-et-Garonne',
    'Var',
    'Vaucluse',
    'Vendée',
    'Vienne',
    'Haute-Vienne',
    'Vosges',
    'Yonne',
    'Territoire de Belfort',
    'Essonne',
    'Hauts-de-Seine',
    'Seine-Saint-Denis',
    'Val-de-Marne',
    'Val-d\'Oise',
    'Guadeloupe',
    'Martinique',
    'Guyane',
    'La Réunion',
    'Mayotte'
]

export const departements_regions = [
    {
        'Nom': 'Auvergne-Rhône-Alpes',
        'Departements': [
            'Ain',
            'Allier',
            'Ardèche',
            'Cantal',
            'Drôme',
            'Isère',
            'Loire',
            'Haute-Loire',
            'Puy-de-Dôme',
            'Rhône',
            'Savoie',
            'Haute-Savoie'
        ]
    },
    {
        'Nom': 'Bourgogne-Franche-Comté',
        'Departements': [
            'Côte-d\'Or',
            'Doubs',
            'Jura',
            'Nièvre',
            'Haute-Saône',
            'Saône-et-Loire',
            'Yonne',
            'Territoire de Belfort'
        ]
    },
    {
        'Nom': 'Bretagne',
        'Departements': [
            'Côtes-d\'Armor',
            'Finistère',
            'Ille-et-Vilaine',
            'Morbihan'
        ]
    },
    {
        'Nom': 'Centre-Val de Loire',
        'Departements': [
            'Cher',
            'Eure-et-Loir',
            'Indre',
            'Indre-et-Loire',
            'Loir-et-Cher',
            'Loiret'
        ]
    },
    {
        'Nom': 'Corse',
        'Departements': [
            'Corse-du-Sud',
            'Haute-Corse'
        ]
    },
    {
        'Nom': 'Grand Est',
        'Departements': [
            'Ardennes',
            'Aube',
            'Marne',
            'Haute-Marne',
            'Meurthe-et-Moselle',
            'Meuse',
            'Moselle',
            'Bas-Rhin',
            'Haut-Rhin',
            'Vosges'
        ]
    },
    {
        'Nom': 'Hauts-de-France',
        'Departements': [
            'Aisne',
            'Nord',
            'Oise',
            'Pas-de-Calais',
            'Somme'
        ]
    },
    {
        'Nom': 'Île-de-France',
        'Departements': [
            'Paris',
            'Seine-et-Marne',
            'Yvelines',
            'Essonne',
            'Hauts-de-Seine',
            'Seine-Saint-Denis',
            'Val-de-Marne',
            'Val-d\'Oise'
        ]
    },
    {
        'Nom': 'Normandie',
        'Departements': [
            'Calvados',
            'Eure',
            'Manche',
            'Orne',
            'Seine-Maritime'
        ]
    },
    {
        'Nom': 'Nouvelle-Aquitaine',
        'Departements': [
            'Charente',
            'Charente-Maritime',
            'Corrèze',
            'Creuse',
            'Dordogne',
            'Gironde',
            'Landes',
            'Lot-et-Garonne',
            'Pyrénées-Atlantiques',
            'Deux-Sèvres',
            'Vienne',
            'Haute-Vienne'
        ]
    },
    {
        'Nom': 'Occitanie',
        'Departements': [
            'Ariège',
            'Aude',
            'Aveyron',
            'Gard',
            'Haute-Garonne',
            'Gers',
            'Hérault',
            'Lot',
            'Lozère',
            'Hautes-Pyrénées',
            'Pyrénées-Orientales',
            'Tarn',
            'Tarn-et-Garonne'
        ]
    },
    {
        'Nom': 'Pays de la Loire',
        'Departements': [
            'Loire-Atlantique',
            'Maine-et-Loire',
            'Mayenne',
            'Sarthe',
            'Vendée'
        ]
    },
    {
        'Nom': 'Provence-Alpes-Côte d\'Azur',
        'Departements': [
            'Alpes-de-Haute-Provence',
            'Hautes-Alpes',
            'Alpes-Maritimes',
            'Bouches-du-Rhône',
            'Var',
            'Vaucluse'
        ]
    },
    {
        'Nom': 'Guadeloupe'
    },
    {
        'Nom': 'Martinique'
    },
    {
        'Nom': 'Guyane'
    },
    {
        'Nom': 'La Réunion'
    },
    {
        'Nom': 'Mayotte'
    }
]

export const departements_old_regions = [
    {
        'Nom': 'Alsace',
        'Departements': [
            'Bas-Rhin',
            'Haut-Rhin',
        ]
    },
    {
        'Nom': 'Aquitaine',
        'Departements': [
            'Dordogne',
            'Gironde',
            'Landes',
            'Lot-et-Garonne',
            'Pyrénées-Atlantiques',
        ]
    },
    {
        'Nom': 'Auvergne',
        'Departements': [
            'Allier',
            'Cantal',
            'Haute-Loire',
            'Puy-de-Dôme',
        ]
    },
    {
        'Nom': 'Basse Normandie',
        'Departements': [
            'Calvados',
            'Manche',
            'Orne',
        ]
    },
    {
        'Nom': 'Bourgogne',
        'Departements': [
            'Côte-d\'Or',
            'Nièvre',
            'Saône-et-Loire',
            'Yonne',
        ]
    },
    {
        'Nom': 'Bretagne',
        'Departements': [
            'Côtes-d\'Armor',
            'Finistère',
            'Ille-et-Vilaine',
            'Morbihan'
        ]
    },
    {
        'Nom': 'Centre-Val de Loire',
        'Departements': [
            'Cher',
            'Eure-et-Loir',
            'Indre',
            'Indre-et-Loire',
            'Loir-et-Cher',
            'Loiret'
        ]
    },
    {
        'Nom': 'Champagne-Ardenne',
        'Departements': [
            'Ardennes',
            'Aube',
            'Marne',
            'Haute-Marne',
        ]
    },
    {
        'Nom': 'Corse',
        'Departements': [
            'Corse-du-Sud',
            'Haute-Corse'
        ]
    },
    {
        'Nom': 'Franche-Comté',
        'Departements': [

        ]
    },
    {
        'Nom': '',
        'Departements': [
            'Doubs',
            'Jura',
            'Haute-Saône',
            'Territoire de Belfort'
        ]
    },
    {
        'Nom': 'Haute Normandie',
        'Departements': [
            'Eure',
            'Seine-Maritime'
        ]
    },
    {
        'Nom': 'Île-de-France',
        'Departements': [
            'Paris',
            'Seine-et-Marne',
            'Yvelines',
            'Essonne',
            'Hauts-de-Seine',
            'Seine-Saint-Denis',
            'Val-de-Marne',
            'Val-d\'Oise'
        ]
    },
    {
        'Nom': 'Languedoc Roussillon',
        'Departements': [
            'Aude',
            'Gard',
            'Hérault',
            'Lozère',
            'Pyrénées-Orientales',
        ]
    },
    {
        'Nom': 'Limousin',
        'Departements': [
            'Corrèze',
            'Creuse',
            'Haute-Vienne'
        ]
    },
    {
        'Nom': 'Lorraine',
        'Departements': [
            'Meurthe-et-Moselle',
            'Meuse',
            'Moselle',
            'Vosges'
        ]
    },
    {
        'Nom': 'Midi-Pyrénées',
        'Departements': [
            'Ariège',
            'Aveyron',
            'Haute-Garonne',
            'Gers',
            'Lot',
            'Hautes-Pyrénées',
            'Tarn',
            'Tarn-et-Garonne'
        ]
    },
    {
        'Nom': 'Nord-Pas-de-Calais',
        'Departements': [
            'Nord',
            'Pas-de-Calais',
        ]
    },
    {
        'Nom': 'Pays de la Loire',
        'Departements': [
            'Loire-Atlantique',
            'Maine-et-Loire',
            'Mayenne',
            'Sarthe',
            'Vendée'
        ]
    },
    {
        'Nom': 'Picardie',
        'Departements': [
            'Aisne',
            'Oise',
            'Somme'
        ]
    },
    {
        'Nom': 'Poitou-Charentes',
        'Departements': [
            'Charente',
            'Charente-Maritime',
            'Deux-Sèvres',
            'Vienne',
        ]
    },
    {
        'Nom': 'Provence-Alpes-Côte d\'Azur',
        'Departements': [
            'Alpes-de-Haute-Provence',
            'Hautes-Alpes',
            'Alpes-Maritimes',
            'Bouches-du-Rhône',
            'Var',
            'Vaucluse'
        ]
    },
    {
        'Nom': 'Rhône Alpes',
        'Departements': [
            'Ain',
            'Ardèche',
            'Drôme',
            'Isère',
            'Loire',
            'Rhône',
            'Savoie',
            'Haute-Savoie'
        ]
    },
    {
        'Nom': 'Guadeloupe'
    },
    {
        'Nom': 'Martinique'
    },
    {
        'Nom': 'Guyane'
    },
    {
        'Nom': 'La Réunion'
    },
    {
        'Nom': 'Mayotte'
    }
]