export const Solution = (num:number): number =>{
    let res: number = 0;
    
    for(let i: number = 0; i < num; i++)
    {
        res += i;
    }

    return res;
  }