


export interface SubmitForm {
    firstName: string; 
    lastName: string; 
}

export interface SubmitFormResponse {
    firstName: string; 
    lastName: string; 
    id: number; 
}

export function submitForm(data: SubmitForm) : Promise<SubmitFormResponse> {


    const promise = new Promise((res) => {
        setTimeout(() => {
            res({
                ...data, 
                id: Math.floor(Math.random() * 10000 )
            });  
        }, 3000);         
    }) as Promise<SubmitFormResponse>; 

    return promise; 
  
}

export const x = 0; 