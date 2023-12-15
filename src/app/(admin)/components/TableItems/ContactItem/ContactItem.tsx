'use client';

import React, { ChangeEvent, useRef, useState, useContext } from 'react';

import { Button } from 'components/common';
import { Contact } from '@/types/Contacts';
import { formattedDate } from '@/utils/formatDate';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import Modal from 'components/common/ModalActions/Modal';
import styles from './ContactItem.module.scss';

import Input from '../../../../../components/common/form/Input/Input';
import { useForm } from 'react-hook-form';
import { createContext } from 'react';

const ContactItem = ({ id,number, updated_at: updated }: Contact) => {
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(number);
  const [newPhoneNumber, setNewPhoneNumber] = useState(number);

  const [isSuccess, setIsSuccess] = useState(false);
  const [isDiscard, setIsDiscard] = useState(false);
  const { data: session } = useSession();

  const {
    mutate: submitDocument,
    error,
    isPending,
  } = useMutation({
    mutationFn: async () => {
      const formData = new FormData();
     formData.append('number', String(newPhoneNumber)); // Send the updated phone number in the request

      await axios.patch(`contacts/${id}/`, formData, {
        headers: {
          Authorization: `Bearer ${session?.user.token.access}`,
        },
      });
    },
    onSuccess: async () => {
      // Invalidate and refetch the data to update the cache
      await queryClient.invalidateQueries({ queryKey: ['contacts'] });

      // Retrieve the updated data from the backend (optional, depends on your backend implementation)
      const response = await axios.get(`contacts/${id}/`, {
        headers: {
          Authorization: `Bearer ${session?.user.token.access}`,
        },
      });

      // Update the displayed phone number with the retrieved data
      setInputValue(response.data.number);

      setIsSuccess(true);
    },
  });

  const { control, setValue, watch } = useForm({
    defaultValues: {
      search: '',
    },
  });

  const resetField = () => setValue('search', '');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Convert the value to a number if it's supposed to be a number
    setNewPhoneNumber(Number(value));
  };

  //   const queryClient = useQueryClient();
//   const [isOpen, setIsOpen] = useState(false);
//   const [inputValue, setInputValue] = useState(number);
//   const [newPhoneNumber, setNewPhoneNumber] = useState(number)

//   const [isSuccess, setIsSuccess] = useState(false);
//   const [isDiscard, setIsDiscard] = useState(false);
//   const { data: session } = useSession();


//   const {
//     mutate: submitDocument,
//     error,
//     isPending,
//   } = useMutation({
//     mutationFn: async () => {
//       const formData = new FormData();
       
      
//       await axios.patch(`contacts/${id}/`, formData, {
//         headers: {
//           Authorization: `Bearer ${session?.user.token.access}`,
//         },
//       });
//     },
//     onSuccess: () => {
//       // Update the displayed phone number on success
//       setInputValue(newPhoneNumber);

//       queryClient.invalidateQueries({ queryKey: ['contacts'] });
//       setIsSuccess(true);
//     },
//   });
  
//  const { control, setValue, watch } = useForm({
//     defaultValues: {
//       search: '',
//     },
//   });
//   const resetField = () => setValue('search', '');

// const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   const value = e.target.value;
//   // Convert the value to a number if it's supposed to be a number
//   setNewPhoneNumber(Number(value));
// };


  

  return (
    <div className={`${styles.wrapper} ${isOpen ? styles.active : ''}`}>
      <div className={styles.document}>
        <div>
          <div className={styles.info}>
            <div className={styles.icon}>
              <p>Номер телефону 1</p>
              
              <Input
              name="search"
                control={control}
                value={inputValue} // Use the state value for the input value
                onChange={handleInputChange} // Handle input changes
                placeholder="+380675681788"
            />
            </div>
             <div className={styles.date}>{formattedDate(updated)}</div>
        <div className={styles.buttons}>
          <Button variant="outline" onClick={() => setIsDiscard(true)} disabled={isPending}>
            Скасувати
          </Button>
          <Button
            type="submit"
            variant="filled"
            color="secondary"
            disabled={isPending }
            onClick={() => submitDocument()}
          >
            Оновити
          </Button>
        </div>
      {(isSuccess || isDiscard) && (
        <Modal
          type={isDiscard ? 'question' : 'success'}
          message={
            isDiscard
              ? 'Ви точно хочете залишити сторінку? Процес редагування буде втрачено'
              : 'Ваші зміни успішно збережено!'
          }
          title={isDiscard ? 'Залишити сторінку ' : 'Збережено!'}
          active={isDiscard || isSuccess}
          setActive={() => {
            setIsSuccess(false);
            setIsDiscard(false);
            setIsOpen(false);
          }}
          successFnc={() => {
            setIsOpen(false);
            
          }}
        />
      )}
            
          </div>
        
        </div>
        
      </div>
      <div>
        <p >Номер телефона: {inputValue}</p>
    </div>
     
      {error && <div style={{ color: '#F40000', fontSize: '16px' }}>Помилка: {error.message}</div>}
    </div>
  );
};

export default ContactItem;