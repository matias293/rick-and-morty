import { Grid } from '@mui/material'
import { style } from '@mui/system'
import Head from 'next/head'
import Image from 'next/image'
import ActionAreaCard from '../components/Cards/Cards'
import ResponsiveAppBar from '../components/Navbar/Navbar'
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

export default function Home() {
  return (
    <div className={styles.container}>
      <ResponsiveAppBar/>
      <div>
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
