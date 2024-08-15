import React from 'react'
import style from './UserPhotoPost.module.css'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import useForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'
import { PHOTO_POST } from '../../api'

const UserPhotoPost = () => {

  const nome = useForm()
  const peso = useForm('number')
  const idade = useForm('number')
  const [img,setImg] = React.useState({})
  const {data,error,loading,request} = useFetch()

  function handleSubmit(event){
    event.preventDefault();
    const formData = new FormData()
    formData.append("img",img.raw);
    formData.append("img",nome.value);
    formData.append("img",peso.value);
    formData.append("img",idade.value);

    const token = window.localStorage.getItem('token')
    const {url,options} = PHOTO_POST(formData,token)
    request(url,options);
  }


  function handleImgChange({target}){
      setImg({raw: target.files[0]})
  }

  return (
    <section className={`${style.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
          <Input label="nome" type="text" name="Nome" {...nome}/>
          <Input label="Peso" type="number" name="peso" {...peso}/>
          <Input label="Idade" type="number" name="idade"  {...idade}/>
          <Input label="Img" type="file" name="img" onChange={handleImgChange}/>
          <Button>Enviar</Button>
      </form>
    </section>
  )
}

export default UserPhotoPost
