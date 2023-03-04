import React from 'react'
import * as topojson from 'topojson-client'
import { GeoJSON } from 'react-leaflet'

const TopoJSON = (props) => {
    const layerRef = React.useRef(null);
    const { data, ...otherProps } = props;

    function addData(layer, jsonData) {
        if (jsonData.type === "Topology") {
            for (let key in jsonData.objects) {
                let geojson = topojson.feature(jsonData, jsonData.objects[key]);
                layer.addData(geojson);
            }
        } else {
            layer.addData(jsonData);
        }
    }

    React.useEffect(() => {
        const layer = layerRef.current;
        addData(layer, props.data);
    }, [props.data]);

    return (
        <GeoJSON ref={layerRef} {...otherProps} />
    );
}

export default React.memo(TopoJSON)