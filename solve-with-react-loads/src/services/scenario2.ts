export interface ItemTitle {
    id: number; 
    name: string; 
}

export interface ItemDetails {
    id: number; 
    name: string; 
    details: string; 
}

export function fetchList() : Promise<ItemTitle[]> {
    const promise = new Promise((res) => {
        setTimeout(() => {
            res([
                {
                    id: 1, 
                    name: "Andy", 

                }, 
                {
                    id: 2, 
                    name: "Bob", 

                }, 
                {
                    id: 3, 
                    name: "Charlie", 

                }, 
            ]);  
        }, 3000);         
    }) as Promise<ItemTitle[]>; 

    return promise; 
}

const items : {
    [i: number]: ItemDetails
} =  {
    1:  {
        id: 1, 
        name: "Andy", 
        details: "A great software engineer", 


    }, 
    2:  {
        id: 2, 
        name: "Bob", 
        details: "A fantastic swimmer", 


    }, 
    3: {
        id: 3, 
        name: "Charlie", 
        details: "A superb chef", 


    }
}

export function fetchItem(i: number) : Promise<ItemDetails> {
    const promise = new Promise((res, rej) => {
        setTimeout(() => {

            const item = items[i]; 
            if (!item) {
                rej("Item not found"); 
            }
            else {
                res(item); 
            }
           
        }, 3000);         
    }) as Promise<ItemDetails>; 

    return promise; 
}