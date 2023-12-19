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
import { XCircle } from 'lucide-react';
import Input from '../../../../../components/common/form/Input/Input';
import { useForm } from 'react-hook-form';
import { createContext } from 'react';

const ContactItem = ({ id,first_phone,second_phone,email, updated_at: updated }: Contact) => {
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(first_phone);
  const [newPhoneNumber, setNewPhoneNumber] = useState(first_phone);

    const [inputValue2, setInputValue2] = useState(second_phone);
  const [newPhoneNumber2, setNewPhoneNumber2] = useState(second_phone);

    const [inputValue3, setInputValue3] = useState(email);
  const [newPhoneNumber3, setNewPhoneNumber3] = useState(email);

  const [isSuccess, setIsSuccess] = useState(false);
  const [isDiscard, setIsDiscard] = useState(false);
  const { data: session } = useSession();

 const { mutate, error, isPending } = useMutation({
    mutationFn: async () => {
      const formData = new FormData();
      formData.append('id', String(id));
     formData.append('first_phone', String(newPhoneNumber));
     formData.append('second_phone', String(newPhoneNumber2));
          formData.append('email', String(newPhoneNumber3));// Send the updated phone number in the request

      await axios.patch(`contact-info/`, formData, {
        headers: {
          Authorization: `Bearer ${session?.user.token.access}`,
        },
      });
    },
    onSuccess: async () => {
      // Invalidate and refetch the data to update the cache
      await queryClient.invalidateQueries({ queryKey: ['contact-info'] });

      // Retrieve the updated data from the backend (optional, depends on your backend implementation)
      const response = await axios.get(`contact-info/`, {
        headers: {
          Authorization: `Bearer ${session?.user.token.access}`,
        },
      });

      // Update the displayed phone number with the retrieved data
      setInputValue(response.data.first_phone);
      setInputValue2(response.data.second_phone);
      setInputValue3(response.data.email);

      setIsSuccess(true);
    },
  });

const { control, setValue, watch } = useForm({
  defaultValues: {
    input: '',
  },
});
const resetField = () => setValue('input', '');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Convert the value to a number if it's supposed to be a number
    setNewPhoneNumber(value);
    setNewPhoneNumber2(value);
    setNewPhoneNumber3(value);
  };

 


  

  return (
    <div className={`${styles.wrapper} ${isOpen ? styles.active : ''}`}>
      <div className={styles.document}>
        <div >
          <div className={styles.inf}>
            <div className={styles.ico}>
              <div className={styles.input_wrapper}>
                <div>
              <p className={styles.text_container}>Номер телефону 1</p>
                  <div className={styles.data_wrapper}>
              <Input 
              name="input"
                control={control}
                value={inputValue} // Use the state value for the input value
                onChange={handleInputChange} // Handle input changes
                  placeholder="+380675681788"
                      className={styles.input_container}
                      
                    />
                    
                    <div className={styles.date}>{formattedDate(updated)}</div>
                    </div>
                </div>
                <div>
                  <p className={styles.text_container}>Номер телефону 2</p>
                  <div className={styles.data_wrapper}>
              <Input
              name="input"
                control={control}
                value={inputValue2} // Use the state value for the input value
                onChange={handleInputChange} // Handle input changes
                  placeholder="+380685817899"
                      className={styles.input_container}
                      icon={<XCircle/>}
                    />
                    <div className={styles.date}>{formattedDate(updated)}</div>
                    </div>
                </div>
                <div>
                  <p className={styles.text_container}>Email</p>
                  <div className={styles.data_wrapper}>
              <Input
              name="input"
                control={control}
                value={inputValue3} // Use the state value for the input value
                onChange={handleInputChange} // Handle input changes
                  placeholder="1234hello@gmail.com"
                  className={styles.input_container}
                    />
                    <div className={styles.date}>{formattedDate(updated)}</div>
                    </div>
                </div>
                 <div className={styles.buttons}>
          <Button variant="outline" onClick={() => setIsDiscard(true)} disabled={isPending}>
            Скасувати
          </Button>
          <Button
            type="submit"
            variant="filled"
            color="secondary"
            disabled={isPending }
            onClick={() => mutate()}
          >
            Оновити
          </Button>
        </div>
                </div>
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
        {/* <p >Номер телефона: {inputValue}</p> */}
    </div>
     
      {error && <div style={{ color: '#F40000', fontSize: '16px' }}>Помилка: {error.message}</div>}
    </div>
  );
};

export default ContactItem;

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