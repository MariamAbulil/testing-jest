const sum=require('./sum')
const shoppingList=['Milk','coffe','tea']
test('add 1+2 is eqaul to 3',()=>{
    expect(sum(1,2)).toBe(3);
})


test('assign obj',()=>{
    const data={one:1}
    data['two']=2
    expect(data).toEqual({one:1,two:2})
})

test('add two positiv number is not equal zero',()=>{
    for(let a=1;a<10;a++){
        for(let  b=1;b<10;b++){
            expect(a+b).not.toBe(0)
        }
    }
})
it('null value',()=>{
    const n= null;
    expect(n).toBeNull()
    expect(n).toBeDefined()
    expect(n).not.toBeUndefined()
    expect(n).toBeFalsy()
    expect(n).not.toBeTruthy()
})
it('zero',()=>{
    const n=0
    expect(n).not.toBeNull()
    expect(n).not.toBeUndefined()
    expect(n).toBeDefined()
    expect(n).not.toBeTruthy()
    expect(n).toBeFalsy()


})
//number testing
it('2+2',()=>{
    const vaule=2+2;
    expect(vaule).toBeLessThan(5)
    expect(vaule).toBeGreaterThan(3)
    expect(vaule).toBeGreaterThanOrEqual(4)
})
it('floating number',()=>{
    const  value=.1+.2;
    //expect(value).toBe(.3) //Expected: 0.3
    //Received: 0.30000000000000004
    expect(value).toBeCloseTo(.3)
})
//string
it('There is no I in team',()=>{
    expect('team').not.toMatch(/I/)

})
it('to inside today',()=>{
    expect('today').toMatch(/to/)
})

//array
it('is Milk contain in shoppingList',()=>{
    expect(shoppingList).toContain('Milk')
    expect(new Set(shoppingList)).toContain('Milk')//Set is deleted th repeat item 

})

//exception
function compilerCode(){
    throw new Error('you are using wrong JDK!')

}
test('throw error',()=>{
    expect(()=>{compilerCode()}).toThrow()//test if the fun. throw error
    expect(()=>{compilerCode()}).toThrow(Error) //test is thype of error is Error

expect(() => compilerCode()).toThrow('you are using wrong JDK!');//is contain this text
expect(() => compilerCode()).toThrow(/JDK/);//is contain the JDK
expect(() => compilerCode()).toThrow(/^you are using wrong JDK!$/);//regular expression
})

/* 

async function fetchData() {
    // قم بتغيير URL إلى واجهة برمجة التطبيقات التي ترغب في الوصول إليها
    const response = await fetch('https://api.example.com/data');
  
    // تحقق مما إذا كان الطلب ناجحًا
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  
    // استرجع البيانات بصيغة JSON
    const data = await response.json();
    return data;
  }
  const data=fetchData()

test('the data is peanut butter', async () => {
    const data = await fetchData();
    expect(data).toBe('peanut butter');
  });
  
  test('the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
      await fetchData();
    } catch (error) {
      expect(error).toMatch('error');
    }
  }); */


//Mock function 
  describe('return greeeting ',()=>{
    test('greetingMock',()=>{
        const greetingMock=jest.fn((username)=> "welcome"+username)
       /*  const result=greetingMock(" mariam")
        expect(result).toBe("welcome mariam") */
        expect(greetingMock(' mariam')).toBe("welcome mariam")//when we write this greetingMock(' mariam') is mean to run function-called

        expect(greetingMock).toHaveBeenCalled();//check if the func is called -run 
        expect(greetingMock).toHaveBeenCalledTimes(1)
        expect(greetingMock).toHaveBeenCalledWith(" mariam") // it need the args here like this : greetingMock('mariam')


    })
    test('shoppingList',()=>{
        const shoppingListMock=jest.fn(()=>shoppingList)
        const result=shoppingListMock();
        expect(result).toHaveLength(3)
        expect(result).toEqual(shoppingList)
        expect(shoppingListMock).toHaveBeenCalled()
        expect(shoppingListMock).toHaveBeenCalledTimes(1)


    })
  })
