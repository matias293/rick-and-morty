import { Grid } from '@mui/material'
import ActionAreaCard from '../components/Cards/Cards'
import ResponsiveAppBar from '../components/Navbar/Navbar'
import SimpleSlider from '../components/Slider/Slider'
import styles from '../styles/Home.module.css'

const characters = [
  {
    id: 1,
    name: "Rick Sanchez",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",

},
{
    id: 2,
    name: "Morty Smith",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",

},
{
    id: 3,
    name: "Summer Smith",
    image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",

},
{
    id: 4,
    name: "Beth Smith",
    image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    "created": "2017-11-04T19:22:43.665Z"
},
{
    id: 5,
    name: "Jerry Smith",
    image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
   
},
{
    id: 6,
    name: "Abadango Cluster Princess",
    image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
   
},
]
interface HeroProp  {
    id: number;
    src: string
    alt: string
  }
const heroPictures= [
  {
    id: 1,
    src: 'https://res.cloudinary.com/dlgubtb0g/image/upload/v1670080372/rick-morty/rick_ron1jn.jpg',
    alt: "Hero rick"
  },
  {
    id: 2,
    src: 'https://res.cloudinary.com/dlgubtb0g/image/upload/v1670080372/rick-morty/rick-y-morty-como-breaking-bad-5441_jhadgb.jpg',
    alt: "Hero rick bd"
  },
  {
    id: 3,
    src: 'https://res.cloudinary.com/dlgubtb0g/image/upload/v1670080372/rick-morty/54045-rick-and-morty-cartoons-tv-shows-hd-rick-morty-animated-tv-series_c1tzku.jpg',
    alt: "Hero ricasdk"
  },
  {
    id: 4,
    src: 'https://res.cloudinary.com/dlgubtb0g/image/upload/v1670080373/rick-morty/rick-and-morty-en-nave_3840x2400_xtrafondos.com_qetv3l.jpg',
    alt: "Heasf"
  }
]

export default function Home() {
  return (
    <div className={styles.container}>
      <ResponsiveAppBar/>
      <div>
      <SimpleSlider images={heroPictures}/>
      </div>
      <div className={styles.containerCard}>
      <Grid container spacing={3}>
        {
          characters.map((char) =>(
            <Grid item key={char.id} xs={12} md={6} lg={4}>
            <ActionAreaCard key={char.id} image={char.image} name={char.name}/>
            </Grid>
          ))
        }
        </Grid>
      </div>
    </div>
  )
}
