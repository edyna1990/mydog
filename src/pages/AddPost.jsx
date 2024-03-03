import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { NotFound } from './NotFound'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { EnergyContext } from '../context/EnergyContext';
import { SizeContext } from '../context/SizeContext';
import { HairContext } from '../context/HairContext';
import { IntellContext } from '../context/IntellContext';
import { SocialContext } from '../context/SocialContext';
import { TextEditor } from '../components/TextEditor';
import { FileInput } from '../components/FileInput';
import Button from '@mui/material/Button';
import { uploadFile } from '../utility/uploadFile';
import { addPost } from '../utility/crudUtility';
import { useNavigate } from "react-router-dom";

export const AddPost = () => {
    const {user} = useContext(UserContext)
    const {energies} = useContext(EnergyContext)
    const [energy, setEnergy] = useState(0)
    const {sizes} = useContext(SizeContext)
    const [size, setSize] = useState(0)
    const {hairs} = useContext(HairContext)
    const [hair, setHair] = useState(0)
    const {intells} = useContext(IntellContext)
    const [intell, setIntell] = useState(0)
    const {socials} = useContext(SocialContext)
    const [social, setSocial] = useState(0)
    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [story, setStory] = useState("")
    const [image, setImage] = useState(null)
    
    if(!user) return <NotFound/>

    console.log(hairs);

    const handleSubmit = async(e) => {
      e.preventDefault()
      try{
        const photoUrl = await uploadFile(image)
        await addPost({
          title,
          photoUrl,
          author:user.displayName,
          userId:user.uid,
          description:story,
          energiak: energy, 
          intelligenciak: intell,
          meretek: size,
          szocialisigenyek: social,
          szorzetek: hair,
        })
        alert('Sikeres feltöltés!');
        navigate('/')
      }
      catch(err){
        console.log(err)
      }
    }
  return (
    <div className="createPost">
      <h3>
        Kutyafajta hozzáadása
      </h3>
      <Box component="form" onSubmit={handleSubmit} sx={{'& > :not(style)': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
        <TextField id="filled-basic" 
          label="A kutyafajta neve" 
          autoFocus 
          variant="filled" 
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-filled-label">Méret</InputLabel>
          <Select labelId="demo-simple-select-filled-label" id="demo-simple-select-filled" value={size} label="Méret" onChange={(e)=>setSize(e.target.value)}>
            <MenuItem value="0"><em>Válasz méretet!</em></MenuItem>
            {sizes && sizes.map(obj=>
              <MenuItem key={obj.name} value={obj.name}>{obj.name}</MenuItem>
            )}
          </Select>
        </FormControl>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-filled-label">Szőrzet</InputLabel>
          <Select labelId="demo-simple-select-filled-label" id="demo-simple-select-filled" value={hair} label="Szőrzet" onChange={(e)=>setHair(e.target.value)}>
            <MenuItem value="0"><em>Válasz szőrzetet!</em></MenuItem>
            {hairs && hairs.map(obj=>
              <MenuItem key={obj.name} value={obj.name}>{obj.name}</MenuItem>
            )}
          </Select>
        </FormControl>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-filled-label">Intelligencia</InputLabel>
          <Select labelId="demo-simple-select-filled-label" id="demo-simple-select-filled" value={intell} label="Intelligencia" onChange={(e)=>setIntell(e.target.value)}>
            <MenuItem value="0"><em>Válasz intelligenciát!</em></MenuItem>
            {intells && intells.map(obj=>
              <MenuItem key={obj.name} value={obj.name}>{obj.name}</MenuItem>
            )}
          </Select>
        </FormControl>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Energia</InputLabel>
          <Select labelId="demo-simple-select-filled-label" id="demo-simple-select-filled" value={energy} label="Energia" onChange={(e)=>setEnergy(e.target.value)}>
          <MenuItem value="0"><em>Válasz energiát!</em></MenuItem>
          {energies && energies.map(obj=>
            <MenuItem key={obj.name} value={obj.name}>{obj.name}</MenuItem>
          )}
          </Select>
        </FormControl>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-filled-label">Szociális igény</InputLabel>
          <Select labelId="demo-simple-select-filled-label" id="demo-simple-select-filled" value={social} label="Szociális igény" onChange={(e)=>setSocial(e.target.value)}>
            <MenuItem value="0"><em>Válasz szociális igényt!</em></MenuItem>
            {socials && socials.map(obj=>
              <MenuItem key={obj.name} value={obj.name}>{obj.name}</MenuItem>
            )}
          </Select>
        </FormControl>
        <FormControl style={{width: '100%', paddingRight: 20}}>
          Leírás:
          <TextEditor story={story} setStory={setStory} />
        </FormControl>
        <FileInput setImage={setImage} />
        <Button disabled={title.length==0 || story.length==0 || !image || social==0 || intell==0 || hair==0 || energy==0 || size ==0} type='submit' variant="outlined" className='uploadimg'>Feltöltés</Button>
      </Box>
    </div>
  )
}
