import React from 'react'
import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import { View } from 'react-native'

function PlaylistsScreenLayout() {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{
						headerTitle: 'Playlists',
					}}
				/>
			</Stack>
		</View>
	)
}

export default PlaylistsScreenLayout
