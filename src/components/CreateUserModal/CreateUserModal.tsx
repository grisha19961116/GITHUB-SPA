import TextField from '@material-ui/core/TextField';
import { useFormik } from 'formik';
import Button from '@material-ui/core/Button';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { SchemaOf } from 'yup';

import styles from './CreateUserModal.module.css';

interface IUsersObj {
  firstPlayer: string;
  secondPlayer: string;
}

interface ICreateUserModal {
  handleSubmit: (values: IUsersObj) => void;
}

const validationSchemaNewPlayer: SchemaOf<IUsersObj> = yup.object({
  firstPlayer: yup
    .string()
    .min(3, 'At least 3 charts')
    .max(15, 'Maximal 15 charts')
    .defined('Nickname is required'),
  secondPlayer: yup
    .string()
    .min(3, 'At least 3 charts')
    .max(15, 'Maximal 15 charts')
    .defined('Nickname is required'),
});

const CreateUserModal = ({ handleSubmit }: ICreateUserModal) => {
  const formik = useFormik({
    initialValues: {
      firstPlayer: '',
      secondPlayer: '',
    },
    validationSchema: validationSchemaNewPlayer,
    onSubmit: values => {
      if (
        values.firstPlayer.toLocaleLowerCase() ===
        values.secondPlayer.toLocaleLowerCase()
      ) {
        toast.error(`🚀 Names have to be different of each other!`, {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return;
      }
      handleSubmit(values);
    },
  });

  return (
    <div className={styles.modalWrapper}>
      <h2 className={styles.title}>Chose player nickname</h2>
      <form className={styles.formWrapper} onSubmit={formik.handleSubmit}>
        <div className={styles.textFieldsWrapper}>
          <TextField
            id="firstPlayer"
            name="firstPlayer"
            label="First player..."
            value={formik.values.firstPlayer}
            onChange={formik.handleChange}
            error={
              formik.touched.firstPlayer && Boolean(formik.errors.firstPlayer)
            }
            helperText={formik.touched.firstPlayer && formik.errors.firstPlayer}
            fullWidth={true}
          />
          <TextField
            id="secondPlayer"
            name="secondPlayer"
            label="Second player..."
            value={formik.values.secondPlayer}
            onChange={formik.handleChange}
            error={
              formik.touched.secondPlayer && Boolean(formik.errors.secondPlayer)
            }
            helperText={
              formik.touched.secondPlayer && formik.errors.secondPlayer
            }
            fullWidth={true}
          />
        </div>
        <Button
          data-close={true}
          id="submitForm"
          color="primary"
          variant="contained"
          disabled={false}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CreateUserModal;
