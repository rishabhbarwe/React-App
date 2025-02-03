import React from 'react'
import email from './assets/email.png'
import lock from './assets/lock.png'
import user from './assets/id-card.png'
import { useNavigate } from 'react-router-dom';
import fullname from './assets/edit.png';
import eye from './assets/eye.png';
import hidden from './assets/hidden.png'
import { useState } from 'react';

const styles = {
  signupBox: {

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    margin: "30px auto",
    width: "30%",
    minWidth: '250px',
    padding: '40px',
    borderRadius: '10px',
    backgroundColor: 'rgba(0,0,0,0.4)',
    boxShadow: "-10px 10px 20px",
    marginBottom: "30px"
  },
  signupLabel: {
    color: '#000',


  },

}


function SignUp() {


  const [showPasswword, setShowPassword] = useState(false);
  const [formdata, setFormData] = useState({
    fullname: '',
    username: '',
    password: '',
    email: '',
  });
  console.log("Formdata :", formdata)

  const [errors, setErrors] = useState({
    fullname: '',
    username: '',
    password: '',
    email: '',
  });


  const navigation = useNavigate();


  const validate = () => {
    let valid = true;
    const newErrors = {}
    if (!formdata.fullname) {
      newErrors.fullname = "Please enter your name";
      valid = false;
    }

    if (!formdata.username) {
      newErrors.username = "Please enter your username";
      valid = false;
    }
    if (!formdata.password) {
      newErrors.password = "Please enter your password";
      valid = false;
    }
    else if (formdata.password.length <= 6) {
      newErrors.password = "Password length must be greater than 6";
      valid = false;
    }
    if (!formdata.email) {
      newErrors.email = "Please enter your email";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      navigation('/home');
    }
  }


  function handleEyeimage() {
    setShowPassword(!showPasswword)
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(({ data }) => ({ ...data, [name]: value }));
  }

  return (

    <>


      <div className='textBox'>
        <p className='text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quod perspiciatis optio quaerat voluptate ad voluptas. Commodi eum, dolores odio deserunt iure nulla, aliquid sed perspiciatis, harum voluptas aperiam incidunt.
        </p>
      </div>


      <div style={styles.signupBox} className='signupBox'>

        <p style={{ fontFamily: "Sour Gummy", fontSize: 22, marginTop: -10, color: '#000' }}>Sign Up form</p>
        <form onSubmit={handleSubmit}>

          <label htmlFor="fullname" style={styles.signupLabel}>Full Name</label>
          <div className='emailDiv'>
            <input id="fullname" name="fullname" placeholder='full name' value={formdata.fullname} onChange={handleChange}></input><br />
            <img src={fullname} alt="" width={20} className='emailImage' />
          </div>
          {errors.fullname && <p style={{ color: 'red',padding:0,margin:'-6px',fontSize:'15px',marginLeft : '10px' }}>{errors.fullname}</p>}


          <label htmlFor="username" style={styles.signupLabel}>User Name</label>
          <div className='emailDiv'>
            <input id="username" name="username" placeholder='user name' value={formdata.username} onChange={handleChange}></input>


            <img src={user} alt="" width={20} className='emailImage' />
          </div>
          {errors.username && <p style={{ color: 'red',padding:0,margin:'-6px',fontSize:'15px',marginLeft : '10px'  }}>{errors.username}</p>}

          <label htmlFor="password" style={styles.signupLabel}>Password</label>
          <div className='emailDiv'>
            <input id="password" name="password" placeholder='password' value={formdata.password} onChange={handleChange} type={showPasswword ? 'text' : 'password'}></input>


            <img src={lock} alt="lock" width={20} className='emailImage' />
            <img src={showPasswword ? hidden : eye} alt="" width={20} className='passwordEye' onClick={handleEyeimage} />
          </div>
          {errors.password && <p style={{ color: 'red' ,padding:0,margin:'-6px',fontSize:'15px',marginLeft : '10px' }}>{errors.password}</p>}
          


          <label htmlFor="email" name="email" style={styles.signupLabel}>Email</label>
          <div className='emailDiv'>
            <input id="email" placeholder='email' value={formdata.email} onChange={handleChange}></input>


            <img src={email} alt="email" width={20} className='emailImage' />

          </div>
          {errors.email && <p style={{ color: 'red',padding:0,margin:'-6px',fontSize:'15px',marginLeft : '10px' }}>{errors.email}</p>}
          <input type="submit" />

        </form>


      </div>
      <div className='endBox'>
        <p style={{ opacity: 0.7 }}>&copy;2025 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>

      </div>

    </>
  )
}
export default SignUp