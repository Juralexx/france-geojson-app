import { departements_regions, departments, old_regions, regions } from "./api"
import { geojsons } from "./imports"

export const getZoom = (selectedType) => {
    if (selectedType === 'France' || selectedType === 'Régions' || selectedType === 'Anciennes régions')
        return 6
    else if (selectedType === 'Départements')
        return 9
    else if (selectedType === 'Arrondissements')
        return 11
    else if (selectedType === 'Cantons')
        return 12
    else if (selectedType === 'Communes')
        return 13
    else if (regions.includes(selectedType))
        return 8
    else if (old_regions.includes(selectedType))
        return 8
    else if (departments.includes(selectedType))
        return 9
    else
        return 6
}

/**
 * 
 */

export const getLevel = (selectedLevel) => {
    if (selectedLevel === 'France')
        return 0
    else if (selectedLevel === 'Régions' || selectedLevel === 'Région' || selectedLevel === 'Anciennes régions')
        return 1
    else if (selectedLevel === 'Départements' || selectedLevel === 'Département')
        return 2
    else if (selectedLevel === 'Arrondissements')
        return 3
    else if (selectedLevel === 'Cantons')
        return 4
    else if (selectedLevel === 'Communes')
        return 5
    else if (regions.includes(selectedLevel) || old_regions.includes(selectedLevel))
        return 1
    else if (departments.includes(selectedLevel))
        return 2
    else
        return 0
}

/**
 * 
 */

export const getArborescence = (type, name) => {
    switch (type) {
        case ('Régions' || 'Anciennes régions'): {
            const region = geojsons[name]
            return (
                [{
                    previous: type,
                    value: geojsons[type]
                }, {
                    name: name,
                    value: region['GeoJSON']
                }, {
                    name: 'Région',
                    value: region['GeoJSON'],
                }, {
                    name: 'Départements',
                    value: region['Départements'],
                }, {
                    name: 'Arrondissements',
                    value: region['Arrondissements'],
                }, {
                    name: 'Cantons',
                    value: region['Cantons'],
                }, {
                    name: 'Communes',
                    value: region['Communes'],
                }]
            )
        }
        case 'Départements': {
            const department = geojsons[name]
            const region = departements_regions.find(reg => reg['Départements'].some(dep => dep === name))
            return (
                [{
                    previous: region['Nom'],
                    value: geojsons[region['Nom']]['GeoJSON']
                }, {
                    name: name,
                    value: department['GeoJSON']
                }, {
                    name: 'Département',
                    value: department['GeoJSON'],
                }, {
                    name: 'Arrondissements',
                    value: department['Arrondissements'],
                }, {
                    name: 'Cantons',
                    value: department['Cantons'],
                }, {
                    name: 'Communes',
                    value: department['Communes'],
                }]
            )
        }
        default:
            break;
    }
}

export function getGeoJSONBounds(gj) {
    var coords, bbox;
    if (!gj.hasOwnProperty('type')) return;
    coords = getCoordinatesDump(gj);
    bbox = [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY,];
    return coords.reduce(function (prev, coord) {
        return [
            Math.min(coord[0], prev[0]),
            Math.min(coord[1], prev[1]),
            Math.max(coord[0], prev[2]),
            Math.max(coord[1], prev[3])
        ];
    }, bbox);
}

export function getCoordinatesDump(gj) {
    var coords;
    if (gj.type === 'Point') {
        coords = [gj.coordinates];
    } else if (gj.type === 'LineString' || gj.type === 'MultiPoint') {
        coords = gj.coordinates;
    } else if (gj.type === 'Polygon' || gj.type === 'MultiLineString') {
        coords = gj.coordinates.reduce(function (dump, part) {
            return dump.concat(part);
        }, []);
    } else if (gj.type === 'MultiPolygon') {
        coords = gj.coordinates.reduce(function (dump, poly) {
            return dump.concat(poly.reduce(function (points, part) {
                return points.concat(part);
            }, []));
        }, []);
    } else if (gj.type === 'Feature') {
        coords = getCoordinatesDump(gj.geometry);
    } else if (gj.type === 'GeometryCollection') {
        coords = gj.geometries.reduce(function (dump, g) {
            return dump.concat(getCoordinatesDump(g));
        }, []);
    } else if (gj.type === 'FeatureCollection') {
        coords = gj.features.reduce(function (dump, f) {
            return dump.concat(getCoordinatesDump(f));
        }, []);
    }
    return coords;
}