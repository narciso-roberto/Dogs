import React from 'react'
import useFetch from '../../Hooks/useFetch';
import {PHOTO_DELETE} from '../../api'
import style from './PhotoDelete.module.css'

const PhotoDelete = ({id}) => {

    const {loading,error,request} = useFetch()

    const handleDelete = async () => {
        const confirm = window.confirm("Tem certeza que deseja deletar ?")
        if(confirm){
            const {url, options} = PHOTO_DELETE(id)
            const {response,json} = await request(url,options)
            if(response.ok){
                window.location.reload()
            }
        }
        
        
    }

  return (<>
    {error && <button onClick={handleDelete}>Algo deu errado</button>}
    {loading && <button disabled className={style.delete}>Carregando...</button>}
    <button onClick={handleDelete}>
      deletar
    </button>
    </>
  )
}

export default PhotoDelete
