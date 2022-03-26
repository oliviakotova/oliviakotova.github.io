import Nav from '../components/Nav'
import { useState} from 'react'

const OnBoarding = () => { 

    const [formData, setFormData] = useState({
        user_id: '',
        first_name: '',
        dob_day: '',
        dob_month: '',
        dob_year: '',
        show_identity: false,
        identity: 'volunteer',
        interest: 'need_volunteer',
        email: '',
        about: '',
        url:'',
        matches:[]

    })

    const handleSubmit = () => {
        console.log('submitted')
    }

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        const name = e.target.name

        setFormData((prevState) => ({
            ...prevState,
            [name] : value
        }))
    }

   console.log(formData)
   
    return (
        <>
            <Nav
                minimal={true}
                setShowModal={() => {}}
                showModal={false}
            />
        <div className="onboarding">
            <h2>CREATE ACCOUNT</h2>

            <form onSubmit={handleSubmit}>
                <section>
                    <label htmlFor="first_name">First Name</label>
                    <input
                        id="first_name"
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                        required={true}
                        value={formData.first_name}
                        onChange={handleChange}
                    />
                 
                    <label>Birthday</label>
                    <div className="multiple-input-container">
                    <input
                        id="dob_day"
                        type="number"
                        name="dob_day"
                        placeholder="DD"
                        required={true}
                        value={formData.dob_day}
                        onChange={handleChange}
                    />
                    <input
                        id="dob_month"
                        type="number"
                        name="dob_month"
                        placeholder="MM"
                        required={true}
                        value={formData.dob_month}
                        onChange={handleChange}
                    />
                     <input
                        id="dob_year"
                        type="number"
                        name="dob_year"
                        placeholder="YYYY"
                        required={true}
                        value={formData.dob_year}
                        onChange={handleChange}
                    />
                    </div>
                

                    <label>Volunteer or Need Volunteer:</label>

                    <div className="multiple-input-container">

                    <input
                        id="volunteer-identity"
                        type="radio"
                        name="identity"
                        value="volunteer"
                        onChange={handleChange}
                        checked={formData.identity === 'volunteer'}
                    />
                    <label htmlFor="volunteer-identity">Would like to be Volunteer</label>


                    <input
                        id="need-volunteer-identity"
                        type="radio"
                        name="identity"
                        value="need_volunteer"
                        onChange={handleChange}
                        checked={formData.identity === 'need_volunteer'}
                    />
                       <label htmlFor="need-volunteer-identity">Need Volunteer</label>

                    <input
                        id="more-identity"
                        type="radio"
                        name="identity"
                        value="more"
                        onChange={handleChange}
                        checked={formData.identity === 'more'}
                    />
                       <label htmlFor="more-identity">More</label>
                    </div>

                    <label htmlFor="show_identity">Show identity on my profile</label>
                    <input
                        id="show_identity"
                        type="checkbox"
                        name="show_identity"
                        onChange={handleChange}
                        checked={formData.show_identity}
                    />
                    

                    <label>Chose Interests:</label>  


                    <div className="multiple-input-container">    
                    <input
                        id="volunteer-interest"
                        type="radio"
                        name="interest"
                        value="volunteer"
                        onChange={handleChange}
                        checked={formData.interest === 'volunteer'}
                    />
                    <label htmlFor="volunteer-interest">Volunteer</label>

                    

                    <input
                        id="need-volunteer-interest"
                        type="radio"
                        name="interest"
                        value="need_volunteer"
                        onChange={handleChange}
                        checked={formData.interest === 'need_volunteer'}
                    />
                     <label htmlFor="need-volunteer-interest">Need Volunteer</label>



                    <input
                        id="everyone-interest"
                        type="radio"
                        name="interest"
                        value="everyone"
                        onChange={handleChange}
                        checked={formData.interest === 'everyone'}
                    />
                       <label htmlFor="everyone-interest">Everyone</label>
                    </div>

                    <label htmlFor="about">About me</label>
                    <input
                        id="about"
                        type="text"
                        name="about"
                        required={true}
                        placeholder="I would like to support people..."
                        value={formData.about}
                        onChange={handleChange}
                    />
                    <input type="submit"/>
                </section>

                <section>
                    <label htmlFor="url">Profile Photo</label>
                    <input 
                        type="url"
                        name="url"
                        id="url"
                        onChange={handleChange}
                        required={true}
                    />
                    <div className="photo-container">
                    <img src={formData.url} alt="profile pic preview"/>
                    </div>

               
                </section>
                
                
            </form>

        </div>
        </>
    )
}
export default OnBoarding
