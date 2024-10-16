import React from 'react'
import style from './UserPhotoPost.module.css'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import useForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'
import { PHOTO_POST } from '../../api'
import { useNavigate } from 'react-router-dom';
import Head from '../Helper/Head'


const UserPhotoPost = () => {

  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');
  const [img, setImg] = React.useState({});
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate('/conta');
  }, [data, navigate]);


  async function handleSubmit(event){
    event.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', idade.value);

    const token = window.localStorage.getItem('token');
    const { url, options } = PHOTO_POST(formData, token);
    await request(url, options);
    navigate("/conta")
  }

  function handleImgChange({target}){
      setImg({raw: target.files[0],preview:target.files[0]})
  }


  return (
    <section className={`${style.photoPost} animeLeft`}>
    <Head title="Postar"/>

      <form onSubmit={handleSubmit}>
          <Input label="nome" type="text" name="Nome" {...nome}/>
          <Input label="Peso" type="number" name="peso" {...peso}/>
          <Input label="Idade" type="number" name="idade"  {...idade}/>
          <Input label="Img" type="file" name="img" onChange={handleImgChange}/>
          {loading ? (<Button>Enviando...</Button>) : (<Button>Enviar</Button>)}
      </form>
      <div>
        {img.preview && (
          <div className={style.preview} style={{backgroundImage: `url(${URL.createObjectURL(img.preview)})`}}>
          </div>
          )}
      </div>
      
    </section>
  )
}

export default UserPhotoPost
