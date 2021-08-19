import TextField from '@material-ui/core/TextField';
import { useFormik } from 'formik';
import Button from '@material-ui/core/Button';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { SchemaOf } from 'yup';

import s from './SearchForm.module.css';

interface IGithubName {
  githubName: string;
  repositoryName: string;
}

interface IHandleSubmit {
  handleSubmit: (githubName: string, repositoryName: string) => void;
}

const validationSchemaNewPlayer: SchemaOf<IGithubName> = yup.object({
  githubName: yup
    .string()
    .min(3, 'At least 3 charts')
    .max(45, 'Maximal 45 charts')
    .defined('githubName is required'),
  repositoryName: yup
    .string()
    .min(3, 'At least 3 charts')
    .max(45, 'Maximal 45 charts')
    .defined('repositoryName is required'),
});

const SearchForm = ({ handleSubmit }: IHandleSubmit) => {
  const formik = useFormik({
    initialValues: {
      githubName: '',
      repositoryName: '',
    },

    validationSchema: validationSchemaNewPlayer,

    onSubmit: (values, { resetForm }): any => {
      const githubName = values.githubName.replace(/\s/g, '');
      const repositoryName = values.repositoryName.replace(/\s/g, '');
      if (githubName === '' || repositoryName === '') {
        resetForm();
        return toast.error(`🚀 Field can't has empty string!`, {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      if (githubName.length < 3 || repositoryName.length < 3) {
        return toast.error(`🚀 Field At least 3 charts!`, {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      handleSubmit(githubName, repositoryName);
      resetForm();
    },
  });

  return (
    <>
      <h2 className={s.searchForm__title}>Write ownerName and githubName</h2>
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

        <TextField
          id="repositoryName"
          name="repositoryName"
          label="repositoryName..."
          value={formik.values.repositoryName}
          onChange={formik.handleChange}
          error={
            formik.touched.repositoryName &&
            Boolean(formik.errors.repositoryName)
          }
          helperText={
            formik.touched.repositoryName && formik.errors.repositoryName
          }
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
