import React, { useState, useCallback, memo, useRef, useContext } from 'react'

import GoogleMapsContext from '../../../context/GoogleMapsContext'

import {
	GoogleMap,
	useJsApiLoader,
	Marker,
	InfoWindow,
} from '@react-google-maps/api'

import mapStyles from './mapStyles'
import dibUrl from '../../../assets/google-maps/Marker.svg'

const containerStyle = {
	width: '100%',
	height: '100%',
	borderRadius: 16,
	overflow: 'hidden',
}

const mapOptions = {
	disableDefaultUI: true,
	styles: mapStyles,
	zoomControl: true,
}

const libraries = ['places']

function GoogleMaps() {
	const { isLoaded, loadError } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: 'AIzaSyC3GbmTmVZ_48oazWqcjczMuS8jV6CRFG0',
		libraries,
	})

	const { lat, lng, setCenterHandler } = useContext(GoogleMapsContext)

	const [map, setMap] = useState(null)
	const [dibs, setDibs] = useState([])
	const [selected, setSelected] = useState(null)

	const setDibsHandler = useCallback(
		(e) => {
			if (dibs.length === 5) {
				alert('Dibs limit reached. Subscribe to set more dibs')
				return
			}

			setDibs((prevState) => [
				...prevState,
				{
					lat: e.latLng.lat(),
					lng: e.latLng.lng(),
					time: new Date(),
				},
			])

			setCenterHandler({ lat: e.latLng.lat(), lng: e.latLng.lng() })
		},
		[dibs, setCenterHandler]
	)

	const mapRef = useRef()

	const onLoad = useCallback(
		function callback(map) {
			const bounds = new window.google.maps.LatLngBounds({
				lat: lat,
				lng: lng,
			})
			mapRef.current = map
			map.fitBounds(bounds)
			setMap(map)
		},
		[lat, lng]
	)

	const onUnmount = useCallback(function callback(map) {
		setMap(null)
	}, [])

	if (loadError) {
		return 'Failed to load Google Maps API'
	}
	if (!isLoaded) {
		return 'Fetching Google Maps API'
	}

	return isLoaded ? (
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={{
				lat: lat,
				lng: lng,
			}}
			zoom={32}
			onLoad={onLoad}
			onUnmount={onUnmount}
			options={mapOptions}
			onClick={setDibsHandler}
		>
			{dibs.map((dib) => (
				<Marker
					key={dib.time.toISOString()}
					position={{ lat: dib.lat, lng: dib.lng }}
					icon={{
						url: dibUrl,
						scaledSize: new window.google.maps.Size(22, 22),
						origin: new window.google.maps.Point(0, 0),
						anchor: new window.google.maps.Point(11, 11),
					}}
					onClick={() => {
						setSelected(dib)
					}}
				/>
			))}

			{selected ? (
				<InfoWindow
					position={{ lat: selected.lat, lng: selected.lng }}
					onCloseClick={() => {
						setSelected(null)
					}}
				>
					<div>
						<h1>Selected</h1>
						<h1>Dibs on this</h1>
					</div>
				</InfoWindow>
			) : null}
			<></>
		</GoogleMap>
	) : (
		<></>
	)
}

export default memo(GoogleMaps)
