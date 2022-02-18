let $form= document.getElementById('form');

async function handleSubmit(e){
    let data = new FormData(this);
     let response = await fetch($form.action,{
        method:this.method,
        body:data,
        headers:{
            'Accept' :'aplication/json'
        }
    })
    if(response.ok){
        alert('gracias por contactarme, te repondere lo mas pronto :)')
        $form.reset()
    }
}

$form.addEventListener('submit',handleSubmit())