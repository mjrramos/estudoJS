const calc = document.getElementById('calc')



function imc (){
    const name = document.getElementById('name').value
    const height = document.getElementById('height').value
    const weight = document.getElementById('weight').value
    const result = document.getElementById('result')
    
    if(name !== '' && weight !== '' && height !== '') {
        const imcValue = (weight / (height * height))

        let classification = '';

        if (imcValue < 18.5){
            classification = 'abaixo do peso'
        }
        else if (imcValue < 25){
            classification = 'com peso ideal'
        }
        else if (imcValue < 30){
            classification = 'levemente acima do peso'
        }
        else if (imcValue < 35){
           classification = 'com obesidade grau I' 
        }
        else if (imcValue < 40){
            classification = 'com obesidade grau II' 
        }
        else {
            classification = 'com obesidade grau III'
        }
        
        result.textContent = `${name} o valor do seu IMC é ${imcValue.toFixed(1)} e você está ${classification}`
    }
    else {

        result.textContent = 'Preencha todos os campos antes de calcular!'
    }

}


calc.addEventListener('click', imc)