
import React, { useState } from 'react'

const Genrator=()=>{
    const[ustate,upstate]=useState('')
    const[lstate,lpstate]=useState('')
    const[nstate,npstate]=useState('')
    const[sstate,pnstate]=useState('')
    

    const lowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialcharacter='!@#$%^&*'

    const randomgerator=(chr)=>{
        const randomIndex = Math.floor(Math.random() * chr.length);
        return chr[randomIndex];
    }
    const generated=()=>{
            const lowerLetter1 = randomgerator(lowercaseAlphabet);
            const lowerLetter2 = randomgerator(lowercaseAlphabet);
            const upperLetter1 = randomgerator(uppercaseAlphabet);
            const upperLetter2 = randomgerator(uppercaseAlphabet);
            const lowerLetter3 = randomgerator(lowercaseAlphabet);
            const lowerLetter4 = randomgerator(lowercaseAlphabet);
            const lowerLetter5 = randomgerator(lowercaseAlphabet);
            const num=randomgerator(numbers)
            const spec=randomgerator(specialcharacter)
            
            upstate(`${lowerLetter1}${lowerLetter2}${lowerLetter3}${lowerLetter4}${lowerLetter5}`)
            lpstate(`${upperLetter1}${upperLetter2}`)
            npstate(num)
            pnstate(spec)
            


    }



return(
    <div>

        <p1> this is password genertor</p1>
        <p>the password is  {lstate}{nstate}{ustate}{sstate}</p>
        
        

        
        <button onClick={generated}>click</button>
    </div>
)
}


export default Genrator
