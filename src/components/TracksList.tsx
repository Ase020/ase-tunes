import library from '@/assets/data/library.json'
import { FlatList, FlatListProps } from 'react-native'
import TrackListItem from './TrackListItem'
export type TracksListProps = Partial<FlatListProps<unknown>>

function TracksList({ ...flatlistProps }: TracksListProps) {
	return (
		<FlatList
			data={library}
			renderItem={({ item: track }) => (
				<TrackListItem
					track={{
						...track,
						image: track.artwork,
					}}
				/>
			)}
			{...flatlistProps}
		/>
	)
}

export default TracksList
