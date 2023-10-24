import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [password, passwordchange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const [date, datechange] = useState("");
    const [gender, genderchange] = useState("femenino");
    const navigate = useNavigate();
    const IsValidate = () => {
        let isproceed = true;
        let errormessage = 'Ingresa un valor en ';
        if (id === null || id === '') {
            isproceed = false;
            errormessage += 'Nombre de Usuario';
        }
        if (name === null || name === '') {
            isproceed = false;
            errormessage += ' Nombre Completo';
        }
        if (password === null || password === '') {
            isproceed = false;
            errormessage += ' Contraseña';
        }
        if (email === null || email === '') {
            isproceed = false;
            errormessage += ' Email';
        }
        if(!isproceed){
            toast.warning(errormessage)
        }else{
            if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){
            }else{
                isproceed = false;
                toast.warning('Porfavor ingresa un Email Valido')
            }
        }
        return isproceed;
    }
    const handlesubmit = (e) => {
            e.preventDefault();
            let regobj = { id, name, password, email, phone, date, gender };
            if (IsValidate()) {
            //console.log(regobj);
            fetch("https://miniback-books-app-i9fd.onrender.com/user", {
                method: "POST",
                headers: { 'content-type': 'application/ json' },
                body: JSON.stringify(regobj)
            }).then((res) => {
                toast.success('Registered successfully.')
                navigate('/login');
            }).catch((err) => {
                toast.error('Failed :' + err.message);
            });
        }
    }
    return (
        <div style={{ paddingTop: '7%' }}>
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit}>
                    <div className="card">
                        <div className="card-header">
                            <h1>Registro de Usuario</h1>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Nombre de Usuario <span className="errmsg">*</span></label>
                                        <input value={id} onChange={e => idchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Contraseña <span className="errmsg">*</span></label>
                                        <input value={password} onChange={e => passwordchange(e.target.value)} type="password" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Nombre Completo <span className="errmsg">*</span></label>
                                        <input value={name} onChange={e => namechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Email <span className="errmsg">*</span></label>
                                        <input value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Telefono <span className="errmsg"></span></label>
                                        <input type="number" value={phone} onChange={e => phonechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Fecha de Nacimiento <span className="errmsg"></span></label>
                                        <input type="date" value={date} onChange={e => datechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Sexo</label>
                                        <br />
                                        <input type="radio" checked={gender === 'masculino'} onChange={e => genderchange(e.target.value)} name="gender" value="masculino" className="app-check"></input>
                                        <label>Masculino</label>
                                        <input type="radio" checked={gender === 'femenino'} onChange={e => genderchange(e.target.value)} name="gender" value="femenino" className="app-check"></input>
                                        <label>Femenino</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Registrar</button> |
                            <Link to={'/profundizacion-sprint2-modulo2-eflight/login'} className="btn btn-danger">Cerrar</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;