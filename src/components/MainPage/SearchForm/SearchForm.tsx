import TextField from '@material-ui/core/TextField';
import { useFormik } from 'formik';
import Button from '@material-ui/core/Button';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { SchemaOf } from 'yup';

import s from './SearchForm.module.css';

interface IGithubName {
  githubName: string;
}

interface IHandleSubmit {
  handleSubmit: (name: string) => void;
}

const validationSchemaNewPlayer: SchemaOf<IGithubName> = yup.object({
  githubName: yup
    .string()
    .min(3, 'At least 3 charts')
    .max(45, 'Maximal 45 charts')
    .defined('githubName is required'),
});

const SearchForm = ({ handleSubmit }: IHandleSubmit) => {
  const formik = useFormik({
    initialValues: {
      githubName: '',
    },

    validationSchema: validationSchemaNewPlayer,

    onSubmit: (values, { resetForm }): any => {
      const githubName = values.githubName.replace(/\s/g, '');
      if (githubName === '') {
        resetForm();
        return toast.error(`🚀 githubName can't be empty string!`, {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      if (githubName.length < 3) {
        return toast.error(`🚀 githubName At least 3 charts!`, {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      handleSubmit(githubName);
      resetForm();
    },
  });

  return (
    <>
      <h2 className={s.searchForm__title}>Write github name</h2>
      <form className={s.searchForm__form} onSubmit={formik.handleSubmit}>
        <TextField
          id="githubName"
          name="githubName"
          label="githubName..."
          value={formik.values.githubName}
          onChange={formik.handleChange}
          error={formik.touched.githubName && Boolean(formik.errors.githubName)}
          helperText={formik.touched.githubName && formik.errors.githubName}
          fullWidth={true}
        />

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
    </>
  );
};

export default SearchForm;
