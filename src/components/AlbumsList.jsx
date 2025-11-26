import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store"
import Skeleton from "./Skeleton";
import Button from './Button'
import ExpandablePanel from "./ExpandablePanel";

export default function AlbumsList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const { addAlbum, results } = useAddAlbumMutation();
  //console.log(data, error, isLoading)
  console.log(results)

  let content;
  if(isLoading) {
    content = <Skeleton times={3}/>
  } else if(error) {
    content = <div>Error Loading Albums</div>
  } else {
    content = data.map(album => {
      const header = <div>{album.title}</div>
      return <ExpandablePanel key={album} header={header}>List of Photos in Album</ExpandablePanel>
    })
  }

  return (
    <div>
    <div>Albums for {user.name} </div>
    <Button onClick={handleAddAlbum}>+ Album</Button>
    <div>{content}</div>
    </div>
  )
}
