import React from 'react'
import Person from './Person';

function PersonList() {
    const Persons=[ 
        {id:1,
        name:'seema',
        age:28,
        skill:'Python'
      },
      {id:2,
        name:'rutu',
        age:19,
        skill:'c'
      },
        
      {id:3,
        name:'jayu',
        age:25,
        skill:'full stack'
      },
      {id:4,
        name:'tina',
        age:23,
        skill:'HTML'
      }];
      const personList=Persons.map( person=><Person person={person}/>
      )
        return (
          <div>
               {
                   personList
               }
      
          </div>
        )
      }
      
      export default PersonList;