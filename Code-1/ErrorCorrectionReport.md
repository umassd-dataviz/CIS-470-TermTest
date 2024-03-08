Code 1:
Bugs:
i)	“isStudent && hasCoupon “. It had “||” instead of “&&”. 

ii)	Both else if checked ‘hasCoupon’. One should check isStudent. 

iii)	Add below two conditions for type check of Boolean 

    if (typeof isStudent !== 'boolean') {
      throw new Error("Invalid isStudent type: It should be either true or false");
    }
    if (typeof hasCoupon !== 'boolean') {
      throw new Error("Invalid hasCoupon type: It should be either true or false");
    }
