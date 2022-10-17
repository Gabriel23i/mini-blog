import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';
import { useInsertDocument } from '../../hooks/useInsertDocument';
import { useFetchDocument } from '../../hooks/useFetchDocument';
import { useUpdateDocument } from '../../hooks/useUpdateDocument';


import styles from './EditPost.module.css';
import ScrollToTopOnMount from '../../utils/ScrollToTopOnMount';

const EditPost = () => {
    
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [body, setBody] = useState('');
    const [tags, setTags] = useState([]);
    const [formError, setFormError] = useState('');
    
    const { id } = useParams();
    const { user } = useAuthValue();
    const { updateDocument, response } = useUpdateDocument('posts');
    const { document: post } = useFetchDocument('posts', id);

    const navigate = useNavigate();
    
    const handleSubmit = (e)=> {
        e.preventDefault();
        setFormError('');
        
        try {
        new URL(image);
        } catch (error) {
        setFormError('A imagem precisar ser uma URL.');
        };

        // create array tags
        const tagsArray = tags.split(',').map((tag)=> tag.trim().toLowerCase());

        if(!title || !image || !tags || !body){
        setFormError('Por favor, preencha todos os campos!');
        };

        if(formError) return;

        const data = {
            title,
            image,
            body,
            tagsArray,
            uid: user.uid,
            createdBy: user.displayName
        };

        updateDocument(id, data);

        navigate('/dashboard');
    };

    useEffect(()=>{
        if(post){
            setTitle(post.title);
            setBody(post.body);
            setImage(post.image);

            const textTags = post.tagsArray.join(', ');
            setTags(textTags);
        };
    },[post]);

    return (
        <div className={styles.edit_post}>
            <ScrollToTopOnMount />
            {post && (
                <>
                    <h2>Editando o post: {post.title}</h2>
                    <p>Altere os dados do post como desejar</p>
                    <form onSubmit={handleSubmit}>
                    <label>
                        <span>Título:</span>
                        <input
                            type='text'
                            name='title'
                            placeholder='Pense num bom título...'
                            onChange={(e)=> setTitle(e.target.value)}
                            value={title}
                            required
                        />
                    </label>
                    <label>
                        <span>URL da imagem:</span>
                        <input
                            type='text'
                            name='image'
                            placeholder='Insira uma imagem que representa o seu post'
                            onChange={(e)=> setImage(e.target.value)}
                            value={image}
                            required
                        />
                    </label>
                    <p className={styles.preview_title}>Preview da imagem atual:</p>
                    <img
                        className={styles.image_preview}
                        src={post.image}
                        alt={post.title}
                    />
                    <label>
                        <span>Conteúdo:</span>
                        <textarea
                            name='body'
                            placeholder='Insira o conteúdo do post'
                            onChange={(e)=> setBody(e.target.value)}
                            value={body}
                            required
                        ></textarea>
                    </label>
                    <label>
                        <span>Tags:</span>
                        <input
                            type='text'
                            name='tags'
                            placeholder='Insira as tags separadas por vírgulas'
                            onChange={(e)=> setTags(e.target.value)}
                            value={tags}
                            required
                        />
                    </label>
                    {!response.loading && <button className='btn'>Editar</button>}
                    {response.loading && (
                        <button className='btn' disabled>
                            Aguarde...
                        </button>
                    )}
                    {response.error && <p className='error'>{response.error}</p>}
                    {formError && <p className='error'>{formError}</p>}
                    </form>
                </>
            )}
        </div>
    );
};

export default EditPost;
