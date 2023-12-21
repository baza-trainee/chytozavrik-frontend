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

export interface FormDataType{
  id: number;
  first_phone: string;
  second_phone?: string;
  email: string;
}

const ContactItem = ({ id, first_phone, second_phone, email, updated_at: updated }: Contact) => {
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDiscard, setIsDiscard] = useState(false);
  const { data: session } = useSession();

   const { mutate, error, isPending } = useMutation({
    mutationFn: async (formData: FormData) => {
      await axios.patch(`contact-info/`, formData, {
        headers: {
          Authorization: `Bearer ${session?.user.token.access}`,
        },
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['contact-info'] });
      setIsSuccess(true);
    },
  });

  const { control, resetField, setValue, handleSubmit, register, formState: { errors,isValid },reset
 } = useForm({mode:'onBlur',
    defaultValues: {
      id: id || 0,
      first_phone: first_phone || '',
      second_phone: second_phone || '',
     email: email || '',
      
    },
  });

const onSubmit = (data: FormDataType) => {
    const formData = new FormData();
    formData.append('id', String(id));
    formData.append('first_phone', String(data.first_phone));
    formData.append('second_phone', String(data.second_phone));
    formData.append('email', String(data.email));
  mutate(formData);
  alert(JSON.stringify(data))
  reset()
  };
  
return (
    <div className={`${styles.wrapper} ${isOpen ? styles.active : ''}`}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.document}>
          <div>
            <div className={styles.inf}>
              <div className={styles.ico}>
                <div className={styles.input_wrapper}>
                  <div>
                    <p className={styles.text_container}>Номер телефону 1</p>
                    <div className={styles.data_wrapper}>
                      <Input
                      // name="first_phone"
                    type='number'
                      {...register('first_phone', {
                        required: true,
                        min: {
                          value: 9,
                          message: 'Мінімум 9 цифр'
                        },
                      maxLength: {value:128,message:'Максимум 128 цифр'}})}
                        control={control}
                        icon={<XCircle onClick={() => resetField("first_phone" )}/>}
                        placeholder="+380675681788"
                      className={styles.input_container}
                      onChange={(e) => setValue("first_phone", e.target.value)}
                      />

                      <div className={styles.date}>{formattedDate(updated)}</div>
                    </div>
                  </div>
                  <div>
                    <p className={styles.text_container}>Номер телефону 2</p>
                    <div className={styles.data_wrapper}>
                      <Input
                        name="second_phone"
                        control={control}
                    icon={<XCircle onClick={() => resetField("second_phone" )}/>}
                        placeholder="+380685817899"
                        className={styles.input_container}
                        
                      />
                      <div className={styles.date}>{formattedDate(updated)}</div>
                    </div>
                  </div>
                  <div>
                    <p className={styles.text_container}>Email</p>
                    <div className={styles.data_wrapper}>
                      <Input
                        name="email"
                        control={control}
                    icon={<XCircle onClick={() => resetField("email" )}/>}
                        placeholder="1234hello@gmail.com"
                        className={styles.input_container}
                      />
                      <div className={styles.date}>{formattedDate(updated)}</div>
                    </div>
                  </div>
                  <div className={styles.buttons}>
                    <Button
                      variant="outline"
                      onClick={() => setIsDiscard(true)}
                      disabled={isPending}
                    >
                      Скасувати
                    </Button>
                    <Button
                      type="submit"
                      variant="filled"
                      color="secondary"
                    // disabled={isPending}
                    disabled={!isValid}
                      
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
        
      </form>
    {/* {error && <div style={{ color: '#F40000', fontSize: '16px' }}>Помилка: {error.message}</div>} */}
    <div style={{ color: '#F40000', fontSize: '16px' }}>{errors?.first_phone && <p>{errors?.first_phone.message || 'Введіть номер телефону'}</p>}</div>
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
