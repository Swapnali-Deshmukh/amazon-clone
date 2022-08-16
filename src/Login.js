import React, { useState } from 'react'
import './Login.css';
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase';

function Login() {
    const history=useHistory();
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();

    const login = (event) =>{
        event.preventDefault();
        // auth.signInWithEmailAndPassword(email,password).
        // then((auth)=>{
        //     history.push('/');
        // })
        // .catch((e)=>alert(e.message));
    }

    const register = (event) =>{
        event.preventDefault();
        // auth.createUserWithEmailAndPassword(email,password)
        // .then(auth =>{

        // })
        // .catch((e)=>alert(e.message));
    }


  return (
    <div className='login'>
        <Link to='/'>
            <img className='login__image' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAAB5CAMAAACuqww5AAAAwFBMVEX///8jLz7/mQAAAAAeKzskMT8AACEAFCr/lgCMj5WvsbYAFyzm5+j19fUAABb/kwDb3N0qNUIAABBrcXgLHjEyPEkRIjPOz9HCw8YYJjf/jwB4fITv7/AAAB1FTVgAABoADSYAAAiipan/+vZjaXGBhYv/9u3/3L2anaK3ubw6Q09fX2j/7d3/1LL/mhn/4cX/yZxQV2H/w4z/tXH/nin/qEv/59H/s2X/ojr/rlkdIDMVGSj/vHr/vIP/0aT/lyiGGatFAAAMmUlEQVR4nO1aaXuqvtMuFUQECxVkEaocFRWtVj2u5+ny/b/VPyyZhMX+6tbz9Fy5X7URJpM7M5OZIXd3DAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDF9HI8XXnv3K0JnCT5z4wge/Bk8LgyX/q1Kp+B23bnm5nxVNQdCUZGqrHugDt2cp1Ot1SR8E9BCtq2ZLA6GJhFcn6LW8cE87Ai//nC25aGLJzv+CFVS05L/oQfRcqJ1GwnF4oWt0RZPnBI7jHPlJ1sOMClYnhR39E4hPsmHI1eogxL+7cjLkT+sF4Q074LsyEs4h8Y5R9XPCGzr3WI5xRse663R9A0Hsmno9S5G2TPSbRNMrvdaDGD/3KF2HImvgyAk5MdAfhqHToqWuE6Pq3t3ZLRE9IsRPOQkd40cZD5mim9tdSy8KH1j0yh/4csgDSpQ1lY2Y40gSb4gDm56k3kwUFKeILF1E88Xq8P6Snulc9HiDLADDbFEMSWIyKLt3Fu+Qh3gnjH8lQwIn6hnnDzmTLwg3OEpvr5r/ORVl6oSgnpDRUeBMh7avejV9ZXDn6Qa9jM7lDI0fSvVzqkS9lCBBDhqCk3moo93ZleyLvkTzU+HLhPMVIvwYQRxF0LhaEMN3gwJBnDG4G3fp/RBEvRCvToT954h+xrRIkNTLrcaXGk5Od/6RbJr1f5mfiOpm5xSC6k8lPwsVYkOYIFNXurmnHjK+eDqUpYllOf7TU1Umsp/AybCLme5jTkt+4hb2ttqDtU+PCjdAb+8piiwYZQRpBsxhiiLxtSeQARYUBHLWoQVDv4ygOnhstTO27TAg+2mCDWOCuMeipSenEw0DolAdrMufJMLJSl0g6EGUCagJZDz/kug4GI9dEbPuLMHEUq35ZaxNRh/xooTIG6ST84YUz9awIKQ44GNAUDTqN39VM4EILaX7QA05k1RvzzVSVcUgTpAaGtDvTEHv0CUIOsAQj4+JEF6q2F4kpIMt0cROhgnioreNh0qTstVfpbnZV2H5eC4IraAP38EbRBFkTuqaVp/QDDm8a1t14qpcNVVJwwZngC3aOITyndIUxeOAIBl7KnCGw4nWSad3llqOoGinda2hBSQyPoVlE30VYTOSIQh8C4I96MhP8BoIQU6SmyhTwhBeagBDzZSg5HxDwiewicrSwcLLzt8GCVoyjh0hdhjiuj3sc349TxDPJ7yGoI0/LkxzAuwWyohF2fAHRMmBmV8DZUEpZzaJFWL6lAI7jY3ampjVqi8bIjkPG9jr+FbZ6TKGjXdgxwJgA96wJsljgpGmpYQgB8c22EJRursADcu262NJXxKDR2soEpTuoglLbWGNyBCoBF6vpcKJsTQk+ROCtBbsu4x/Vsh+gY4enornkzHKxfBc9TR4IBIv4Aer7VHZVClB6WQ+nODgC2QowEPNTFjMCv+MoMYUB3WuCttutVKjMgdErI6n6iZSSJBu4Ue0JibownO+qOZxgrgHsAUwfDIklROUFf4ZQRLYgTkFEXU/JQ2l8fBkkPMfTJAgk/S6kr53PYI8RdOssCd1IEgXCCJHJl4oPYQJeighKBZuI+HYOYoEWXhJKBknP47xOStSwbaHCUodHCyoSroJ1yXIs+pjd/roPzz5kKuVuBgpocY4LFFDxwjyrBAJb/nNblXGKysS5LUg8FMHTwNSY5qgOujIJf9jgrpEakrQVVxMG+sT0TeSIwTS0DKCwMq/TpCChMu+YeaEFwiCEEZXgaQ4F8QeGSWHaDP+HwgiDn9NC5ImpllSdH9KELgYNVRK0HhiGmXC8wSFVGpHvQ+HGEkcaYJSjYCgJjmNr0aQIlML4HkHTtovEgQWVEZQwxGzwsE3cgRpJDl/on8hxTRNkAVCkxD4CUEXu5j1ByZzZH7SWS5bR4P0yQRphiOAcKdFC88S1NBxLEZ1CV1dQupdbkH/TdClFkR2jvc7Ut3SFOWTPKhIkPAZQVrHxPwg4T0bCQ/Kj/ketHHMZaZIU3DClYlBJ1jQhQR5Oq57HX6cCP8sUTzNgjwsieNNLLw8D9KoYjNbW3oQgzIEwePJ9LcjyMaWzXM4g/ik1DiRIAunT7yDF3eEIMjL6UwvIQhaJnTRSVzsP4P0hTEINHMgt7+aBTVc/IxBhJcSJEFHzBFyCsILnEwVnSHEeif+/2YW5EHy+giBtaFfiSCPFEigdgOXKDRBITSB+D+FJLyHbZwO3j38Qj6TvjZBIe6G81QTvdiyOY8gq1kiHJeZFEEKqVGNceHrdIity9AJeZBU5mqxq7sYFFkmkaLgsM23LiMI9t5ZEuETfMyTcisg3SZn4LquhA5TwhLu/cSfmDCgmn/IVfPXtiD4yEY1TWw4cQV8oJxHELBPEWTBVyuI2zb9zcsxDAMlrpOli/kjx5gPZQTpS3K5ftD1CRLw9sAYSWkhLJ6XB4FlUC4GEwog/KlYiKCU25TxeY8juEC+SIZ4B3EL5GYuBokK18IOHjZBT+iJn2lBkEJAkCYdDc5JG4QamS/HUnMZy4GOGe+kOqLjMX0Gf127mQVBswWOeYveT9zOPY8gqlGcbrTGUdJTgyAfdQroJqnZALpj6VJ7eCITX2+4GUE2fJfnH8dKdHMk80GHN+0LCNJ+gRxBUqILLBnhnByvP/S5Y0hTQw2UrAZo/ZoEn114nNzezMU8Yt8835lOO3z2k6DjNM4nyCMNjFLhvO99ThBukelwzBmT5bIDzQcS/G9XarjUJ0jcjOCphVWU8wkiQSgRHovNCNdogqJmSAweP4EJahBmqYZJSvCNCdIKzSzBaUFX2nxMTpIzazFNyH2iRpv+KEFew8UHfegL8c0z8xFZx3Q6XXY6LdNweDQKTVaLg64JJeoP6R7erhZrjI3cvAZKcXuJxRj49tG5/aDenxz9JhfiuyzmJIlvkQXJ/tIdpzcPG55mj4OlI/ICKU/tR5PLwWxRZf8N+0FekI0BTzEpevStRYbOzLn9IE/KHFFCNS5egihZBPLDB9FxC9ctNVviqw+kfrdaPn01RuD8Dt0NuGVHsdGrQAzk/a4UL85b+kIVLpfcBdX02iBFkF8YCmQ8RArfsOJDISo20zseg67gw8WIRivQyi6oNLQxfX1O0SvE1nm5EmQujtWbXDwzV6EI4vBVxzOZIaoETnQp1JBFbgx7r1eou4ZaFDkRqM1QzHSI1CiKkA7RPVNP4mLhhv9HAuHBL+q7xVeh6X8Mw3Qc05QNN/9haZJMbZKiBtl4QpB5jXucih2GYfYC86VX+/LCM0s6U7jVC1w36F1jxT8Pw+ftaDSbzUajl+3wbyvz/w7D0er3Zl1rR1Dv978Xz39bo6+i/x2TDFebuVqr1e5T1FT18EMYmn3sb65pf0VxAxjdetrr4GWttl9vS1Ffbasqsp/5GmFeUxOuaj+EoLvRWlXnN40Io/3u99tq9Y6iMwrSi9Wm9pMsCNnQXr1v729IUf95mAl02wNiqLZ+udmE18bzrn1fq23evu3onbURQZsfEqQj9F9VpHFN3X2TzqOIoN2PSoXeP6K4oLY3LzdUuz8cPce+FlmQurrdRLfAy0GNj5b2Zra9TWb0PHpFp9nsLjr1o7nebzLL7TB8S1KVWnv9Nru6q/VfFocaokV9i6baoZlun31dG/3RXE2z3Pnm9+iaZvS8OKzj7EddRx48jCY5XFH+twGdZmklgLK63ZWO4eH7fp7m0e1dPLKNQtBP87AEoz1VLrXbu1kugzkR/eHzat1up5lzbZ+mhpGHza+i7/djuNhjK0o42ixG2+dzSOo/v8xe520VE67OV/iARJ7cXlxT62/F9q2m3mc4mh/eFqOTSBpuZ4u3zX1bpcQQj31Baen8RyVBWfS3u3a29Ebl5Xxz+L2afaHN9fzy/ro77OeqSsto70fkVVRotGe3XMHtsd20892JWoT5x8d+h8xpW4hM/eF29L46rD8+5rV8a6OmqjQfw4979Wdl0WXYHtYlHZx0ue0EtfV6v9+v1/fpQNZogNj5JntgLVC03v6lZV0T29VGVYsLLljVER7TJ9rr37OstfUPtfmPaXR8juf3Xa3gaqdAbe8XL3lnHM1/egCiMNwuqIP6NNTa6ttLSTnxvv5H7CdFf/taO5mjKE4djhUr3/KR4HuBwtG+eDgd4QZVcvvN6l+IwifhOf6qpSJbOsoSoqatrjcoXfpxdfp1ENUOi7fd/j4+0dUaQXzw1/Yo4Z69nFWW/ENA5ed2+/K+WL0eDpt9lAhtdrvX1ftou72srv3n0Kfxt5VhYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBg+C/8D1UoMhG8d6VfAAAAAElFTkSuQmCC' alt=''/>
        </Link>
        <div className='login__container'>
            <h1>Sign in</h1>
            <form>
                <h5>Email</h5>
                <input type="email" value={email} onChange={event => setEmail(event.target.value)}/>
                <h5>Password</h5>
                <input type="password" value={password} onChange={event => setPassword(event.target.value)}/>
                <button className='login__signin' type='submit' onClick={login}>Sign in</button>
            </form>
            <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
            </p>
            <button className='login__register' onClick={register}>Create your Amazon Account</button>
        </div>
      
    </div>
  )
}

export default Login
