import {Dispatch, SetStateAction } from 'react'
interface EventsBoxProps {
    events: EventsProps[]
}

interface EventsProps {
    id: number
    date: DateProps
    location: LocationProps
    price: string
}

interface DateProps {
    day: string
    month: string
}

interface LocationProps {
    city: string
    country: string
    address: string
}

interface IPostListProps {
    posts: PostProps[]
  }

interface PostProps  {
    id: string,
    date: string,
    title: string,
    description: string
}


interface IAlbumProps {
    id: number
    img: string
    name: string
    tracks: ITrackProps[]
}

interface ITrackProps {
    name: string
    src: string
}

interface ISectionHeaderProps {
    pretitle: string
    title: string
}

interface INavProps {
    containerStyle: string
    linkStyles: string
}

interface ISocialsProps {
    containerStyle: string
    iconStyle: string
}

interface INavContextProps {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}
 
interface INavContextProviderProps {
    children: React.ReactNode  
}

interface ILinkProps {
    path: string,
    name: string,
}