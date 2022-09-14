import React from 'react'
import './Doctors.scss'
import Container from "../../UsableComponents/Container/Container";
import Title from "../../UsableComponents/Title/Title";

import Doc1 from '../../../assets/images/doc1.png'
import Doc2 from '../../../assets/images/doc2.png'
import Doc3 from '../../../assets/images/doc3.png'
import Doc4 from '../../../assets/images/doc4.png'
import Doc5 from '../../../assets/images/doc5.png'
import DoctorCard from "../../UsableComponents/Cards/DoctorCard/DoctorCard";

const data = [
    {id: 1, img: Doc1, name: 'Toirjon', lastname: 'Tojiev Xursanovich'},
    {id: 2, img: Doc2, name: 'Toirjon', lastname: 'Tojiev Xursanovich'},
    {id: 3, img: Doc3, name: 'Toirjon', lastname: 'Tojiev Xursanovich'},
    {id: 4, img: Doc4, name: 'Toirjon', lastname: 'Tojiev Xursanovich'},
    {id: 5, img: Doc5, name: 'Toirjon', lastname: 'Tojiev Xursanovich'},
    {id: 6, img: Doc1, name: 'Toirjon', lastname: 'Tojiev Xursanovich'},
    {id: 7, img: Doc2, name: 'Toirjon', lastname: 'Tojiev Xursanovich'},
    {id: 8, img: Doc3, name: 'Toirjon', lastname: 'Tojiev Xursanovich'},
    {id: 9, img: Doc4, name: 'Toirjon', lastname: 'Tojiev Xursanovich'},
    {id: 0, img: Doc5, name: 'Toirjon', lastname: 'Tojiev Xursanovich'},
]

function Doctors() {
    return (
          <section className='doctors'>
              <Title children={'Doctors'} url={'/doctors'}/>
              <div className='doctors__container'>
                  <div className='doctors__wrapper'>
                      {data.map(doc => (
                            <DoctorCard data={doc}/>
                      ))}
                  </div>
              </div>
          </section>
    )
}

export default Doctors