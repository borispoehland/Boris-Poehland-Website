import { useForm, SubmitHandler } from 'react-hook-form';
import getContactFormFields from '@data/contactFormFields';
import Button from '../Button/Button';
import ToFormElementConverter, {
  IInputs,
} from './converters/ToFormElementConverter';
import Emoji from '../Emoji/Emoji';
import axios from 'axios';
import { fireSweetAlert } from '@utils/dom';
import { ISendMailResponse } from '@pages/api/sendContactForm';
import { useCallbackOne } from 'use-memo-one';

const ContactForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<IInputs>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<IInputs> = useCallbackOne(
    (data) => {
      return axios
        .post('/api/sendContactForm', data)
        .then(async () => {
          await fireSweetAlert(
            'success',
            `I received your message and sent you a confirmation mail. Please make sure to also check your <b>Junk</b> folder. You can close the window now.`
          );
          reset();
        })
        .catch((err) => {
          const { status } = err.response;

          switch (status) {
            case 429:
              return fireSweetAlert(
                'error',
                'You already contacted me twice in the last hour. Please reply to the confirmation mail I sent you or try again later!'
              );
            default:
              const { myMail } = err.response.data as ISendMailResponse;
              return fireSweetAlert(
                'error',
                `It's not your fault. Please try again later or directly send me an email to <a href='mailto:${myMail}'>${myMail}</a>. Thanks!`
              );
          }
        });
    },
    [reset]
  );

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="contact-form"
        noValidate
      >
        {getContactFormFields()
          .map((formElement) => ({ ...formElement, errors, register }))
          .map(ToFormElementConverter)}
        <Button
          type="submit"
          className="contact-form__submit"
          disabled={isSubmitting}
        >
          Send message
        </Button>
      </form>
      <p>
        * You can also write me in <b>german</b> <Emoji symbol="&#128521;" />
      </p>
    </>
  );
};

export default ContactForm;
