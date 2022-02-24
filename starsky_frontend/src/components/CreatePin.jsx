import React,{useState} from 'react'
import {AiOutlineCloudUpload } from 'react-icons/ai'
import {MdDelete} from 'react-icons/md';
import {useNavigate} from 'react-router-dom';

import {client} from '../client'
import Spinner from './Spinner'
import { categories } from '../utils/data'

function CreatePin({ user }) {
  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');
  const [destination, setDestination] = useState('');
  const [loading, setLoading] = useState(false);
  const [fields, setFields] = useState(null);
  const [category, setCategory] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);
  const [wrongImageType, setWrongImageType] = useState(false);


const navigate = useNavigate();

  return (
    <div className='flex flex-col justify-center items-center mt-5 lg:h-4/5'>
      {fields && (
        <p className='text-red-500 mb-5 text-xl'>

        </p>
      )}
    </div>
  )
}

export default CreatePin